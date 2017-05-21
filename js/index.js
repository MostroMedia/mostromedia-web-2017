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
  }

  render(){
    return(
      <li>
        <a href={this.props.name}>
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
      $('.scrollspy').scrollSpy({
        scrollOffset : -50
      })
      $(".logo-text").click(function() {
      $('html,body').animate({
          scrollTop: $("#home").offset().top},
          'slow');
        });
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
        <div className="nav-wrapper">
          <nav className="hide-on-large-only">
            <a href="#home" className="brand-logo">
              Mostro Media
            </a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="section table-of-contents right hide-on-med-and-down">
              {myItemMenu}
            </ul>
          </nav>

          <ul className="section table-of-contents side-nav fixed color-menu" id="mobile-demo">
            <div className="logo-text">
              <img id="logo-mostro-media" className="center" src="img/logo_svg.svg" />
              <h1 className="center-align">
                Mostro Media
              </h1>
            </div>
            {myItemMenu}
          </ul>
        </div>
    )
  }
}


// ************************************************************************************************************
// Seccion Footer
// ************************************************************************************************************

class Footer extends React.Component{
  render(){
    // <a className="left" href="#"><i className="fa fa-instagram white-text" aria-hidden="true"></i></a>
    return(
      <footer className="center card-panel grey darken-3">
        <div className="container">

          <ul className="social">

      			<li className="facebook"><a href="#" className="entypo-facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
      			<li className="instagram"><a href="https://www.instagram.com/mostromedia/?hl=en" className="entypo-instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
      			<li className="github"><a href="https://github.com/MostroMedia" className="entypo-github"><i className="fa fa-github" aria-hidden="true"></i></a></li>
      			<li className="behance"><a href="#" className="entypo-behance"><i className="fa fa-behance" aria-hidden="true"></i></a></li>
      			<li className="linked-in"><a href="#" className="entypo-linkedin"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>

      		</ul>

        </div>
        <div className="container">
          <p>Copyright (c) 2017 MOSTRO MEDIA All Rights Reserved.</p>
        </div>
      </footer>
    )
  }
}


// ************************************************************************************************************
// Seccion CONTACT
// ************************************************************************************************************

const TextoContact = [
  { titulo: '¿Quieres saber más?, conversemos'},
  { call: 'Llámanos', number: "+57 314 258 8148"},
  { call: 'Envianos un email', number: 'info@mostromedia.com'}
]


