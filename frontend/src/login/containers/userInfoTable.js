import Resource from "../components/Resource";
import {motion} from "framer-motion";
import {deleteUser} from "../components/api";


const UserInfoTable = () => {
	return (
			<Resource
					path="/loginForm/fetchAllDataFromAllUsers"
					render={data => {
						if (data.isLoading) return <h3>Data is loading ..</h3>
						if (data.err === undefined) return <h3>Error: {JSON.stringify(data)}</h3>
						return <table>
							<tbody>
							<tr>
								<th>Username</th>
								<th>Password</th>
								<th>email</th>
							</tr>
							{data.payload.map(user =>
									<motion.tr onClick={e => deleteUser(user.username, () => e.target.parentElement.remove())} key={user.username}
									           exit={{ scale: 0.2 }}
									>
										<td>{user.username}</td>
										<td>{user.unecrypted_password}</td>
										<td>{user.email}</td>
									</motion.tr>
							)}
							</tbody>
						</table>
					}}
			/>
	)
}
export default UserInfoTable