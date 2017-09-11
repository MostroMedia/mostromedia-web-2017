import React, { Component } from 'react'
import {SideNav,SideNavItem} from 'react-materialize'
import {logo} from '../logo.png'


const MenuItems=[{name:'#home',icon:'fast_forward'},{name:'#work',icon:'code'},{name:'#team',icon:'recent_actors'},{name:'#contact',icon:'chat_bubble_outline'}]

const Menu = () => (
    <MyMenu
        itemsMenu={MenuItems}
    />
)

class MyMenu extends React.Component{
	componentDidMount(){
		// $(document).ready(function(){
		// 	$(".button-collapse").sideNav()
		// 	$('.scrollspy').scrollSpy({scrollOffset: 0})
		// 	$(".logo-text").click(function(){
		// 		$('html,body').animate({scrollTop:$("#home").offset().top},'slow')
		// 	})
		// })
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
					<img id="logo-mostro-media" className="center" src={logo}/>
					<h1 className="center-align">Mostro Media</h1>
				</div>
				{myItemMenu}
			</ul>
		</div>
		)
	}
}


class ItemMenu extends Component{
	render(){
		return(
			<li><a href={this.props.name}><i className="medium material-icons">{this.props.icon}</i></a></li>
		)
	}
}

export default Menu
