function 

class MenuPrincipal extends React.Component {
  render() {
    return (
      <ul className="side-nav fixed color-menu">
        <img className="center" src="img/logo_svg.svg" />
        <p>Mostro<br />Media</p>
        <li><a href="#home"><i className="medium material-icons">fast_forward</i></a></li>
        <li><a href="#servicios"><i className="medium material-icons">code</i></a></li>
        <li><a href="#portafolio"><i className="medium material-icons">videocam</i></a></li>
        <li><a href="#equipo"><i className="medium material-icons">recent_actors</i></a></li>
        <li><a href="#contactenos"><i className="medium material-icons">chat_bubble_outline</i></a></li>
      </ul>
    );
  }
}
ReactDOM.render(
  <MenuPrincipal />,
  document.getElementById('main')
);
