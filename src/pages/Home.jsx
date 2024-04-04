import { useEffect, useState } from "react";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer/index";

import LoginForm from "../components/LoginForm";
// import NavBar from "../components/NavBar";
import "./Home.css";

import roundedRect from "../assets/roundedRect.svg";
// import bgImg from "../assets/images/bg.jpg";
// import logoImg from "../assets/images/logo.png";

import Main from "../components/Main";
import Login from "../components/Login";

const Home = ({ user, setUser }) => {
	const [userPresent, setUserPresent] = useState(false);
	const [messengerReady, setMessengerReady] = useState(false);
	// console.log("================z> ", user);
	useEffect(() => {
		if (Object.keys(user).length) {
			setUserPresent(true);
		}
	}, [user]);

	useEffect(() => {
		let usr = localStorage.getItem("user-details");
		console.log("=====found usr==========> ", JSON.parse(usr));
		if (usr) {
			setUser(JSON.parse(usr));
			setUserPresent(true);
		}
		return () => {};
	}, []);

	// console.log("userPresent====> ", userPresent);

	useEffect(() => {
		console.log("messengerReady--> ", messengerReady);
		let msgInterval = null;

		if (!messengerReady) {
			msgInterval = setInterval(() => {
				if (window.messengerReady) setMessengerReady(true);
			}, 0);
		}

		if (messengerReady) {
			clearInterval(msgInterval);
		}

		return () => {
			clearInterval(msgInterval);
		};
	}, [messengerReady]);

	useEffect(() => {
		if (userPresent && messengerReady) {
			const { userId, jwtToken } = user;
			msgrLogin(userId, jwtToken);
		}
	}, [user, userPresent, messengerReady]);

	return (
		<div className="container-man">
			<NavBar
				user={user}
				setUser={setUser}
				setUserPresent={setUserPresent}
			/>
			<div className="container-content">
				{userPresent ? (
					<Main />
				) : (
					<Login setUser={setUser} setUserPresent={setUserPresent} />
				)}
			</div>
			<Footer />
		</div>
	);
};

function msgrLogin(userId, jwtToken) {
	// console.log('userid==> ',userId," -- tokn -- ",jwtToken);
	try {
		const avMessenger = window.AvMessagingSdk;
		console.log("avMessenger==> ", avMessenger);
		avMessenger.login(userId, jwtToken);
	} catch (error) {
		console.log("msg function not available.");
	}
}

export default Home;
