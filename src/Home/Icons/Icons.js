import React, { Component } from 'react'
import logo from '../../logo.png'

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
				img={logo}
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

class SingleIcon extends Component{
	render(){
		return(
		<li className="col fifth" style={{ cursor: 'pointer', zIndex: 100 }}>
			<div id={this.props.myid}></div>
            <img src={this.props.img} alt={this.props.alt} />
			<p>{this.props.name}</p>
		</li>
		)
	}
} 