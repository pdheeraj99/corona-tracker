import React from 'react';
import Counter from '../common/Counter';
function Footer() {
	return (
		<>
			<footer className="page-footer font-small teal pt-4 footer">
				<div className="container-fluid text-center text-md-left">
					<div className="row">
						<div className="col-md-6 col-sm-6 mt-md-0 mt-3">
							<address className="text-white">
								<h2 className="text-white">Contact ME!</h2>
								Developed by:
								<a
									href="https://www.linkedin.com/in/shubham-sharma-34bbab18b/"
									target="_blank"
									rel="noopener noreferrer">
									Dheeraj Pilla
								</a>
							</address>
						</div>

						<hr className="clearfix w-100 d-md-none pb-3" />
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
