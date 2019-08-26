import React from 'react';
import {AboveFold, OurWork, RecentProjects, ContactUs, DigitalMatters, Learn} from './main';
import Header from '../components/header';
import Overlay from './overlay';
import Values from './values'
import '../styles/project.css'
import '../styles/main.css';
import '../styles/matters.css';
import { selectBook, overlay, menu, valueNextPage, valuePrevPage, defaultView, defaultHeader, invertHeader, menuHeader, scrollHeader, values} from '../actions/index.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      overlay:{display:'none'},
      menu: "menu",
    }
  }

  render(){


    console.log(this.props)
      return(
          <div id='main'>

            <Header appState={this.props}/>
            <AboveFold appState={this.props} />
            <OurWork appState={this.props}/>

            <RecentProjects />
            <ContactUs />
          </div>

      )
    }

    componentDidMount(){
      let lato = new FontFace('lato', 'url(../styles/fonts/Lato-Regular.ttf)', {
        style: 'normal',
        weight: '400'
      });

      document.fonts.add(lato);

      lato.load();
    }

    // <Learn appState={this.props}/>

// change={()=>{return this.setState({overlay:{display: 'flex'}, menu:"battery-charging"})}}

}

// <Overlay display={this.state.overlay.display} appState={this.props} />

function mapStateToProps(state){
  return{
    books: state.books,
    view: state.view,
    values: state.values,
    header: state.header
  }
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({ selector: selectBook, overlay: overlay, valueNextPage: valueNextPage, valuePrevPage: valuePrevPage, defaultView: defaultView, defaultHeader: defaultHeader, invertHeader: invertHeader, menuHeader: menuHeader, scrollHeader: scrollHeader,  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
