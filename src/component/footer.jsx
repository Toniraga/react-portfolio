import React from "react";

import twitter from "../img/twitter.png"
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

class Footer extends React.Component {
	render() {
		return (
			<div id="footer" className="container-fluid text-center py-5">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-8 mx-auto">
							<a
								className="px-3"
								href="https://twitter.com/tonieriga"
								target="_blank"
								rel="noopener noreferrer">
								<img style={{height: '30px'}} src={twitter} alt=""/>
							</a>
							<a
								className="px-3"
								href="https://github.com/Toniraga"
								target="_blank"
								rel="noopener noreferrer">
								<img src={github} alt=""/>
							</a>
							<a
								href="https://www.linkedin.com/in/tony-eraga-aa2011132/"
								target="_blank"
								rel="noopener noreferrer">
								<img src={linkedin} alt=""/>
							</a>
						</div>
					</div>
					<h5 className="pt-4">Eraga Aselimhe Tony &copy; 2021</h5>
				</div>
			</div>
		);
	}
}

export default Footer;
