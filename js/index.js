'use strict'

const MiMenu = [
  {name: '#home', icon: 'fast_forward'},
  {name: '#work', icon: 'code'},
  {name: '#video', icon: 'videocam'},
  {name: '#team', icon: 'recent_actors'},
  {name: '#contact', icon: 'chat_bubble_outline'}
]

class ItemMenu extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      selected : ''
    }
    this._handleScroll = this._handleScroll.bind(this)
    this._handleClick = this._handleClick.bind(this)

  }
  _handleScroll(e){
    console.log("Scrolling!")
  }
  _handleClick(e){
    e.preventDefault()
    this.setState({ selected: '' })
  }

  componentDidMount(){
    $(document).on("scroll", this._handleScroll)
    $(document).ready(function(){
      $('.scrollspy').scrollSpy();
    });
  }
  render(){
    return(
      <li>
        <a className={this.state.selected} href={this.props.name} onClick={this._handleClick}>
          <i className="medium material-icons">
            {this.props.icon}
          </i>
        </a>
      </li>
    )
  }
}

class Menu extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    $( document ).ready(function(){
      $(".button-collapse").sideNav()
    })
  }
  render(){
    let myItemMenu = []
    this.props.itemsMenu.forEach((item) => {
      myItemMenu.push(
        <ItemMenu
          name={item.name}
          key={item.name}
          icon={item.icon}
        />
      )
    })
    return(
      <div>
        <div className="nav-wrapper">
          <nav className="hide-on-large-only">
            <a href="#" className="brand-logo">
              Mostro Media
            </a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="section table-of-contents right hide-on-med-and-down">
              {myItemMenu}
            </ul>
          </nav>

          <ul className="section table-of-contents side-nav fixed color-menu" id="mobile-demo">
            <img id="logo-mostro-media" className="center" src="img/logo_svg.svg" />
            <div className="logo-text">
              <h1 className="center-align">
                Mostro Media
              </h1>
            </div>
            {myItemMenu}
          </ul>
        </div>
      </div>
    )
  }
}

// ************************************************************************************************************
// Seccion CONTACT
// ************************************************************************************************************

const TextoContact = [
  { titulo: '¿Quieres saber más?, conversemos'},
  { call: 'Llámanos', number: 3142588148},
  { call: 'Envianos un email', number: 'info@mostromedia.com'}
]


class FormularioContact extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <form>
        <div className="input-field">
          <i className="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" className="validate" />
          <label>Your Name</label>
        </div>

        <div className="input-field">
          <i className="white-text material-icons prefix">mode_edit</i>
          <input id="email" type="email" className="validate" />
          <label>Email</label>
        </div>

        <div className="input-field">
        <i className="white-text material-icons prefix">message</i>
        <textarea id="textarea" className="materialize-textarea"></textarea>
        <label>Message</label>
        </div>

        <button className="white black-text btn waves-effect waves-light" type="submit" name="action">Submit
          <i className="material-icons right">send</i>
        </button>
      </form>
    )
  }
}

