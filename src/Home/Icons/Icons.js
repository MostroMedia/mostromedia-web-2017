import React, { Component } from 'react'
import * as bodymovin from 'bodymovin'

export default class Icons extends Component{
	componentDidMount(){
        setTimeout(()=>{document.getElementById("iconos-home").style.transform="scale(1)"},1000)
	}
	render(){
		let myIcon=[]
		this.props.iconos.forEach((icono,index,array)=>{myIcon.push(
			<SingleIcon
				name={icono.name}
				key={icono.name}
				myid={icono.name}
				img={icono.img}
				alt={icono.alt}
				anima={icono.anima}
			/>
			)
		}
	)
	return(
		<ul id="iconos-home" className="hide-on-small-only" >{myIcon}</ul>
	)
	}
}
let animation
class SingleIcon extends Component{
	componentDidMount(){
		animation = this.props.anima
		this.props.img.container = document.getElementById(this.props.myid)
		animation = bodymovin.loadAnimation(this.props.img)
		setTimeout(()=>{animation.stop()},2200)
	}
	playAnimation(){
		animation.playSegments([0,29],!0)
	}
	stopAnimation(){
		animation.stop()
	}
	render(){
		return(
		<li 
			className="col fifth" 
			style={{ cursor: 'pointer', zIndex: 100 }} 
			onMouseEnter={this.playAnimation.bind(this)}
			onMouseLeave={this.stopAnimation.bind(this)}
		>
			<div id={this.props.myid}></div>
			<p>{this.props.name}</p>
		</li>
		)
	}
} 