'use strict'

const MiMenu=[{name:'#home',icon:'fast_forward'},{name:'#work',icon:'code'},{name:'#team',icon:'recent_actors'},{name:'#contact',icon:'chat_bubble_outline'}]

class ItemMenu extends React.Component{
	render(){
		return(
			<li><a href={this.props.name}><i className="medium material-icons">{this.props.icon}</i></a></li>
		)
	}
}

class Menu extends React.Component{
	componentDidMount(){
		$(document).ready(function(){
			$(".button-collapse").sideNav()
			$('.scrollspy').scrollSpy({scrollOffset: 0})
			$(".logo-text").click(function(){
				$('html,body').animate({scrollTop:$("#home").offset().top},'slow')
			})
		})
	}
	render(){
		let myItemMenu=[]
		this.props.itemsMenu.forEach((item)=>{myItemMenu.push(
			<ItemMenu
				name={item.name}
				key={item.name}
				icon={item.icon}
			/>
			)
		}
	)
	return(
		<div className="nav-wrapper">
			<nav className="hide-on-large-only">
				<a href="#home" className="brand-logo">Mostro Media</a>
				<a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
			<ul className="section table-of-contents right hide-on-med-and-down">{myItemMenu}</ul>
			</nav>
			<ul className="section table-of-contents side-nav fixed color-menu" id="mobile-demo">
				<div className="logo-text">
					<img id="logo-mostro-media" className="center" src="img/logo_svg.svg"/>
					<h1 className="center-align">Mostro Media</h1>
				</div>
				{myItemMenu}
			</ul>
		</div>
		)
	}
}

let animData={container:'',renderer:'svg',loop:!0,prerender:!1,autoplay:!1,autoloadSegments:!1,path:'https://raw.githubusercontent.com/MostroMedia/mostromedia-web-2017/master/img/animations/mostro-media-icon-animation.json'}
let anim=''
let isThrowing=!1

class Home extends React.Component{
	componentDidMount(){
		Materialize.toast('Bienvenido',3000,'rounded')
		Materialize.toast('Haz scroll y mira nuestro contenido, nuestros servicios y nuestro equipo.',5000,'rounded')
	}
	render(){
		return(
		<section id="home" className="container section scrollspy">
			<div className="row">
				<HomeContent/>
				<IconHome iconos={ICONOS}/>
			</div>
				
		</section>)
	}
}
	
