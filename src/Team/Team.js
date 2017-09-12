import React, { Component } from 'react'
import Title from '../Title/Title.js'


const MOSTROTEAM=[
	{
		name:'Cristhian Cepeda',
		img:'img/mostros/cristhian_cepeda.jpg',
		alt:'Imagen de Cristhian Cepeda - Mostro Team',
		position:'Productor musical en formación.',
		quote:'Makia',
		skills: 'E-learning. Animación. Música.',
		color:'#2ECC71'
	},
	{
		name:'Camilo Argüello',
		img:'img/mostros/camilo_arguello.jpg',
		alt:'Imagen de Camilo Arguello - Mostro Team',
		position:'Desarrollador',
		quote:'Ingenio',
		skills: 'Web. Móvil. Animación. ',
		color:'#FFCC08'
	},
	{
		name:'Juan Garay',
		img:'img/mostros/juan_garay.jpg',
		alt:'Imagen de Juancho Garay - Mostro Team',
		position:'Animador',
		quote:'Confianza',
		skills: 'Animación. Experiencia de usuario. E-learning.',
		color:'#3498DB'
	},
	{
		name:'Sebastian Díaz',
		img:'img/mostros/sebastian_diaz.jpg',
		alt:'Imagen de Sebastian Díaz - Mostro Team',
		position:'Desarrollador',
		quote:'Compromiso',
		skills: 'Web. E-learning. Gerencia.',
		color:'#BDC3C7'
	},
	{
		name:'Daniela Sanchez',
		img:'img/mostros/daniela_sanchez.jpg',
		alt:'Imagen de Daniela Sanchez - Mostro Team',
		position:'Directora de arte',
		quote:'Creatividad',
		skills: 'Diseño. Dirección de arte. Marketing digital.',
		color:'#FA7878'
	},
	{
		name:'Daniel Valenzuela',
		img:'img/mostros/daniel_valenzuela.jpg',
		alt:'Imagen de Daniel Valenzuela - Mostro Team',
		position:'Productor musical en formación.',
		quote:'Empatía',
		skills: 'Gerencia de proyectos. Web.  Música.',
		color:'#8E44AD'
	}
]
const TitleTeam='Nuestro equipo'

const Team = ()=>(
    <MyTeam 
        mostros={MOSTROTEAM}
    />
)

class MyTeam extends Component{
	render(){
        let mostroTeam=[]
        this.props.mostros.forEach((mostro)=>{mostroTeam.push(
            <ItemTeam
                name={mostro.name}
                key={mostro.name}
                img={mostro.img}
                alt={mostro.alt}
                position={mostro.position}
                quote={mostro.quote}
                color={mostro.color}
            />
		)}
	)
	return(
		<section id="team" className="section scrollspy">
			<div className="container">
				<div className="row">
					<Title
						titulo={TitleTeam}/>
					<ul className="wrap">{mostroTeam}</ul>
				</div>
			</div>
	</section>
	)}
}

class ItemTeam extends Component{
	render(){
		return(
			<li className="card center col s12 m2 grey darken-4 text-white">
				<div className="card-content waves-effect waves-block waves-light white-text">
					<h3 className="card-title activator">{this.props.name}</h3>
					<hr/>
					<h4 style={{color: this.props.color}}>{this.props.quote}</h4>
					<br/>
					<p>{this.props.position}</p>
				</div>
			</li>
		)
	}
}



export default Team 
