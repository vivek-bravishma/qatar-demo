import React from "react";
import userSVG from "../../assets/icons/user.svg";

const NavBar = ({ user, setUser, setUserPresent }) => {
	const logoutBtnHandler = () => {
		localStorage.removeItem("user-details");
		setUser({});
		setUserPresent(false);
		sessionStorage.clear();
	};

	return (
		<nav className="navbar navbank">
			<div className="container-fluid">
				<div className="navbar-header padding-left-brand">
					<button
						type="button"
						className="navbar-toggle"
						data-toggle="collapse"
						data-target="#myNavbar">
						<span className="icon-bar white-bg"></span>
						<span className="icon-bar white-bg"></span>
						<span className="icon-bar white-bg"></span>
					</button>
					<span className="navbar-brand whiteColor">
						{/* <span className="healthcare-brand-beyond">Beyond</span>
						<span className="healthcare-brand">Services</span> */}
					</span>
				</div>
				<div className="collapse navbar-collapse" id="myNavbar">
					<ul className="nav navbar-nav healthcare-menu ff-inter">
						{/* <li>
							<a href="#" className="whiteColor">
								Internet
							</a>
						</li>
						<li>
							<a href="#" className="whiteColor">
								Fibre
							</a>
						</li>
						<li>
							<a href="#" className="whiteColor">
								Business
							</a>
						</li>
						<li>
							<a href="#" className="whiteColor">
								Support
							</a>
						</li> */}
						<li>
							<a href="#" className="whiteColor user-login-a">
								<div className="user-login-btn">
									<span>
										{user.name ? user.name : "Login"}
									</span>
									<img
										className="user-icon"
										alt=""
										src={userSVG}
									/>
									{/* {user.name && (
										<button type="button" className="logoutBtn">Logout</button>
									)} */}
								</div>
							</a>
						</li>
						<li>
							{/* <a href="#" className="whiteColor user-login-a">
								<div className="user-login-btn">
								</div>
							</a> */}
							{user.name && (
								<button
									type="button"
									className="logoutBtn"
									onClick={logoutBtnHandler}>
									Logout
								</button>
							)}
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
