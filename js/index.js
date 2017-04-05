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

class Contact extends React.Component{
  render(){
    return(
      <section>
        <h1>Contact</h1>
      </section>
    );
  }
}


// ************************************************************************************************************
// Seccion TEAM
// ************************************************************************************************************


class Team extends React.Component{
  render(){
    return(
      <section>
        <h1>Team</h1>
      </section>
    );
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
    console.log(this.props.clase)
    return(
      <div className={this.props.clase}>
        <h1>
          Lo que nos gusta hacer
        </h1>
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
            <TxtWork clase="col s4" />
            <PairItemsWork whatwelove={WHATWELOVE} clase="col s8"/>
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

class BotonComencemos extends React.Component{
  render(){
    return(
      <button className="btn-large right grey darken-4">Comencemos</button>
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
      <ul id="iconos-home">{myIcon}</ul>
    )
  }
}

class Home extends React.Component{
  render(){
    return(
      <section id="home" className="container-fluid">
        <HomeContent />
        <IconHome iconos={ICONOS} />
        <BotonComencemos />
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
        <Team />
        <Contact />
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
