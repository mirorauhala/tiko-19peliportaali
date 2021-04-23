import React, {Component} from 'react'
import { FiText, EnText } from './texts'
import Navi from './navi'
import LandingPage from './landingpage'
import Games from './games'
import Footer from './footer'
import { Webinar } from './Webinar-component'
import { Download } from './Download-component'

import { Route, HashRouter } from 'react-router-dom'

export class MainWrapper extends Component {
    constructor() {
        super()
        this.state = { langIsFi: true, txt: new FiText(), lang: 'fi' }
        this.clickHandle = this.clickHandle.bind(this)
    }
    clickHandle() {
        if(this.state.langIsFi) {
          this.setState({langIsFi: false, txt: new EnText(), lang: 'en'})
         } else {
          this.setState({langIsFi: true, txt: new FiText(), lang: 'fi'})
         } 
      }
    render() {
        return (
            <div>
                
                <HashRouter>
                    <Navi changeLang={this.clickHandle} />
                    <Route exact path="/" render={ (props) => <Games {...props} txt={this.state.txt}  lang={this.state.lang} /> } />   
                    <Route exact path="/about" render={ (props) => <LandingPage {...props} txt={this.state.txt} lang={this.state.lang} /> } />
                    <Route exact path="/webinar" render={ (props) => <Webinar {...props} txt={this.state.txt} lang={this.state.lang} /> } />
                    <Route exact path="/download" render={ (props) => <Download {...props} txt={this.state.txt} lang={this.state.lang} /> } />
                    <Footer txt={this.state.txt} />
                </HashRouter>
                
            </div>
        )
    }
}