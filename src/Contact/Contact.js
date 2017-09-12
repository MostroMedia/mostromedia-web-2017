import React, { Component } from 'react'
import Title from '../Title/Title.js'

const TextoContact=[{titulo:'¿Quieres saber más?, conversemos'},{call:'Llámanos',number:"+57 314 258 8148"},{call:'Envíanos un email',number:'info@mostromedia.com'}]

const Contact = () => (
    <MyContact 
        textContact={TextoContact}
    />
)

class MyContact extends Component{
	render(){
		let call=this.props.textContact[1].call, mail=this.props.textContact[2].call
		let number=this.props.textContact[1].number, mailtxt=this.props.textContact[2].number
		
		return(
			<section id="contact" className="section scrollspy">
				<div className="container">
					<div className="row">
						<Title
							titulo={this.props.textContact[0].titulo}/>
                        <ContentContact
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

class ContentContact extends Component{
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

export default Contact