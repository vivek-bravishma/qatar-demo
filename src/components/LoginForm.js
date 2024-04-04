import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./LoginForm.css";
import config from "../utils/config";
import usersJSON from "../utils/users.json";

const loginApiUrl = config.loginUrl;

const LoginForm = ({ setUser, setUserPresent }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isDisabled, setIsDisabled] = useState(false);

	// setUser({ userName, userId, jwt });
	// setUserPresent(true);

	const handleLogin = (e) => {
		// const loadingToaster = toast.loading("Loging In...");
		e.preventDefault();
		// setIsDisabled(true);

		console.log("username==> ", username, username.includes("@"));
		console.log("password==> ", password);

		let user = usersJSON.find((ele) =>
			username.includes("@")
				? ele.email === username
				: ele.membershipNo === username
		);

		console.log("========user=========> ", user);

		if (user) {
			setUser(user);
			setUserPresent(true);
			toast.success("Login Successful");
			localStorage.setItem("user-details", JSON.stringify(user));
		} else {
			toast.error("Login Failed");
			setUsername("");
			setPassword("");
		}
		// let data = {
		// 	userId: username,
		// 	password: password,
		// };

		// axios
		// 	.post(loginApiUrl, data)
		// 	.then((response) => {
		// 		console.log("api resp==> ", response.data);
		// 		setUser(response.data);
		// 		setUserPresent(true);
		// 		toast.success("Login Successful");
		// 		setIsDisabled(false);
		// 	})
		// 	.catch((error) => {
		// 		console.log("api err==> ", error);
		// 		toast.error("Login Failed");
		// 		setIsDisabled(false);
		// 	});
	};
	const inputHandler = (e, setter) => {
		setter(e.target.value);
	};

	return (
		<form className="form" onSubmit={handleLogin}>
			<div className="login-header-wrapper">
				<h2 className="login-header">LOGIN</h2>
			</div>
			<input
				className="form-input"
				placeholder="Enter your email address or membership number"
				type="text"
				onChange={(e) => inputHandler(e, setUsername)}
				value={username}
				required
			/>
			<input
				className="form-input"
				placeholder="Password"
				type="password"
				onChange={(e) => inputHandler(e, setPassword)}
				value={password}
				required
			/>
			<button
				className="form-btn btn btn-info loginFormBtn"
				disabled={isDisabled}>
				Login
			</button>
		</form>
	);
};

export default LoginForm;
