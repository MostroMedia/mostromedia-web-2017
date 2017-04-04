'use strict'

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

class Contact extends React.Component{
  render(){
    return(
      <section>
        <h1>Contact</h1>
      </section>
    );
  }
}

class Team extends React.Component{
  render(){
    return(
      <section>
        <h1>Team</h1>
      </section>
    );
  }
}

class Work extends React.Component{
  render(){
    return(
      <section>
        <h1>Work</h1>
      </section>
    );
  }
}

let scene, camera, renderer, particles, saturn;
let width = window.innerWidth-10, height = window.innerHeight;

const colores = [0xE8540D, 0xCCCCCC, 0xE8540D];

function Init(padre){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.lookAt(scene.position);
  camera.position.z = 500;

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  renderer.setClearColor(0x363636);
  renderer.shadowMap.enabled = true;

  const ambientLight = new THREE.AmbientLight();
  scene.add(ambientLight);

  const light = new THREE.DirectionalLight();
  light.position.set(200,200,200);
  light.castShadow = true;
  light.shadow.camera.left = -100;
  light.shadow.camera.right = 100;
  light.shadow.camera. top = 100;
  light.shadow.camera.bottom = -100;
  scene.add(light);

  drawParticles();
  drawSaturn();

  padre.appendChild(renderer.domElement);

  window.addEventListener('resize', onResize);
  return renderer;
}

function onResize(){
  width = window.innerWidth;
  height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width,height);
}

function animate(){
  requestAnimationFrame(animate);
  render();
}

function render(){
  particles.rotation.x += 0.001;
  particles.rotation.y -= 0.004;
  saturn.rotation.y += 0.003;
  renderer.render(scene, camera);
}

function drawParticles(){
  particles = new THREE.Group();
  scene.add(particles);
  const geometry =new THREE.TetrahedronGeometry(5,0);
  for(let i=0; i<100; i++){
    const material = new THREE.MeshPhongMaterial({
      color : colores[Math.floor(Math.random() * colores.length)],
      shading: THREE.FlatShading
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set((Math.random() - 0.5) * 1000,
                      (Math.random() - 0.5) * 1000,
                      (Math.random() - 0.5) * 1000);
    mesh.updateMatrix();
    mesh.matrixAutoUpdate = false;
    particles.add(mesh);
  }
}

function drawSaturn(){
  saturn = new THREE.Group();
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


const ICONOS = [
  {name: 'Interacción', img: 'img/browser.svg', alt: 'Imagen del Icono de Interacción Mostro Media'},
  {name: 'Creatividad', img: 'img/browser.svg', alt: 'Imagen del Icono de Creatividad Mostro Media'},
  {name: 'Ingenio', img: 'img/browser.svg', alt: 'Imagen del Icono de Ingenio Mostro Media'},
  {name: 'Liderazgo', img: 'img/browser.svg', alt: 'Imagen del Icono de Liderazgo Mostro Media'},
  {name: 'Talento', img: 'img/browser.svg', alt: 'Imagen del Icono de Talento Mostro Media'}
]

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
      myIcon.push(<SingleIconHome name={icono.name} key={icono.name} img={icono.img} alt={icono.alt}/> )
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
      </section>
    )
  }
}

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
