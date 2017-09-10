import React, { Component } from 'react'
import logo from '../logo.png'
import Icons from './Icons/Icons.js'


const ICONOS=[{name:'Interacción',anima:'',img:{container:'',renderer:'svg',loop:!0,prerender:!1,autoplay:!1,autoloadSegments:!1,path:'https://raw.githubusercontent.com/MostroMedia/mostromedia-web-2017/1a66f4ad66716cf017a1a8ae1685c1a04fcfde3c/img/icons-home/interaccion1.json'},alt:'Imagen del Icono de Interacción Mostro Media'},{name:'Creatividad',anima:'',img:{container:'',renderer:'svg',loop:!0,prerender:!1,autoplay:!1,autoloadSegments:!1,path:'https://raw.githubusercontent.com/MostroMedia/mostromedia-web-2017/master/img/icons-home/creatividad.json'},alt:'Imagen del Icono de Creatividad Mostro Media'},{name:'Ingenio',anima:'',img:{container:'',renderer:'svg',loop:!0,prerender:!1,autoplay:!1,autoloadSegments:!1,path:'https://raw.githubusercontent.com/MostroMedia/mostromedia-web-2017/master/img/icons-home/ingenio.json'},alt:'Imagen del Icono de Ingenio Mostro Media'},{name:'Liderazgo',anima:'',img:{container:'',renderer:'svg',loop:!0,prerender:!1,autoplay:!1,autoloadSegments:!1,path:'https://raw.githubusercontent.com/MostroMedia/mostromedia-web-2017/master/img/icons-home/liderazgo.json'},alt:'Imagen del Icono de Liderazgo Mostro Media'},{name:'Talento',anima:'',img:{container:'',renderer:'svg',loop:!0,prerender:!1,autoplay:!1,autoloadSegments:!1,path:'https://raw.githubusercontent.com/MostroMedia/mostromedia-web-2017/master/img/icons-home/talento1.json'},alt:'Imagen del Icono de Talento Mostro Media'}]


export default class Home extends Component{
    render(){
        return(
		<section id="home" className="container section scrollspy">
			<div className="row">
				<Icons iconos={ICONOS}/>
			</div>
		</section>
        )
    }
}