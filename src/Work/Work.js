import React, { Component } from 'react'
import Title from '../Title/Title.js'
import ideaMostroMedia from './iconos-work/ideaMostroMedia.svg'
import animationMostroMedia from './iconos-work/animationMostroMedia.svg'
import businessMostroMedia from './iconos-work/businessMostroMedia.svg'

console.log(ideaMostroMedia)
const WHATWELOVE=[
	{
		name:'Estrategias digitales',
		img: ideaMostroMedia,
		alt:'Imagen de ¿Tienes una idea en mente?, MOSTRO MEDIA',
		modal:'rtaA',
		rta:'Consolidamos tu presencia en internet mediante estrategias conjuntas de redes sociales, analytics, posicionamiento SEO y SEM.',
		imgintro:'img/iconos-work/idea-introMostroMedia.jpg',
		alt2:'Imagen de Tu idea la hacemos realidad MOSTRO MEDIA'
	},
	{
		name:'Animaciones',
		img: animationMostroMedia,
		alt:'Imagen de ¿Tu animación personalizada? MOSTRO MEDIA',
		modal:'rtaB',
		rta:'Contamos historias de tu marca a través de videos para tus redes sociales o televisión.',
		imgintro:'img/iconos-work/animation-introMostroMedia.jpg',
		alt2:'Imagen de Desarróllala con nosotros MOSTRO MEDIA'
	},
	{
		name:'Aplicaciones web/móviles',
		img: businessMostroMedia,
		alt:'Imagen de ¿Tienes un negocio? MOSTRO MEDIA',
		modal:'rtaC',
		rta:'Mostramos tu negocio al mundo mediante experiencias digitales al alcance de cualquier dispositivo.',
		imgintro:'img/iconos-work/idea-introMostroMedia.jpg',
		alt2:'Imagen de Potencializa tu ventas. Vende online MOSTRO MEDIA'
	}
]

export default class Work extends Component{
    render(){
	return(
		<section id="work" className="section scrollspy">
			<div className="container">
				<div className="row">
					<Title
						titulo="¿Cómo hacemos crecer tu negocio?" />
					<PairItemsWork whatwelove={WHATWELOVE}/>
				</div>
			</div>
		</section>
		)
	}
}

class PairItemsWork extends Component{
    render(){
	let weWork=[]
	this.props.whatwelove.forEach((whatwelov)=>{
        weWork.push(<ItemWork
            name={whatwelov.name}
            key={whatwelov.name}
            img={whatwelov.img}
            alt={whatwelov.alt}
            modal={whatwelov.modal}
            rta={whatwelov.rta}
            />
		)}
	)
	return(
		<ul id="individual-services" className="row">{weWork}</ul>
	)}
}

class ItemWork extends Component{
	render(){
		return(
			<li className="card center col s12 m4 grey darken-4 text-white">
				<div className="card-content">
					<h3 className="card-title activator">{this.props.name}<i className="material-icons right">expand_more</i></h3>
				</div>
				<div className="card-image waves-effect waves-block waves-light">
					<img className="activator" src={this.props.img} alt={this.props.alt}/>
				</div>
				<div className="card-reveal grey darken-4 text-white valign-wrapper">
				
					<h3 className="card-title"><i className="material-icons right">close</i>{this.props.rta}</h3>
				</div>
			</li>
		)
	}
}
