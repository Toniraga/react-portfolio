import React from "react";
import PropTypes from "prop-types";

import WOW from "wowjs";

export default class Background extends React.Component {
	componentDidMount() {
		new WOW.WOW().init();
	}

	render() {
		return (
			<div id="my-background" className="background">
				<div id="stars" />
				<div id="stars2" />
				<div id="stars3" />
				<div className="top-container flex">
					<div>
						Hello, I&apos;m Eraga Aselimhe Tony.
						<br />
						I&apos;m a Full Stack Web Developer(MERN).
					</div>
					{/* offset can be changed in node modules wowjs default file */}
					<button
						className={"work-button " + this.props.bounceIn}
						data-wow-offset="0"
						onClick={() => {
							let node = document.getElementById(
								this.props.aboutRef.current.props.id
							);
							window.scrollTo({
								top: node.offsetTop,
								behavior: "smooth"
							});
						}}>
						More Toniraga
					</button>
				</div>
			</div>
		);
	}
}

Background.propTypes = {
	aboutRef: PropTypes.object,
	bounceIn: PropTypes.string
};
