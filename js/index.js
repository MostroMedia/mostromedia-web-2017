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

class HomeContent extends React.Component{
  render(){
    return(
    <div className="row">
        <div className="col s12 m12 l12">
          <img className="center responsive-img" src="img/logo_svg.svg" />
        </div>
    </div>
    );
  }
}

class Home extends React.Component{
  render(){
    return(
      <section id="home">
        <HomeContent />
      </section>
    );
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
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('main')
);
