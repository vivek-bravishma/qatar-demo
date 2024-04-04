import React from "react";

const Footer = () => {
	return (
		<div className="container-fluid b-footer-bg">
			<div className="row foot-cont">
				<div className="col-sm-2"></div>
				<div className="col-sm-8">
					<div className="row text-center">
						<div className="custom-col-xs-7">
							<a href="/" className="foot-link">
								Home
							</a>
						</div>
						<div className="custom-col-xs-7 border-left">
							<a href="/bank" className="foot-link">
								Beyond Bank
							</a>
						</div>
						<div className="custom-col-xs-7 border-left">
							<a href="/education" className="foot-link">
								Beyond Education
							</a>
						</div>
						<div className="custom-col-xs-7 border-left">
							<a href="/healthcare" className="foot-link">
								Beyond Healthcare
							</a>
						</div>
						<div className="custom-col-xs-7 border-left">
							<a href="/travel" className="foot-link">
								Beyond Travel
							</a>
						</div>
						<div className="custom-col-xs-7 border-left">
							<a href="/retail" className="foot-link">
								Beyond Retail
							</a>
						</div>
						<div className="custom-col-xs-7 border-left">
							<a href="/custom" className="foot-link">
								Beyond Customer
							</a>
						</div>
					</div>
				</div>
				<div className="col-sm-2"></div>
			</div>
		</div>
	);
};

export default Footer;
