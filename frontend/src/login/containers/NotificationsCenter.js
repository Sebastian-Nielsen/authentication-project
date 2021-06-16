import {AnimatePresence, motion} from "framer-motion";
import React from "react";
import {NotificationContext} from "../components/Notifications";

const Notifications = () => {

	return (
			<NotificationContext.Consumer>
				{({notifications, removeNotifAt}) =>

						<div id="notificationCenter">
							{notifications.map((notif, index) =>

									// <AnimatePresence>
										<motion.div className={`notif ${notif.type.toLowerCase()}`} key={notif.id}
										            onClick={() => removeNotifAt(index)}
										            initial={{ scale: 0.5, x: "-200px" }}
										            animate={{ scale: 1,   x: 0        }}
										            // exit={{ scale: 0, x: "200px" }}
										>
											<div className="icon">
												<img src={window.location.origin + '/times.svg'} alt=""/>
											</div>
											<div className="message">
												<div className="title">{}</div>
												{notif.msg} (id: {notif.id})
											</div>
										</motion.div>
									// </AnimatePresence>

							)}
						</div>

				}
			</NotificationContext.Consumer>
	)
}

export default Notifications
