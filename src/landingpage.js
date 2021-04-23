import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './css/landing.css'
import fb from './img/facebook.png'
import insta from './img/instagram.png'

class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = { txt: props.txt }
    }
    static getDerivedStateFromProps(props, state) {
        if (props.txt !== state.txt) {
            return { txt: props.txt }
        } else {
            return null
        }
    }
    render() {
        return (
<div className="landing" id="about">
        <h1 className="title">{this.state.txt.about.pageTitle}</h1>
    <hr/>
    
    <Container>
        <Row md={2} sm={1}>
            <Col>
                <h3>{this.state.txt.about.pTitle}</h3>
                <p>{this.state.txt.about.par1}<br/><br/>
                {this.state.txt.about.par2}<br/><br/>
                {this.state.txt.about.par3}</p>
            </Col>
            <Col>
                <h3>{this.state.txt.about.orasTitle}</h3>
                <p>{this.state.txt.about.oraspar1}<br/><br/>
                {this.state.txt.about.oraspar2}<br/><br/>
                {this.state.txt.about.oraspar3}</p>
            </Col>      
            <Col>
                <h3>{this.state.txt.gettoknow.title}</h3>
                <p className="test">
                    {this.state.txt.gettoknow.p1}<br/>
                    <a href="http://tiko.blogs.tamk.fi/2020/03/25/pelimessut-2020-esituotantovaihe-sprintti-0/">
                        http://tiko.blogs.tamk.fi/2020/03/25/pelimessut-2020-esituotantovaihe-sprintti-0/
                    </a><br/><br/>

                    {this.state.txt.gettoknow.p2}<br/>
                    <a href="http://tiko.blogs.tamk.fi/2020/04/06/peli-ideoiden-jatkojalostus-sprintti-1/">
                        http://tiko.blogs.tamk.fi/2020/04/06/peli-ideoiden-jatkojalostus-sprintti-1/    
                    </a>
                    <br/><br/>

                    {this.state.txt.gettoknow.p3}<br/>
                    <a href="http://tiko.blogs.tamk.fi/2020/04/14/jotain-nakyvaa-peleista-sprintti-2/">
                        http://tiko.blogs.tamk.fi/2020/04/14/jotain-nakyvaa-peleista-sprintti-2/
                    </a>
                    <br/><br/>
                    
                    {this.state.txt.gettoknow.p4}<br/>
                    <a href="http://tiko.blogs.tamk.fi/2020/04/20/etana-tyoskentely-alkaa-sprintti-3/">
                        http://tiko.blogs.tamk.fi/2020/04/20/etana-tyoskentely-alkaa-sprintti-3/
                    </a>
                    <br/><br/>

                    {this.state.txt.gettoknow.p5}<br/>
                    <a href="http://tiko.blogs.tamk.fi/2020/04/27/toimivat-versiot-peleista-sprintti-4/">
                        http://tiko.blogs.tamk.fi/2020/04/27/toimivat-versiot-peleista-sprintti-4/
                    </a>
                    <br/><br/>

                    {this.state.txt.gettoknow.p6}<br/>
                    <img height="20px" alt='Instagram' src={insta} />
                    <a href="https://www.instagram.com/pelimessut/">
                        https://www.instagram.com/pelimessut/
                    </a>
                    <br/><br/>

                    {this.state.txt.gettoknow.p7}<br/>
                    <img height="20px" alt='Facebook' src={fb} />
                    <a href="https://www.facebook.com/pelimessut">
                        https://www.facebook.com/pelimessut
                    </a>
                </p>
            </Col>      
            <Col>
                <h3>{this.state.txt.games.defaultTitle}</h3>
                <p>{this.state.txt.games.defaultText}</p>
            </Col>
        </Row>
    </Container>
    
    
    <a href="/">
        <button>
          {this.state.txt.about.buttonText}
        </button>
    </a>
</div>
        )
    }
}

export default LandingPage