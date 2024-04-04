import React from "react";
import LoginForm from "../LoginForm";
import "./style.css";

const Login = ({ setUser, setUserPresent }) => {
	return (
		<div className="login-container">
			<img
				src="./assets/images/servicenowslider.jpg"
				className="img-fluid width-100p"
				alt="Responsive image"
				style={{ width: "100%", height: "100%" }}
			/>
			<LoginForm setUser={setUser} setUserPresent={setUserPresent} />
		</div>
	);
};

export default Login;
