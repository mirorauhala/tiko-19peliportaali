import React, { Component } from "react";
import './css/footer.css'
import { Container, Row, Col } from "react-bootstrap";
import tamkLogoEn from './img/tamk_en.png'
import tamkLogoFi from './img/tamk_fi.png'
import tikoLogoEn from './img/tiko_en.png'
import tikoLogoFi from './img/tiko_fi.png'
import orasLogo from './img/oras_logo_color_rgb.png'
import { FiText, EnText } from './texts'


export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = { txt: props.txt, lang: 'fi' }
  }
  static getDerivedStateFromProps(props, state) {
    if (props.txt !== state.txt) {
        if (props.txt instanceof FiText) {
          return { txt: props.txt, lang: 'fi' }
        } else if (props.txt instanceof EnText) {
          return { txt: props.txt, lang: 'en' }
        }
        
    } else {
      return null
    }
  } 
  render() {
    let tamkLogo, tikoLogo
    if (this.state.lang === 'fi') {
      tamkLogo = tamkLogoFi
      tikoLogo = tikoLogoFi
    } else {
      tamkLogo = tamkLogoEn
      tikoLogo = tikoLogoEn
    }
    return (
      <Container fluid className="customStyle">
      <Row>
        <Col sm={4} className="footerPost">
          <a href="https://www.tuni.fi/fi/tutustu-meihin/tamk"><img alt="" src={tamkLogo} /></a>
        </Col>
        <Col sm={4} className="footerPost">
          <a href="https://www.tuni.fi/fi/tule-opiskelemaan/tietojenkasittelyn-tutkinto-ohjelma"><img alt="" src={tikoLogo} className="footerLogo" /></a>
        </Col>
        <Col sm={4} className="footerPost">
          <a href="https://www.tuni.fi/fi/tutkimus/opi-ravinteista-oras"><img alt="" src={orasLogo} className="footerLogo" /></a>
        </Col>
      </Row>
    </Container>

    )
  }
}
