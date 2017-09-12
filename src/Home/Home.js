import React, { Component } from 'react'
import Icons from './Icons/Icons.js'
import Game from '../Game/Game.js'

const ICONOS=[ {
    name:'Interacción',
    anima:'',
    img: {
        container: '', renderer: 'svg', loop: !0, prerender: !1, autoplay: !1, autoloadSegments: !1, path: './icons-home/interaccion1.json'
    }
    ,
    alt:'Imagen del Icono de Interacción Mostro Media'
}

,
{
    name:'Creatividad',
    anima:'',
    img: {
        container: '', renderer: 'svg', loop: !0, prerender: !1, autoplay: !1, autoloadSegments: !1, path: './icons-home/creatividad.json'
    }
    ,
    alt:'Imagen del Icono de Creatividad Mostro Media'
}

,
{
    name:'Ingenio',
    anima:'',
    img: {
        container: '', renderer: 'svg', loop: !0, prerender: !1, autoplay: !1, autoloadSegments: !1, path: './icons-home/ingenio.json'
    }
    ,
    alt:'Imagen del Icono de Ingenio Mostro Media'
}

,
{
    name:'Liderazgo',
    anima:'',
    img: {
        container: '', renderer: 'svg', loop: !0, prerender: !1, autoplay: !1, autoloadSegments: !1, path: './icons-home/liderazgo.json'
    }
    ,
    alt:'Imagen del Icono de Liderazgo Mostro Media'
}

,
{
    name:'Talento',
    anima:'',
    img: {
        container: '', renderer: 'svg', loop: !0, prerender: !1, autoplay: !1, autoloadSegments: !1, path: './icons-home/talento1.json'
    }
    ,
    alt:'Imagen del Icono de Talento Mostro Media'
}

]

export default class Home extends Component{
    render(){
        return(
		<section id="home" className="container section scrollspy">
			<div className="row">
				<Game />
				<Icons iconos={ICONOS}/>
			</div>
		</section>
        )
    }
}