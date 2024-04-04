import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import "./App.css";
import Home from "./pages/Home";
// import MyClass from "./pages/MyClass";
import FeedBack from "./components/FeedBack";

function App() {
	const [user, setUser] = useState({});
	const queryParameters = new URLSearchParams(window.location.search);
	const userId = queryParameters.get("userId");
	const jwtToken = queryParameters.get("jwtToken");
	const name = queryParameters.get("name");

	// console.log("name==> ", name);
	// console.log("userId=> ", userId);
	// console.log("jwtToken=> ", jwtToken);

	useEffect(() => {
		if (name && userId && jwtToken) {
			setUser({ name, userId, jwtToken });
			console.log("hi==> ", user);
		}
	}, []);

	// useEffect(() => {
	//   setTimeout(() => {
	//     console.log("extd");
	//     if (typeof window.AvMessagingSdk === "object") {
	//       const avMessenger = window.AvMessagingSdk;
	//       console.log("avMessenger==> ", avMessenger);
	//       avMessenger.login(userId, jwtToken);
	//     } else {
	//       console.error("msg function not available.");
	//     }
	//   }, 5000);
	// }, []);

	return (
		<div className="App">
			<ToastContainer />
			<Home user={user} setUser={setUser} />
			{/* <MyClass /> */}
			<FeedBack user={user}/>
		</div>
	);
}

export default App;
