import React, {Component, createContext} from "react";
import {AnimatePresence, motion} from "framer-motion"

export const NotifyTypeEnum = Object.freeze({
	ERROR: {
		type: "Error",
		notification_duration: 5000
	},
	SUCCESS: "Success",
	NOTICE: {
		type: "Notice",
		notification_duration: 2000
	},
	WARN: {
		type: "Warning",
		notification_duration: 2000
	}
})
export const NotifyEnum = Object.freeze({
	ERR_INCORRECT_PWD_OR_USERNAME: {
		msg: "Incorrect password or username",
		...(NotifyTypeEnum.ERROR)
	},
	ERR_USERNAME_IS_ALREADY_TAKEN: {
		msg: "Username is already registered",
		...(NotifyTypeEnum.ERROR)
	},
	ERR_EMAIL_IS_ALREADY_IN_USE: {
		msg: "Email is already in use",
		...(NotifyTypeEnum.ERROR)
	},
	NOTICE_PWDS_DO_NOT_MATCH: {
		msg: "Passwords do not match",
		...(NotifyTypeEnum.NOTICE)
	},
	WARN_NOT_AUTHENTICATED: {
		msg: "You are not authenticated. Please sign in.",
		...(NotifyTypeEnum.WARN)
	}
})

export const NotificationContext = createContext({});

export default class NotificationsProvider extends Component {
	static #notifId = 0;
	state = {
		notifications: []
	}
	createNotification = notifyEnum => {
		console.log(notifyEnum)
		NotificationsProvider.#notifId++;
		console.log("[createNotification] -----")
		console.log("[createNotification] Type:", notifyEnum.type)
		console.log("[createNotification] msg:", notifyEnum.msg)
		console.log("[createNotification] duration:", notifyEnum.notification_duration)
		console.log("[createNotification] id:", NotificationsProvider.#notifId)
		console.log("[createNotification] -----")

		const notifId = NotificationsProvider.#notifId // this line is necessary for some reason
		setTimeout(() => this.removeNotifBy(notifId), notifyEnum.notification_duration)

		const newNotif = {
			id: notifId,
			type: notifyEnum.type,
			msg: notifyEnum.msg
		}
		this.setState(prevState => ({
			notifications: [...prevState.notifications, newNotif]
		}))
		console.log(this.state.notifications)

	}

	// addNotif = notifyEnum => {
	// 	const newNotif = this.createNotification(notifyEnum)
	// 	this.setState(prevState => ({
	// 		notifications: [...prevState.notifications, newNotif]
	// 	}))
	// }
	removeNotifBy = id => {
		const indexOfId = this.state.notifications.findIndex(notif => {
			return notif.id === id
		})
		const idIsPresentInNotifications = indexOfId !== -1

		if (!idIsPresentInNotifications) {
			console.log("id is not present in notifications-arr, ", id)
			return
		}
		console.log("id is present in notifications-arr, ", id)

		this.setState(prevState => {
			const copy = [...prevState.notifications]
			copy.splice(indexOfId, 1)
			return {notifications: copy}
		})
	}
	removeNotifAt = index => {
		this.setState(prevState => {
			const copy = [...prevState.notifications]
			copy.splice(index, 1)
			return {notifications: copy}
		})
	}

	render() {
		return (
				<NotificationContext.Provider value={{
					notifications: this.state.notifications,
					// add: this.addNotif,
					removeNotifAt: this.removeNotifAt, // ... at index
					removeNotifBy: this.removeNotifBy, // ... by id
					createNotification: this.createNotification
				}}
						children={this.props.children}
				/>
		)
	}
}


const Notifications = (props) => {

	return (
			<AnimatePresence>
				<NotificationContext.Consumer>
					{({notifications, removeNotifAt, removeNotifBy}) =>

							<div id="notificationCenter">
								{notifications.map((notif, index) =>

											<motion.div className={`notif ${notif.type.toLowerCase()}`} key={notif.id} //key={Math.floor(1+Math.random() * 10000)}
											            onClick={() => removeNotifAt(index)}
											            // onClick={e => e.currentTarget.remove()}
											            // onClick={() => removeNotifBy(notif.id)}
											            initial={{ scale: 0.5, x: "-200px" }}
											            animate={{ scale: 1,   x: 0        }}
											            exit={{ scale: 0.1, x: "-200px" }}
											>
												<div className="icon">
													<img src={window.location.origin + '/times.svg'} alt=""/>
												</div>
												<div className="message">
													<div className="title">{}</div>
													{notif.msg} ({notif.id})
												</div>
											</motion.div>
								)}
							</div>

					}
				</NotificationContext.Consumer>
			</AnimatePresence>
	)
}

export {Notifications}