class HomeContent extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			isPlaying : false,
			myCanvasWidth: 600,
			myCanvasHeight: 600
		}
		this.startGame = this.startGame.bind(this)
	}
	componentDidMount(){
		let game = new Phaser.Game(this.state.myCanvasWidth,this.state.myCanvasHeight, Phaser.CANVAS, document.getElementById("logo-mostro-media-center") ,"",true)
		game.state.add("Boot", boot)
		game.state.add("Preload",preload)
		game.state.add("GameTitle",gameTitle)
		game.state.add("TheGame",theGame)
		game.state.add("GameOver", gameOver)
		game.state.start("Boot")		
	}
	startGame(){
		this.setState({
			isPlaying: true,
			myCanvasWidth: 600,
			myCanvasHeight: 600
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

class IconHome extends React.Component{
	componentDidMount(){
		setTimeout(()=>{
			document.getElementById("iconos-home").style.transform="scale(1)"},1000)
	}
	render(){
		let myIcon=[]
		this.props.iconos.forEach((icono,index,array)=>{myIcon.push(
			<SingleIconHome
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

class SingleIconHome extends React.Component{
	constructor(props){
		super(props)
		this.playAnimation=this.playAnimation.bind(this)
		this.stopAnimation=this.stopAnimation.bind(this)
	}	
	componentDidMount(){
		let miAnima = this.props.anima
		this.props.img.container = document.getElementById(this.props.myid)
		this.props.anima = bodymovin.loadAnimation(this.props.img)
		setTimeout(()=>{
			this.props.anima.stop()
		},2200)
	}
	playAnimation(){
		this.props.anima.playSegments([0,29],!0)
	}
	stopAnimation(){
		this.props.anima.stop()
	}
	render(){
		return(
		<li className="col fifth" onMouseEnter={this.playAnimation} onMouseLeave={this.stopAnimation} style={{ cursor: 'pointer', zIndex: 100 }}>
			<div id={this.props.myid}></div>
			<p>{this.props.name}</p>
		</li>
		)
	}
}


const WHATWELOVE=[
	{
		name:'Estrategias digitales',
		img:'img/iconos-work/ideaMostroMedia.svg',
		alt:'Imagen de ¿Tienes una idea en mente?, MOSTRO MEDIA',
		modal:'rtaA',
		rta:'Consolidamos tu presencia en internet mediante estrategias conjuntas de redes sociales, analytics, posicionamiento SEO y SEM.',
		imgintro:'img/iconos-work/idea-introMostroMedia.jpg',
		alt2:'Imagen de Tu idea la hacemos realidad MOSTRO MEDIA'
	},
	{
		name:'Animaciones',
		img:'img/iconos-work/animationMostroMedia.svg',
		alt:'Imagen de ¿Tu animación personalizada? MOSTRO MEDIA',
		modal:'rtaB',
		rta:'Contamos historias de tu marca a través de videos para tus redes sociales o televisión.',
		imgintro:'img/iconos-work/animation-introMostroMedia.jpg',
		alt2:'Imagen de Desarróllala con nosotros MOSTRO MEDIA'
	},
	{
		name:'Aplicaciones web/móviles',
		img:'img/iconos-work/businessMostroMedia.svg',
		alt:'Imagen de ¿Tienes un negocio? MOSTRO MEDIA',
		modal:'rtaC',
		rta:'Mostramos tu negocio al mundo mediante experiencias digitales al alcance de cualquier dispositivo.',
		imgintro:'img/iconos-work/idea-introMostroMedia.jpg',
		alt2:'Imagen de Potencializa tu ventas. Vende online MOSTRO MEDIA'
	}
]

class Work extends React.Component{render(){
	return(
		<section id="work" className="section scrollspy">
			<div className="container">
				<div className="row">
					<TitleContact
						titulo="¿Cómo hacemos crecer tu negocio?" />
					<PairItemsWork whatwelove={WHATWELOVE}/>
				</div>
			</div>
		</section>
		)
	}
}

class PairItemsWork extends React.Component{render(){
	let weWork=[]
	this.props.whatwelove.forEach((whatwelov)=>{weWork.push(<ItemWork
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

class ItemWork extends React.Component{
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


class Team extends React.Component{
	render(){let mostroTeam=[]
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
					<TitleContact
						titulo={TitleTeam}/>
					<ul className="wrap">{mostroTeam}</ul>
				</div>
			</div>
	</section>
	)}
}

class ItemTeam extends React.Component{
	// <img className="activator" src={this.props.img} alt={this.props.alt}/>
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



const TextoContact=[{titulo:'¿Quieres saber más?, conversemos'},{call:'Llámanos',number:"+57 314 258 8148"},{call:'Envíanos un email',number:'info@mostromedia.com'}]

class FormularioContact extends React.Component{
	componentDidMount(){
		Materialize.updateTextFields()
	}
	render(){
		return(
			<h2 className="valign">
				{this.props.call}
        	<br/>
        {this.props.number}
			</h2>
		)
	}
}

class ContentContact extends React.Component{
	render(){
		return(
    	<div>
        <div id="content-contact" className="col s12 m5">
					<div className="valign-wrapper">
						<h2 className="valign">
							{this.props.call}
								<br/>
							{this.props.number}
						</h2>
					</div>
        </div>
    	<div id="form-contact" className="col s12 m5">
        <div className="valign-wrapper">
          <h2 className="valign">
            {this.props.mail}
              <br/>
						{this.props.mailtxt}
          </h2>
      	</div>
			</div>
		</div>
		)
	}
}

class TitleContact extends React.Component{
	render(){
		return(
			<div className="center">
				<h1>{this.props.titulo}</h1>
				<div className="progress">
					<div className="determinate"></div>
				</div>
			</div>
		)
	}
}

class Contact extends React.Component{
	componentDidMount(){
		$(window).scroll(function(){
			let scrollBottom=$(document).height()-$(window).height()-$(window).scrollTop()
			let salute=function(){
				let executed=!1
				return function(){
					if(!executed){
						executed=!0
						if(scrollBottom===0){
							Materialize.toast('Déjanos tu mensaje y te contactaremos pronto :) ',5000,'rounded')
						}
					}
				}
			}
		})
	}
	render(){
		let call=this.props.textContact[1].call, mail=this.props.textContact[2].call
		let number=this.props.textContact[1].number, mailtxt=this.props.textContact[2].number
		
		return(
			<section id="contact" className="section scrollspy">
				<div className="container">
					<div className="row">
						<TitleContact
							titulo={this.props.textContact[0].titulo}/><ContentContact
							call={call}
							number={number}
							mail={mail}
							mailtxt={mailtxt}
						/>
					</div>
				</div>
			</section>
		)
	}
}

class Footer extends React.Component{
	render(){
		return(
			<footer className="center card-panel grey darken-3">
				<div className="container">
					<ul className="social">
						<li className="facebook">
							<a href="#" className="entypo-facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
						</li>
						<li className="github">
							<a href="https://github.com/MostroMedia" className="entypo-github"><i className="fa fa-github" aria-hidden="true"></i></a>
						</li>
						<li className="instagram">
							<a href="https://www.instagram.com/mostromedia/?hl=en" className="entypo-instagram"><i className="fa fa-instagram" aria-hidden="true"></i>
							</a>
						</li>
						<li className="behance">
							<a href="#" className="entypo-behance"><i className="fa fa-behance" aria-hidden="true"></i></a>
						</li>
						<li className="linked-in">
							<a href="#" className="entypo-linkedin"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
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


let scene,camera,renderer,particles,controls
let width=window.innerWidth-10,height=window.innerHeight,mousePos={x:0,y:0}
const ICONOS=[{name:'Interacción',anima:'',img:{container:'',renderer:'svg',loop:!0,prerender:!1,autoplay:!1,autoloadSegments:!1,path:'https://raw.githubusercontent.com/MostroMedia/mostromedia-web-2017/1a66f4ad66716cf017a1a8ae1685c1a04fcfde3c/img/icons-home/interaccion1.json'},alt:'Imagen del Icono de Interacción Mostro Media'},{name:'Creatividad',anima:'',img:{container:'',renderer:'svg',loop:!0,prerender:!1,autoplay:!1,autoloadSegments:!1,path:'https://raw.githubusercontent.com/MostroMedia/mostromedia-web-2017/master/img/icons-home/creatividad.json'},alt:'Imagen del Icono de Creatividad Mostro Media'},{name:'Ingenio',anima:'',img:{container:'',renderer:'svg',loop:!0,prerender:!1,autoplay:!1,autoloadSegments:!1,path:'https://raw.githubusercontent.com/MostroMedia/mostromedia-web-2017/master/img/icons-home/ingenio.json'},alt:'Imagen del Icono de Ingenio Mostro Media'},{name:'Liderazgo',anima:'',img:{container:'',renderer:'svg',loop:!0,prerender:!1,autoplay:!1,autoloadSegments:!1,path:'https://raw.githubusercontent.com/MostroMedia/mostromedia-web-2017/master/img/icons-home/liderazgo.json'},alt:'Imagen del Icono de Liderazgo Mostro Media'},{name:'Talento',anima:'',img:{container:'',renderer:'svg',loop:!0,prerender:!1,autoplay:!1,autoloadSegments:!1,path:'https://raw.githubusercontent.com/MostroMedia/mostromedia-web-2017/master/img/icons-home/talento1.json'},alt:'Imagen del Icono de Talento Mostro Media'}]
const colores=[0xE8540D,0xCCCCCC,0xE8540D]

function Init(padre){
	scene=new THREE.Scene()
	camera=new THREE.PerspectiveCamera(75,width/height,0.5,1000)
	camera.lookAt(scene.position)
	camera.position.z=200
	renderer=new THREE.WebGLRenderer()
	renderer.setPixelRatio(window.devicePixelRatio)
	renderer.setSize(width,height)
	renderer.setClearColor(0x363636)
	renderer.shadowMap.enabled=!0
	const ambientLight=new THREE.AmbientLight()
	scene.add(ambientLight)
	const light=new THREE.DirectionalLight()
	light.position.set(200,200,200)
	light.castShadow=!0
	light.shadow.camera.left=-100
	light.shadow.camera.right=100
	light.shadow.camera.top=100
	light.shadow.camera.bottom=-100
	scene.add(light)
	drawParticles()
	padre.appendChild(renderer.domElement)
	window.addEventListener('resize',onResize,!1)
	return renderer
}

function onResize(){
	width=window.innerWidth
	height=window.innerHeight
	camera.aspect=width/height
	camera.updateProjectionMatrix()
	renderer.setSize(width,height)
}
function animate(){
	requestAnimationFrame(animate)
	render()
}

function render(){
	particles.rotation.x+=0.0008
	particles.rotation.y-=0.0009
	renderer.render(scene,camera)
}

function drawParticles(){
	particles=new THREE.Group()
	scene.add(particles)
	const geometry=new THREE.TetrahedronGeometry(5,0)
	for(let i=0;i<200;i++){
		const material=new THREE.MeshPhongMaterial({color:colores[Math.floor(Math.random()*colores.length)],shading:THREE.FlatShading})
		const mesh=new THREE.Mesh(geometry,material)
		mesh.position.set((Math.random()-0.5)*1000,(Math.random()-0.5)*1000,(Math.random()-0.5)*1000)
		mesh.updateMatrix()
		mesh.matrixAutoUpdate=!1
		particles.add(mesh)
	}
}

class ParticlesHome extends React.Component{
	componentDidMount(){
		Init(document.getElementById("particles-home"))
		animate()
	}
	render(){
		return(
			<div id="particles-home"></div>
		)
	}
}

class Main extends React.Component{
		constructor(props){
		super(props)
		this.state={value:'',isPressed:!1}
		this.ingresaNombre=this.ingresaNombre.bind(this)
		this.botonPresionado=this.botonPresionado.bind(this)
	}
	ingresaNombre(event){
		event.preventDefault()
		this.setState({value:event.target.value})
	}
	botonPresionado(event){
		this.setState({isPressed:!0})
	}
	render(){
		return(
		<div>
			<Home/>
			<Work/>
			<Team mostros={MOSTROTEAM}/>
			<Contact textContact={TextoContact}/>
			<Footer/>
			<ParticlesHome/>
			<Menu itemsMenu={MiMenu}/>
		</div>
		)
	}
}



ReactDOM.render(<Main/>,document.getElementById('main'))