class FormularioContact extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    Materialize.updateTextFields()
  }
  render(){
    return(
      <form>
        <div className="input-field">
          <i className="material-icons prefix">account_circle</i>
          <input value={getCookie('nombre')} id="icon_prefix" type="text" className="validate" onChange={() => {console.log("hola")}}/>
          <label>Tu nombre</label>
        </div>

        <div className="input-field">
          <i className="white-text material-icons prefix">mode_edit</i>
          <input id="email" type="email" className="validate" onChange={() => {console.log("hola")}} />
          <label>Email</label>
        </div>

        <div className="input-field">
        <i className="white-text material-icons prefix">message</i>
        <textarea id="textarea" className="materialize-textarea" onChange={() => {console.log("hola")}} ></textarea>
        <label>Tu mensaje</label>
        </div>

        <button className="white black-text btn waves-effect waves-light right" type="submit" name="action">Enviar
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
            <h2 className="valign">{this.props.call} <br /> {this.props.number}</h2>
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
  }
  componentDidMount(){
    $(window).scroll( function() {
      let scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop()
      if(scrollBottom === 0){
        Materialize.toast(getCookie('nombre') + ' dejanos tu mensaje y te contactaremos pronto :) ', 5000,'rounded')
      }
    })
  }
  render(){
    let call = this.props.textContact[1].call
    let number = this.props.textContact[1].number

    return(
      <section id="contact" className="section scrollspy">
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
    position: 'Producer',
    quote: 'Makia',
    color: '#2ECC71'
  },
  {
    name: 'Camilo Arguello',
    img: 'img/mostros/camilo_arguello.jpg',
    alt: 'Imagen de Camilo Arguello - Mostro Team',
    position: 'Software Developer',
    quote: 'Ingenio',
    color: '#FFCC08'
  },
  {
    name: 'Juan Garay',
    img: 'img/mostros/juan_garay.jpg',
    alt: 'Imagen de Juancho Garay - Mostro Team',
    position: 'Animator',
    quote: 'Confianza',
    color: '#3498DB'
  },
  {
    name: 'Sebastian Díaz',
    img: 'img/mostros/sebastian_diaz.jpg',
    alt: 'Imagen de Sebastian Díaz - Mostro Team',
    position: 'Project Manager',
    quote: 'Compromiso',
    color: '#BDC3C7'
  },
  {
    name: 'Daniela Sanchez',
    img: 'img/mostros/daniela_sanchez.jpg',
    alt: 'Imagen de Daniela Sanchez - Mostro Team',
    position: 'Art director',
    quote: 'Creatividad',
    color: '#FA7878'
  },
  {
    name: 'Daniel Valenzuela',
    img: 'img/mostros/daniel_valenzuela.jpg',
    alt: 'Imagen de Daniel Valenzuela - Mostro Team',
    position: 'Musician',
    quote: 'Empatía',
    color: '#8E44AD'
  }

]

const TitleTeam = 'Nuestro equipo'

class ItemTeam extends React.Component{
  render(){
    return(
      <li className="center">
        <img className="esponsive-img" src={this.props.img} alt={this.props.alt} />
        <h3>{this.props.name}</h3>
        <hr/>
        <h4 style={{ color: this.props.color }}>{this.props.quote}</h4>
      </li>
    )
  }
}

class Team extends React.Component{
  componentDidMount(){
    $('.listMostro').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 5,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 400,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
    })
  }
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
      <section id="team" className="section scrollspy">
        <div className="container">
          <div className="row">
            <TitleContact
              titulo={TitleTeam}
            />
          </div>
        </div>
        <ul className="listMostro">
          {mostroTeam}
        </ul>
        <div id="borde"></div>
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
      <section id="video" className="fullscreen-bg section scrollspy">
        <video id="myVideo" className="fullscreen-bg__video" muted autoPlay loop>
          <source src="video/bannerMostroMedia.mp4" type="video/mp4" />
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
  {
    name: '¿Tienes una idea en mente?',
    img: 'img/iconos-work/ideaMostroMedia.svg',
    alt: 'Imagen de ¿Tienes una idea en mente?, MOSTRO MEDIA',
    modal: 'rtaA',
    rta: 'La hacemos realidad.',
    textoRta: 'En Mostro Media te ofrecemos la posibilidad de hacer realidad tus ideas, ya sea que quieras desarrollar una aplicación movil o un sitio web, para conectarte con tus clientes de nueva forma.',
    imgintro: 'img/iconos-work/idea-introMostroMedia.jpg',
    alt2: 'Imagen de Tu idea la hacemos realidad MOSTRO MEDIA',
  },
  {
    name: '¿Tu animación personalizada?',
    img: 'img/iconos-work/animationMostroMedia.svg',
    alt: 'Imagen de ¿Tu animación personalizada? MOSTRO MEDIA',
     modal: 'rtaB',
     rta: 'Desarróllala con nosotros.',
     textoRta: 'Ponemos a tu alcance todas nuestras habilidades para que juntos desarrollemos esa animación que siempre quisiste.',
     imgintro: 'img/iconos-work/animation-introMostroMedia.jpg',
     alt2: 'Imagen de Desarróllala con nosotros MOSTRO MEDIA',
   },
  {
    name: '¿Tienes un negocio?',
    img: 'img/iconos-work/businessMostroMedia.svg',
    alt: 'Imagen de ¿Tienes un negocio? MOSTRO MEDIA',
    modal: 'rtaC',
    rta: 'Potencializa tu ventas. Vende online.',
    textoRta: 'Te ayudamos a crear estrategias de Marketing digital para que tus ventas online se incrementen.',
    imgintro: 'img/iconos-work/idea-introMostroMedia.jpg',
    alt2: 'Imagen de Potencializa tu ventas. Vende online MOSTRO MEDIA',
  },
  {
    name: '¿Tienes un equipo que capacitar?',
    img: 'img/iconos-work/e-learningMostroMedia.svg',
    alt: 'Imagen de ¿Tienes un equipo que capacitar? MOSTRO MEDIA',
    modal: 'rtaD',
    rta: 'Crea plataformas de aprendizaje en línea.',
    textoRta: 'Te ofrecemos la creación de plataformas de universidad Corporativa, además de la implementación de malla curricular, creación de cursos e-learning y consultoría en proyectos TIC-Educación.',
    imgintro: 'img/iconos-work/e-learning-introMostroMedia.jpg',
    alt2: 'Imagen de Crea plataformas de aprendizaje en línea. MOSTRO MEDIA',
  }
]

function MyModal(props){
  return(
    <div id={props.modal} className="modal">
      <div className="modal-content">
        <h1>{props.rta}</h1>
        <img src={props.imgintro} alt={props.alt2}/>
        <h2>{props.textoRta}</h2>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-action modal-close waves-effect waves-green btn white black-text">Salir</a>
      </div>
    </div>
  )
}

class Modals extends React.Component{
  render(){
    let myModal = []
    this.props.whatwelove.forEach((whatwelov) => {
      myModal.push(
          <MyModal
            modal={whatwelov.modal}
            key={whatwelov.modal}
            rta={whatwelov.rta}
            textoRta={whatwelov.textoRta}
            imgintro={whatwelov.imgintro}
            alt2={whatwelov.alt2}
          />
      )
    })
    return(
      <div>
        {myModal}
      </div>
    )
  }
}

