import React, {Component} from 'react'
import './css/bootstrap/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './css/navi.css'
import { FiText, EnText } from './texts'
import orasLogo from './img/oras_logo_color_rgb.png'



class Navi extends Component {
    constructor(props) {
      super(props)
      this.txt = new FiText()
      this.state = { langIsFi: true }
    }
    clickHandle() {
      if(this.state.langIsFi) {
        this.setState({langIsFi: false})
        this.txt = new EnText()
        this.props.changeLang(this.txt)
       } else {
        this.setState({langIsFi: true})
        this.txt = new FiText()
        this.props.changeLang(this.txt)
       } 
    }
    render() {
        return (
<Navbar  bg="dark" variant="dark" expand="lg" className="naviCustom">
  <Navbar bg="dark"  href="#home" className="naviTitle">
    <a href={process.env.PUBLIC_URL + "/"}>
      <img alt="" src={orasLogo} className="headerLogo" />
      {this.txt.navi.title}
    </a>
  </Navbar>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href={process.env.PUBLIC_URL + "/"}><span className="linkColor" >{this.txt.navi.games}</span></Nav.Link>
      <Nav.Link href={process.env.PUBLIC_URL + "/#/about"}><span className="linkColor" >{this.txt.navi.about}</span></Nav.Link>
      <Nav.Link href={process.env.PUBLIC_URL + "/#/webinar"}><span className="linkColor" >{this.txt.navi.webinar}</span></Nav.Link>
      <Nav.Link href={process.env.PUBLIC_URL + "/#/download"}><span className="linkColor" >{this.txt.navi.download}</span></Nav.Link>
    </Nav>
    <Nav className="ml-auto"><span className="linkColor" onClick={() => this.clickHandle()}>
      <Button>{this.txt.navi.language}</Button></span>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        )
    }
}

export default Navi