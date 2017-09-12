import React, { Component } from 'react'

export default class Game extends Component{
	constructor(props){
		super(props)
		this.state = {
			isPlaying : false
		}
		this.startGame = this.startGame.bind(this)
	}
	startGame(){
		this.setState({
			isPlaying: true
		})
	}
	render(){
		let myText
		this.state.isPlaying ? myText = null :  myText = <h1 id="mostro-media-name" className="center-align">MOSTRO<br/>MEDIA</h1> 
		return(
			<div>
				<div id="logo-mostro-media-center" className="center" onClick={this.startGame}></div>
				{myText}
			</div>
		)
	}
}