class ItemWork extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    $('.modal').modal();
  }
  render(){
    return(
          <li className="item-servicio" data-target={this.props.modal} >
            <div className="img-item">
              <img
                className="responsive-img"
                src={this.props.img}
                alt={this.props.alt}
              />
            </div>
            <div className="txt-item">
              <h3 className="center-align">
                {this.props.name}
              </h3>
            </div>
          </li>
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
            modal={whatwelov.modal}
          />
      )
    })
    return(
      <ul id="individual-services">
        {weWork}
      </ul>
    )
  }
}

class Work extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <section id="work" className="section scrollspy">
        <div className="container">
          <div className="row">
            <div id="serv-section" className="col s12">

              <TitleContact
                titulo="Lo que hacemos"
              />
              <Modals whatwelove={WHATWELOVE}/>
              <PairItemsWork whatwelove={WHATWELOVE}/>
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

let scene, camera, renderer, particles, controls
let width = window.innerWidth-10, height = window.innerHeight, mousePos = {x:0,y:0}
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
  camera = new THREE.PerspectiveCamera(75, width / height, 0.5, 1000)
  camera.lookAt(scene.position)
  camera.position.z = 200

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

  padre.appendChild(renderer.domElement)

  window.addEventListener('resize', onResize, false)
  // window.addEventListener('mousemove', hanldeMouseMove, false)
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
  particles.rotation.x += 0.0008
  particles.rotation.y -= 0.0009
  renderer.render(scene, camera)
}

function drawParticles(){
  particles = new THREE.Group()
  scene.add(particles)
  const geometry =new THREE.TetrahedronGeometry(5,0)
  for(let i=0; i<200; i++){
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
      document.getElementById("iconos-home").style.transform = "scale(1)"
      Materialize.toast('Bienvenid@ ' + getCookie('nombre'), 3000, 'rounded')
    } , 1000)
    setTimeout(() => {
      Materialize.toast('Haz scroll y mira nuestro contenido, nuestros servicios y nuestro equipo.', 5000, 'rounded')
    }, 2000)
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
      <section id="home" className="container-fluid section scrollspy">
        <HomeContent />
        <IconHome iconos={ICONOS} />
      </section>
    )
  }
}

// ************************************************************************************************************
// Seccion HOME
// ************************************************************************************************************

const TEXTOINTRO = [
  {
    input: 'Escribe tu nombre aquí para empezar',
    titulo: 'Bienvenid@ a Mostro Media'
  }
]

function cleanText(input){
  let str = document.getElementById(input)
  let regex = /[^a-z]/gi
  str.value = str.value.replace(regex, '')
  return str
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    var expires = "expires="+d.toUTCString()
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

function getCookie(cname) {
    var name = cname + "="
    var ca = document.cookie.split(';')
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) == ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ""
}

function BtnEnter(props){
  if(props.value != ''){
    return(
      <button className="btn right" onClick={props.onClick}>Entrar</button>
    )
  }else{
    return(
      <button className="hide"></button>
    )
  }
}



class YourName extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div id="your-name" className="container valign-wrapper">
        <form>
          <div className="input-field">
            <i className="material-icons prefix">account_circle</i>
            <input id="icon_prefix" type="text" className="validate" value={this.props.value} onChange={this.props.onChange} />
            <label htmlFor="icon_prefix">{this.props.textsSaludo[0].input}</label>
          </div>
          <br />
          <h2 className="center">{this.props.textsSaludo[0].titulo} {this.props.value}</h2>
          <BtnEnter
            onClick={this.props.onClick}
            value={this.props.value}
          />
        </form>
      </div>
    )
  }
}


// ************************************************************************************************************
// MAIN
// ************************************************************************************************************



class Main extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value : '',
      isPressed: false
    }
    this.ingresaNombre = this.ingresaNombre.bind(this)
    this.botonPresionado = this.botonPresionado.bind(this)
  }
  ingresaNombre(event){
    event.preventDefault()
    cleanText("icon_prefix")
    this.setState({
      value: event.target.value
    })
  }
  botonPresionado(event){
    setCookie('nombre', this.state.value ,365)
    this.setState({
      isPressed: true
    })
  }
  render(){
    // <YourName
    //   textsSaludo={TEXTOINTRO}
    //   value={this.state.value}
    //   onChange={this.ingresaNombre}
    //   onClick={this.botonPresionado}
    // />
        return(
          <div>
            <Home
              cookie={getCookie('nombre')}
            />
            <Work />
            <Team mostros={MOSTROTEAM}/>
            <Contact textContact={TextoContact}/>
            <Footer />
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
