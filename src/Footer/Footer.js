import React, { Component } from 'react'

export default class Footer extends Component{
	render(){
		return(
			<footer className="center card-panel grey darken-3">
				<div className="container">
					<ul className="social">
						<li className="facebook">
							<a href="https://mostromedia.com" className="entypo-facebook">
								<i className="fa fa-facebook" aria-hidden="true"></i>
							</a>
						</li>
						<li className="github">
							<a href="https://github.com/MostroMedia" className="entypo-github">
								<i className="fa fa-github" aria-hidden="true"></i>
							</a>
						</li>
						<li className="instagram">
							<a href="https://www.instagram.com/mostromedia/?hl=en" className="entypo-instagram">
								<i className="fa fa-instagram" aria-hidden="true"></i>
							</a>
						</li>
						<li className="behance">
							<a href="https://mostromedia.com" className="entypo-behance">
								<i className="fa fa-behance" aria-hidden="true"></i>
							</a>
						</li>
						<li className="linked-in">
							<a href="https://mostromedia.com" className="entypo-linkedin">
								<i className="fa fa-linkedin" aria-hidden="true"></i>
							</a>
						</li>
					</ul>
				</div>
				<div className="container">
					<p>Copyright(c)2017 MOSTRO MEDIA All Rights Reserved.</p>
				</div>
			</footer>
		)
	}
}

