import React, { Component } from 'react'
import MostroLogo from '../logo.png'
import ChristmasHat from './hat.png'

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
					{/*  <img id="christmas-hat" src={ChristmasHat} alt="Christmas hat" /> */}
					<img id="logo-mostro-media-center" className="center" src={MostroLogo} alt="Logo de Mostro" />
					<h1 id="mostro-media-name" className="center col s12">MOSTRO<br/>MEDIA</h1>
				</div>	
		)
	}
}