class ContentContact extends React.Component{
  render(){
    return(
      <div>
        <div id="content-contact" className="col s12 m5">
          <div className="valign-wrapper">
            <h4 className="valign">{this.props.call} <br /> {this.props.number}</h4>
          </div>
        </div>
        <div id="form-contact" className="col s12 m5">
          <div className="valign-wrapper">
            <FormularioContact />
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
  constructor(props){
    super(props)
    this.launchToast = this.launchToast.bind(this)
  }
  componentDidMount(){
    $(window).scroll( function() {
      $(this).scrollTop() > 3000 ? this.launchToast : console.log()
    })
  }
  launchToast(){
    Materialize.toast(' Dejanos tu mensaje y te contactaremos pronto :) ', 20000)
  }
  render(){
    let call = this.props.textContact[1].call
    let number = this.props.textContact[1].number

    return(
      <section id="contact" className="section scrollSpy">
        <div className="container">
          <div className="row">
            <TitleContact
              titulo={this.props.textContact[0].titulo}
            />
            <ContentContact
              call={call}
              number={number}
            />
          </div>
        </div>
      </section>
    );
  }
}


// ************************************************************************************************************
// Seccion TEAM
// ************************************************************************************************************

const MOSTROTEAM = [
  {
    name: 'Cristhian Cepeda',
    img: 'img/mostros/cristhian_cepeda.jpg',
    alt: 'Imagen de Cristhian Cepeda - Mostro Team',
    position: '',
    quote: 'Makia',
    color: '#2ECC71'
  },
  {
    name: 'Camilo Arguello',
    img: 'img/mostros/camilo_arguello.jpg',
    alt: 'Imagen de Camilo Arguello - Mostro Team',
    position: 'Developer',
    quote: 'Ingenio',
    color: '#FFCC08'
  },
  {
    name: 'Juan Garay',
    img: 'img/mostros/juan_garay.jpg',
    alt: 'Imagen de Juancho Garay - Mostro Team',
    position: '',
    quote: 'Confianza',
    color: '#3498DB'
  },
  {
    name: 'Sebastian Díaz',
    img: 'img/mostros/sebastian_diaz.jpg',
    alt: 'Imagen de Sebastian Díaz - Mostro Team',
    position: '',
    quote: 'Compromiso',
    color: '#BDC3C7'
  },
  {
    name: 'Daniela Sanchez',
    img: 'img/mostros/daniela_sanchez.jpg',
    alt: 'Imagen de Daniela Sanchez - Mostro Team',
    position: '',
    quote: 'Creatividad',
    color: '#FA7878'
  },
  {
    name: 'Daniel Valenzuela',
    img: 'img/mostros/daniel_valenzuela.jpg',
    alt: 'Imagen de Daniel Valenzuela - Mostro Team',
    position: '',
    quote: 'Empatía',
    color: '#8E44AD'
  }

]

const TitleTeam = 'The Team'

class ItemTeam extends React.Component{
  componentDidMount(){
    $('.carousel').carousel();
  }
  render(){
    return(
      <li className="carousel-item">
        <img className="circle responsive-img" src={this.props.img} alt={this.props.alt} />
        <h3>{this.props.name}</h3>
        <h4 style={{ color: this.props.color }}>{this.props.quote}</h4>
      </li>
    )
  }
}

class Team extends React.Component{
  render(){
    let mostroTeam = []
    this.props.mostros.forEach((mostro) => {
      mostroTeam.push(
        <ItemTeam
          name={mostro.name}
          key={mostro.name}
          img={mostro.img}
          alt={mostro.alt}
          quote={mostro.quote}
          color={mostro.color}
        />
      )
    })
    return(
      <section id="team" className="section scrollSpy">
        <div className="container">
          <div className="row">

            <TitleContact
              titulo={TitleTeam}
            />
            <ul className="carousel">
              {mostroTeam}
            </ul>

          </div>
        </div>
      </section>
    );
  }
}

// ************************************************************************************************************
// Seccion VIDEO
// ************************************************************************************************************

class VideoBackground extends React.Component{
  render(){
    return(
      <section id="video" className="fullscreen-bg section scrollSpy">
        <video id="myVideo" className="fullscreen-bg__video" muted autoPlay loop>
          <source src="video/videoBG.mp4" type="video/mp4" />
            Este navegador no soporta reproduccion de <code>video</code>
        </video>
      </section>
    )
  }
}

// ************************************************************************************************************
// Seccion WORK
// ************************************************************************************************************

const WHATWELOVE = [
  {name: 'Gráfica y Animación Digital', img: 'img/motion.svg', alt: 'Imagen de Gráfica y Animación Digital MOSTRO MEDIA'},
  {name: 'E-learning', img: 'img/laptop.svg', alt: 'Imagen de E-learning MOSTRO MEDIA'},
  {name: 'Producción Audiovisual', img: 'img/photo-camera.svg', alt: 'Imagen de Producción Audiovisual MOSTRO MEDIA'},
  {name: 'Producción Sonora', img: 'img/audio-wave.svg', alt: 'Imagen de Producción Sonora MOSTRO MEDIA'}
]

class ItemWork extends React.Component{
  render(){
    return(
        <div className="col s12 m6 l6">
          <div className="item-servicio">
            <img
              className="responsive-img"
              src={this.props.img}
              alt={this.props.alt}
            />
            <div>
              <h3 className="center-align">
                {this.props.name}
              </h3>
            </div>
          </div>
        </div>
    )
  }
}

class PairItemsWork extends React.Component{
  render(){
    let weWork = []
    this.props.whatwelove.forEach((whatwelov) => {
      weWork.push(
        <ItemWork
          name={whatwelov.name}
          key={whatwelov.name}
          img={whatwelov.img}
          alt={whatwelov.alt}
        />
      )
    })
    return(
      <div id="idividual-services" className={this.props.clase}>
        {weWork}
      </div>
    )
  }
}

class TxtWork extends React.Component{
  render(){
    return(
      <div className={this.props.clase}>
        <h1>Lo que nos gusta hacer</h1>
        <div className="divider"></div>
      </div>
    )
  }
}

class Work extends React.Component{
  render(){
    return(
      <section id="work" className="section scrollSpy">
        <div className="container">
          <div className="row">
            <div id="serv-section" className="col s12">
              <TxtWork clase="col s12 m4" />
              <PairItemsWork whatwelove={WHATWELOVE} clase="col s12 m8"/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

// ************************************************************************************************************
// Seccion HOME
// ************************************************************************************************************

let scene, camera, renderer, particles, saturn
let width = window.innerWidth-10, height = window.innerHeight
const ICONOS = [
  {
    name: 'Interacción',
    anima: '' ,
    img: {
      container: '',
      renderer: 'svg',
      loop: true,
      prerender: false,
      autoplay: false,
      autoloadSegments: false,
      path: 'https://raw.githubusercontent.com/MostroMedia/mostromedia-web-2017/master/img/icons-home/interaccion.json'
    },
    alt: 'Imagen del Icono de Interacción Mostro Media'
  },
  {
    name: 'Creatividad',
    anima: '',
    img: {
      container: '',
      renderer: 'svg',
      loop: true,
      prerender: false,
      autoplay: false,
      autoloadSegments: false,
      path: 'https://raw.githubusercontent.com/MostroMedia/mostromedia-web-2017/master/img/icons-home/creatividad.json'
    },
    alt: 'Imagen del Icono de Creatividad Mostro Media'
  },
  {
    name: 'Ingenio',
    anima: '',
    img: {
     container: '',
     renderer: 'svg',
     loop: true,
     prerender: false,
     autoplay: false,
     autoloadSegments: false,
     path: 'https://raw.githubusercontent.com/MostroMedia/mostromedia-web-2017/master/img/icons-home/ingenio.json'
    },
    alt: 'Imagen del Icono de Ingenio Mostro Media'
  },
  {
    name: 'Liderazgo',
    anima: '',
    img: {
     container: '',
     renderer: 'svg',
     loop: true,
     prerender: false,
     autoplay: false,
     autoloadSegments: false,
     path: 'https://raw.githubusercontent.com/MostroMedia/mostromedia-web-2017/master/img/icons-home/liderazgo.json'
    },
    alt: 'Imagen del Icono de Liderazgo Mostro Media'
  },
  {
    name: 'Talento',
    anima: '',
    img: {
     container: '',
     renderer: 'svg',
     loop: true,
     prerender: false,
     autoplay: false,
     autoloadSegments: false,
     path: 'https://raw.githubusercontent.com/MostroMedia/mostromedia-web-2017/master/img/icons-home/talento.json'
    },
    alt: 'Imagen del Icono de Talento Mostro Media'
  }
]

const colores = [0xE8540D, 0xCCCCCC, 0xE8540D]

function Init(padre){
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  camera.lookAt(scene.position)
  camera.position.z = 500

  renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(width, height)
  renderer.setClearColor(0x363636)
  renderer.shadowMap.enabled = true

  const ambientLight = new THREE.AmbientLight()
  scene.add(ambientLight)

  const light = new THREE.DirectionalLight()
  light.position.set(200,200,200)
  light.castShadow = true
  light.shadow.camera.left = -100
  light.shadow.camera.right = 100
  light.shadow.camera. top = 100
  light.shadow.camera.bottom = -100
  scene.add(light)

  drawParticles()
  drawSaturn()

  padre.appendChild(renderer.domElement)

  window.addEventListener('resize', onResize)
  return renderer
}

function onResize(){
  width = window.innerWidth
  height = window.innerHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width,height)
}

function animate(){
  requestAnimationFrame(animate)
  render()
}

function render(){
  particles.rotation.x += 0.0005
  particles.rotation.y -= 0.0007
  saturn.rotation.y += 0.0003
  renderer.render(scene, camera)
}

function drawParticles(){
  particles = new THREE.Group()
  scene.add(particles)
  const geometry =new THREE.TetrahedronGeometry(5,0)
  for(let i=0; i<100; i++){
    const material = new THREE.MeshPhongMaterial({
      color : colores[Math.floor(Math.random() * colores.length)],
      shading: THREE.FlatShading
    })

    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set((Math.random() - 0.5) * 1000,
                      (Math.random() - 0.5) * 1000,
                      (Math.random() - 0.5) * 1000)
    mesh.updateMatrix()
    mesh.matrixAutoUpdate = false
    particles.add(mesh)
  }
}

function drawSaturn(){
  saturn = new THREE.Group()
}

class ParticlesHome extends React.Component{
  constructor(){
    super()
  }
  componentDidMount(){
    Init(document.getElementById("particles-home"))
    animate();
  }

  render(){
    return(
      <div id="particles-home"></div>
    )
  }
}

let animData = {
    container: '',
    renderer: 'svg',
    loop: true,
    prerender: false,
    autoplay: false,
    autoloadSegments: false,
    path: 'https://raw.githubusercontent.com/MostroMedia/mostromedia-web-2017/master/img/animations/mostro-media-icon-animation.json'
}
let anim = ''
let isThrowing = false

class HomeContent extends React.Component{
  constructor(props){
    super(props)
    this.playAnimation = this.playAnimation.bind(this)
    this.stopAnimation = this.stopAnimation.bind(this)
  }
  componentDidMount(){
    animData.container = document.getElementById('logo-mostro-media-center')
    anim = bodymovin.loadAnimation(animData)
    anim.playSegments([0,35],true)
    setTimeout(() => { anim.stop() } , 2200)
  }
  playAnimation(){
    anim.playSegments([0,35],true)
  }
  stopAnimation(){
    anim.stop()
  }

  render(){
    return(
      <div id="mostro-center" className="container">
        <div className="row">
            <div className="col s12 m12 l12">
              <div id="logo-mostro-media-center" className="center" onMouseEnter={this.playAnimation} onMouseLeave={this.stopAnimation}></div>
              <h1 className="center-align">MOSTRO <br /> MEDIA</h1>
            </div>
        </div>
      </div>
    )
  }
}
class SingleIconHome extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    let miAnima = this.props.anima
    this.props.img.container = document.getElementById(this.props.myid)
    miAnima = bodymovin.loadAnimation(this.props.img)
    miAnima.playSegments([0,29],true)
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
    setTimeout( () => {
      document.getElementById("iconos-home").style.transform = "scale(1)";
    } , 1000)
  }
  render(){
    let myIcon = []
    this.props.iconos.forEach((icono, index, array) => {
      myIcon.push(
        <SingleIconHome
          name={icono.name}
          key={icono.name}
          myid={icono.name}
          img={icono.img}
          alt={icono.alt}
          anima={icono.anima}
        />
      )
    })
    return(
      <ul id="iconos-home" className="hide-on-med-and-down">{myIcon}</ul>
    )
  }
}

class Home extends React.Component{
  render(){
    return(
      <section id="home" className="container-fluid section scrollSpy">
        <HomeContent />
        <IconHome iconos={ICONOS} />
      </section>
    )
  }
}

// ************************************************************************************************************
// MAIN

class Main extends React.Component{
  render(){
    return(
      <div>
        <Home />
        <Work />
        <VideoBackground />
        <Team mostros={MOSTROTEAM}/>
        <Contact textContact={TextoContact}/>
        <ParticlesHome />
        <Menu itemsMenu={MiMenu}/>
      </div>
    )
  }
}


ReactDOM.render(
  <Main />,
  document.getElementById('main')
);
