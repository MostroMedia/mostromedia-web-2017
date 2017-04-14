'use strict'

// document.documentElement.style.overflow = 'hidden'
// document.body.scroll = "no"

const MiMenu = [
  {name: '#home', icon: 'fast_forward'},
  {name: '#servicios', icon: 'code'},
  {name: '#portafolio', icon: 'videocam'},
  {name: '#equipo', icon: 'recent_actors'},
  {name: '#contactenos', icon: 'chat_bubble_outline'}
]

class ItemMenu extends React.Component{
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
      <ul className="side-nav fixed color-menu">
        <img className="center" src="img/logo_svg.svg" />
        <div className="logo-text">
          <h1 className="center-align">
            Mostro Media
          </h1>
        </div>
        {myItemMenu}
      </ul>
    )
  }
}

// ************************************************************************************************************
// Seccion CONTACT
// ************************************************************************************************************

const TextoContact = [
  { titulo: '¿Quieres saber más?, conversemos'},
  { call: 'Llámanos', number: 3142588148}
]

class FormularioContact extends React.Component{
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
  render(){
    return(
      <section id="contact">
        <div className="container">
          <div className="row">
            <TitleContact
              titulo={this.props.textContact[0].titulo}
            />
            <ContentContact
              call={this.props.textContact[1].call}
              number={this.props.textContact[1].number}
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
  },

]

class ItemTeam extends React.Component{
  componentDidMount(){
    $('.carousel').carousel();
  }
  render(){
    return(
      <li className="carousel-item">
        <img src={this.props.img} alt={this.props.alt} />
        <h3>{this.props.name}</h3>
        <h4 style={{ color: this.props.color }}>{this.props.quote}</h4>
      </li>
    )
  }
}

class Team extends React.Component{
  render(){
    console.log(this.props)
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
      <section id="team">
        <ul className="carousel">
          {mostroTeam}
        </ul>
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
      <section id="video" className="fullscreen-bg">
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
      <section id="work" className="container">
        <div className="row">
          <div id="serv-section" className="col s12">
            <TxtWork clase="col s12 m4" />
            <PairItemsWork whatwelove={WHATWELOVE} clase="col s12 m8"/>
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
  {name: 'Interacción', img: 'img/browser.svg', alt: 'Imagen del Icono de Interacción Mostro Media'},
  {name: 'Creatividad', img: 'img/browser.svg', alt: 'Imagen del Icono de Creatividad Mostro Media'},
  {name: 'Ingenio', img: 'img/browser.svg', alt: 'Imagen del Icono de Ingenio Mostro Media'},
  {name: 'Liderazgo', img: 'img/browser.svg', alt: 'Imagen del Icono de Liderazgo Mostro Media'},
  {name: 'Talento', img: 'img/browser.svg', alt: 'Imagen del Icono de Talento Mostro Media'}
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

class HomeContent extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="row">
            <div className="col s12 m12 l12">
              <img className="center responsive-img" src="img/logo_svg.svg" />
              <h1 className="center-align">MOSTRO <br /> MEDIA</h1>
            </div>
        </div>
      </div>
    )
  }
}

class SingleIconHome extends React.Component{
  render(){
    return(
      <li>
        <img src={this.props.img} alt={this.props.alt} width="50" />
        <p>{this.props.name}</p>
      </li>
    )
  }
}

class IconHome extends React.Component{
  render(){
    let myIcon = []
    this.props.iconos.forEach((icono) => {
      myIcon.push(
        <SingleIconHome
          name={icono.name}
          key={icono.name}
          img={icono.img}
          alt={icono.alt}
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
      <section id="home" className="container-fluid">
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
