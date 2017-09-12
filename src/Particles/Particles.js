import React, { Component } from 'react'
import * as THREE from 'three';

let scene,camera,renderer,particles
let width=window.innerWidth-10,height=window.innerHeight
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

export default class Particles extends Component{
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
