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
			$('.scrollspy').scrollSpy({scrollOffset:-50})
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


const MOSTROTEAM=[{name:'Cristhian Cepeda',img:'img/mostros/cristhian_cepeda.jpg',alt:'Imagen de Cristhian Cepeda - Mostro Team',position:'Ingeniero Mutimedia y Productor de música urbana. Su enfoque es usar todas las herramientas pedagógicas de la multimedia para crear contenido innovador.',quote:'Makia',color:'#2ECC71'},{name:'Camilo Argüello',img:'img/mostros/camilo_arguello.jpg',alt:'Imagen de Camilo Arguello - Mostro Team',position:'Desarrollador de software. Camilo busca con el uso de las tecnologías, crear nuevas formas de interacción en cada proyecto.',quote:'Ingenio',color:'#FFCC08'},{name:'Juan Garay',img:'img/mostros/juan_garay.jpg',alt:'Imagen de Juancho Garay - Mostro Team',position:'Animador 3D. Todos lo llaman "Juancho" y es quien lidera las animaciones que realiza Mostro Media.',quote:'Confianza',color:'#3498DB'},{name:'Sebastian Díaz',img:'img/mostros/sebastian_diaz.jpg',alt:'Imagen de Sebastian Díaz - Mostro Team',position:'Desarrollador web. Sebastián es quien lidera al equipo y coordina con los clientes.',quote:'Compromiso',color:'#BDC3C7'},{name:'Daniela Sanchez',img:'img/mostros/daniela_sanchez.jpg',alt:'Imagen de Daniela Sanchez - Mostro Team',position:'Directora de arte, quien le brinda un estilo gráfico único a cada proyecto.',quote:'Creatividad',color:'#FA7878'},{name:'Daniel Valenzuela',img:'img/mostros/daniel_valenzuela.jpg',alt:'Imagen de Daniel Valenzuela - Mostro Team',position:'Músico y coordinador de proyectos. Gracias a él, todo el equipo se coordina de la mejor manera en cada proyecto.',quote:'Empatía',color:'#8E44AD'}]
const TitleTeam='Nuestro equipo'

class ItemTeam extends React.Component{
	constructor(props){
		super(props)
		this.showInvader=this.showInvader.bind(this)
		this.hideInvader=this.hideInvader.bind(this)
	}
	showInvader(){
		let space_invader=this._reactInternalInstance._renderedComponent._hostNode.lastChild
		space_invader.classList.remove("scale-out");space_invader.classList.add("scale-in")
	}
	hideInvader(){
		let space_invader=this._reactInternalInstance._renderedComponent._hostNode.lastChild
		space_invader.classList.remove("scale-in");space_invader.classList.add("scale-out")
	}
	render(){
		return(
			<li onMouseEnter={this.showInvader}onMouseLeave={this.hideInvader}>
				<div draggable="true" className="center">
					<img className="esponsive-img" src={this.props.img}alt={this.props.alt}/>
					<h3>{this.props.name}</h3>
					<hr/>
					<h4 style={{color:this.props.color}}>{this.props.quote}</h4>
				</div>
				<div className="contSpace scale-transition scale-out">
					<div className="center space-invader "></div>
					<div className="card-panel"><span className="white-text">{this.props.position}</span></div>
				</div>
			</li>
		)
	}
}

