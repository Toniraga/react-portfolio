import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import PropTypes from "prop-types";

const Contact = ({fadeInLeft, shake}) => {
	const [state, handleSubmit] = useForm("xeqvjopp");
	if (state.succeeded) {
      return <p className="text-center text-success">Thanks for Reaching Out!</p>;
  	}
	
	return (
		<div id="my-contact" className="container text-center my-5">
			<h1 id="contact" className={"mb-3 " + fadeInLeft}>
				Contact
			</h1>
			<form
				className={shake}
				onSubmit={handleSubmit}
				method="POST">
				<div className="form-group">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-6 mx-auto">
							<input
								type="text"
								name="name"
								className="form-control form-control-lg"
								id="name"
								placeholder="Name"
							/>
							<ValidationError 
								prefix="name" 
								field="name"
								errors={state.errors}
							/>
						</div>
					</div>
				</div>
				<div className="form-group hidden">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-6 mx-auto">
							<input
								type="email"
								name="email"
								className="form-control form-control-lg"
								id="email"
								placeholder="Your email"
							/>
							<ValidationError 
								prefix="email" 
								field="email"
								errors={state.errors}
							/>
						</div>
					</div>
				</div>
				<div className="form-group hiddenRight">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-6 mx-auto">
							<textarea
								name="message"
								className="form-control form-control-lg"
								id="message"
								rows="3"
								placeholder="Write your message..."
							/>
							<ValidationError 
								prefix="Message" 
								field="message"
								errors={state.errors}
							/>
						</div>
					</div>
				</div>
				<div className="row text-md-right text-sm-center">
					<div className="col-12 col-sm-12 col-md-6 mx-auto">
						<button
							type="submit"
							className="btn btn-primary mb-2 hidden">
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Contact;

Contact.propTypes = {
	fadeInLeft: PropTypes.string,
	shake: PropTypes.string
};
