import React, { Component } from 'react'

export default class Title extends Component{
	render(){
		return(
			<div className="center">
				<h1 id="title_style_h1">{this.props.titulo}</h1>
				<div className="progress">
					<div className="determinate"></div>
				</div>
			</div>
		)
	}
}