class Team extends React.Component{
	componentDidMount(){
		$('.listMostro').slick({
			centerMode:!0,
			centerPadding:'60px',
			slidesToShow:5,
			autoplay:!1,
			cssEase:'ease',
			responsive:[{
				breakpoint:800,
				settings:{
					arrows:!1,
					centerMode:!0,
					centerPadding:'40px',
					slidesToShow:3
				}
			},{
				breakpoint:400,
				settings:{
					arrows:!1,
					centerMode:!0,
					centerPadding:'0px',
					slidesToShow:1
				}
			}
		]})
	}
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
				</div>
			</div>
			<ul className="listMostro">{mostroTeam}</ul>
			<div id="borde">
		</div>
	</section>
	)}
}
const WHATWELOVE=[{name:'¿Tienes una idea en mente?',img:'img/iconos-work/ideaMostroMedia.svg',alt:'Imagen de ¿Tienes una idea en mente?, MOSTRO MEDIA',modal:'rtaA',rta:'La hacemos realidad.',textoRta:'En Mostro Media te ofrecemos la posibilidad de hacer realidad tus ideas, ya sea que quieras desarrollar una aplicación movil o un sitio web, para conectarte con tus clientes de nueva forma.',imgintro:'img/iconos-work/idea-introMostroMedia.jpg',alt2:'Imagen de Tu idea la hacemos realidad MOSTRO MEDIA',},{name:'¿Tu animación personalizada?',img:'img/iconos-work/animationMostroMedia.svg',alt:'Imagen de ¿Tu animación personalizada? MOSTRO MEDIA',modal:'rtaB',rta:'Desarróllala con nosotros.',textoRta:'Ponemos a tu alcance todas nuestras habilidades para que juntos desarrollemos esa animación que siempre quisiste.',imgintro:'img/iconos-work/animation-introMostroMedia.jpg',alt2:'Imagen de Desarróllala con nosotros MOSTRO MEDIA',},{name:'¿Tienes un negocio?',img:'img/iconos-work/businessMostroMedia.svg',alt:'Imagen de ¿Tienes un negocio? MOSTRO MEDIA',modal:'rtaC',rta:'Potencializa tu ventas. Vende online.',textoRta:'Te ayudamos a crear estrategias de Marketing digital para que tus ventas online se incrementen.',imgintro:'img/iconos-work/idea-introMostroMedia.jpg',alt2:'Imagen de Potencializa tu ventas. Vende online MOSTRO MEDIA',},{name:'¿Tienes un equipo que capacitar?',img:'img/iconos-work/e-learningMostroMedia.svg',alt:'Imagen de ¿Tienes un equipo que capacitar? MOSTRO MEDIA',modal:'rtaD',rta:'Crea plataformas de aprendizaje en línea.',textoRta:'Te ofrecemos la creación de plataformas de universidad Corporativa, además de la implementación de malla curricular, creación de cursos e-learning y consultoría en proyectos TIC-Educación.',imgintro:'img/iconos-work/e-learning-introMostroMedia.jpg',alt2:'Imagen de Crea plataformas de aprendizaje en línea. MOSTRO MEDIA',}]

class ItemWork extends React.Component{
	render(){
		return(
			<li className="card center col s12 m5 grey darken-4 text-white">
				<div className="card-image waves-effect waves-block waves-light">
					<img className="activator" src={this.props.img}alt={this.props.alt}/>
				</div>
				<div className="card-content">
					<h3 className="card-title activator">{this.props.name}<i className="material-icons right">more_vert</i></h3>
				</div>
				<div className="card-reveal grey darken-4 text-white">
					<h3 className="card-title"><i className="material-icons right">close</i>{this.props.rta}</h3>
					<br/>
					<p>{this.props.textoRta}</p>
				</div>
			</li>
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
		textoRta={whatwelov.textoRta}
		/>
		)}
	)
	return(
		<ul id="individual-services" className="row">{weWork}</ul>
	)}
}

class Work extends React.Component{render(){
	return(
		<section id="work" className="section scrollspy">
			<div className="container">
				<div className="row">
					<div id="serv-section" className="col s12 l6">
						<TitleContact
							titulo="Consolidamos tu presencia en internet a traves de nuestros servicios de Páginas web, Aplicaciones móviles, e-learning y Motion Design."/>
					</div>
					<div className="col s12 l6">
						<PairItemsWork whatwelove={WHATWELOVE}/>
					</div>
				</div>
			</div>
		</section>
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

let animData={container:'',renderer:'svg',loop:!0,prerender:!1,autoplay:!1,autoloadSegments:!1,path:'https://raw.githubusercontent.com/MostroMedia/mostromedia-web-2017/master/img/animations/mostro-media-icon-animation.json'}
let anim=''
let isThrowing=!1

class HomeContent extends React.Component{
	componentDidMount(){
	}
	render(){
		// <h1 className="center-align hide-on-med-and-down">MOSTRO<br/>MEDIA</h1>
		return(
			<div id="mostro-center" className="container">
				<div className="row">
					<div id="mostro-logo-container" className="col s12 m12 l12">
						<div id="logo-mostro-media-center" className="center">
							<div id="here-canvas"></div>
						</div>
						
					</div>
				</div>
			</div>
		)
	}
}

class SingleIconHome extends React.Component{
	componentDidMount(){
		let miAnima=this.props.anima
		this.props.img.container=document.getElementById(this.props.myid)
		miAnima=bodymovin.loadAnimation(this.props.img)
		miAnima.playSegments([0,29],!0)
	}
	render(){
		return(
		<li>
			<div id={this.props.myid}></div>
			<p>{this.props.name}</p>
		</li>
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
	return( <ul id="iconos-home" className="hide-on-med-and-down">{myIcon}</ul> )
	}
}

class Home extends React.Component{
	componentDidMount(){
		Materialize.toast('Bienvenid@',3000,'rounded')
		Materialize.toast('Haz scroll y mira nuestro contenido, nuestros servicios y nuestro equipo.',5000,'rounded')
	}
	render(){
		return(
			<section id="home" className="container-fluid section scrollspy">
				<HomeContent/>
				<IconHome iconos={ICONOS}/>
			</section>)
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