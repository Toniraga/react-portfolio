import React from "react";
import kadoshi from "../img/kadoshi.png";
import buyall from "../img/buyall.png";
import burgerKing from "../img/burgerking.png";
import PropTypes from "prop-types";

export default class Projects extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className=" project-container container bg-light pb-5">
						<h1
							id="projects"
							className={"text-center " + this.props.fadeInRight}>
							Projects
						</h1>
						<div className="row my-5">
							<div
								className={
									"testbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Kadoshi Services</h2>
									</div>
									<div>
										<button
											id="vmarine-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var marineModal = document.getElementById(
													"vmarine"
												);
												modalBG.style.display = "block";
												marineModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"aguabg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2> Buy All</h2>
									</div>
									<div>
										<button
											id="agua-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var aguaModal = document.getElementById(
													"agualuz"
												);
												modalBG.style.display = "block";
												aguaModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"todobg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Burger King</h2>
									</div>
									<div>
										<button
											id="todo-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var todoModal = document.getElementById(
													"todolist"
												);
												modalBG.style.display = "block";
												todoModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*hidden modals*/}
				<div id="gallery-card">
					<div id="vmarine" className="modal-card">
						<div className="visual">
							<img src={kadoshi} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Kadoshi</h2>
							<div className="modal-description">
								<ul>
									<li>
										A HR resources for viewing and hiring professionals
									</li>
									<li>
										Designed with HTML5, CSS3, Scss,
										Redux, Nodejs, MongoDB, Express and ReactJS.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a
									href="https:kadoshiservices.com"
									rel="noreferrer"
									target="_blank">
									<h3>View live demo</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var marineModal = document.getElementById(
											"vmarine"
										);
										modalBG.style.display = "none";
										marineModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="agualuz" className="modal-card">
						<div className="visual">
							<img src={buyall} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Buy All</h2>
							<div className="modal-description">
								<ul>
									<li>
										A fantasy Store with the Fake Store API utilized and checkout feature.
									</li>
									<li>
										Developed with HTML5, CSS3, React,
										Redux
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a
									href="https://github.com/Toniraga/fakestore"
									rel="noreferrer"
									target="_blank">
									<h3>View In github</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var aguaModal = document.getElementById(
											"agualuz"
										);
										modalBG.style.display = "none";
										aguaModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="todolist" className="modal-card">
						<div className="visual">
							<img src={burgerKing} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Burger King</h2>
							<div className="modal-description">
								<ul>
									<li>
										A fantasy app for building and ordering burgers (ps. I did this when I was learning react)
									</li>
									<li>
										Developed with HTML5, CSS3, Scss, ReactJS, Firebase, Heroku(for hosting)
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a
									href="https://my-dummy-project-c4f0c.web.app/"
									rel="noreferrer"
									target="_blank">
									<h3>Live Demo</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var todoModal = document.getElementById(
											"todolist"
										);
										modalBG.style.display = "none";
										todoModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
