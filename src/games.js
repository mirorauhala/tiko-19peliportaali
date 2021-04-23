import React, { Component } from 'react'
import './fonts/zig.ttf'
import './css/games.css'
import { DrawGame } from './DrawGame'
import GameData from './GameData'
import { Table, Container, Row, Col } from 'react-bootstrap'
import { GameInfo } from './GameInfo.component'
import { FiText, EnText } from './texts'
import orasLogo from './img/oras_logo_color_rgb.png'
import badge from './img/badge.png'


console.log(GameData)

class Games extends Component {
    windowWidth;
    constructor(props) {
      super(props)
      this.windowWidth = window.innerWidth
      this.state = { txt: props.txt, lang: props.lang, 
        hideSidebar: false, gameInfo: '', 
        tiko1filter: false, tiko2filter: false, tiko3filter: false }
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
    showInfo(data) {
      let star = ''
      if (data.winner) {
        star = <img alt='Prize winner' src={badge} width="75px"/>
      }
      if (this.state.lang === 'fi' || data.groupid === undefined) {
        let url;
        if (data.groupid === undefined) {
          url = orasLogo
        } else {
          url = `${process.env.PUBLIC_URL}/logos/` + data.groupid + `_pelilogo.png`
        }
        this.setState({ gameInfo: 
          <div>
            {star}
            <img alt=""  width="80%"
              src={url} 
              />
            <h2>{data.gameName}</h2>
            <span>{data.description}</span>
          </div>
        })
      } else {
        this.setState({ gameInfo: 
          <div>
            {star}
            <img alt=""  width="80%"
              src={`${process.env.PUBLIC_URL}/logos/` + data.groupid + `_pelilogo.png`} 
              />
            <h2>{data.gameName}</h2>
            <p>{data.description_en}</p>
          </div>
        })
      }
        
    }
    componentDidMount() {
      this.showInfo({ gameName: this.state.txt.games.defaultTitle, description: this.state.txt.games.defaultText })
      if (this.windowWidth < 768 ) {
        this.setState({hideSidebar: true})
      } else {
        this.setState({hideSidebar: false})
      }
    }
    filterchange(filter) {
      if (filter === 'all') {
        this.setState({ tiko1filter: false, tiko2filter: false, tiko3filter: false })
      } else if (filter === 'primary') {
        this.setState({ tiko1filter: false, tiko2filter: true, tiko3filter: true })
      } else if (filter === 'consumption') {
        this.setState({ tiko1filter: true, tiko2filter: false, tiko3filter: true })
      } else if (filter === 'waste') {
        this.setState({ tiko1filter: true, tiko2filter: true, tiko3filter: false })
      }
    }
    getFilter() {
      return this.state.filter
    }
    render() {
      let games = Object.keys(GameData).map(game =>     
        <tr width="100%" style={{color: 'white'}} key={GameData[game].groupid} >
          <td className="gameTableTitle">
              <GameInfo gameObj={GameData[game]} txt={this.state.txt} lang={this.state.lang} />
          </td>
          
        </tr>
        
      )
      return (
          
<Container fluid className="containerPadding gameMain" id="games">
<Row>
  <Col sm={7}>
  <h2 className="title2" onMouseEnter={() => this.showInfo({ gameName: this.state.txt.games.defaultTitle, 
      description: this.state.txt.games.defaultText })} >{this.state.txt.games.pageTitle}</h2>

  <div className="filterButtons">
    <button onClick={() => this.filterchange('all')}>{this.state.txt.filterButtons.all}</button>
    <button onClick={() => this.filterchange('primary')}>{this.state.txt.filterButtons.primary}</button>
    <button onClick={() => this.filterchange('consumption')}>{this.state.txt.filterButtons.consumption}</button>
    <button onClick={() => this.filterchange('waste')}>{this.state.txt.filterButtons.waste}</button>
  </div>
  
  <section>
    <div className="row">
      <DrawGame gameObj={GameData.game19tiko1a} filter={this.state.tiko1filter} lang={this.state.lang} showInfo={this.showInfo.bind(this)} windowWidth={this.windowWidth} />
      <DrawGame gameObj={GameData.game19tiko1b} filter={this.state.tiko1filter} lang={this.state.lang} showInfo={this.showInfo.bind(this)} windowWidth={this.windowWidth} />
      <DrawGame gameObj={GameData.game19tiko1c} filter={this.state.tiko1filter} lang={this.state.lang} showInfo={this.showInfo.bind(this)} windowWidth={this.windowWidth} />
      <DrawGame gameObj={GameData.game19tiko1d} filter={this.state.tiko1filter} lang={this.state.lang} showInfo={this.showInfo.bind(this)} windowWidth={this.windowWidth} />
    </div>
    <div className="row">
      <DrawGame gameObj={GameData.game19tiko1e} filter={this.state.tiko1filter} lang={this.state.lang} showInfo={this.showInfo.bind(this)} windowWidth={this.windowWidth} />
      <DrawGame gameObj={GameData.game19tiko1f} filter={this.state.tiko1filter} lang={this.state.lang} showInfo={this.showInfo.bind(this)} windowWidth={this.windowWidth} />
      <DrawGame gameObj={GameData.game19tiko2a} filter={this.state.tiko2filter} lang={this.state.lang} showInfo={this.showInfo.bind(this)} windowWidth={this.windowWidth} />
    </div>
    <div className="row">
      <DrawGame gameObj={GameData.game19tiko2b} filter={this.state.tiko2filter} lang={this.state.lang} showInfo={this.showInfo.bind(this)} windowWidth={this.windowWidth} />
      <DrawGame gameObj={GameData.game19tiko2c} filter={this.state.tiko2filter} lang={this.state.lang} showInfo={this.showInfo.bind(this)} windowWidth={this.windowWidth} />
      <DrawGame gameObj={GameData.game19tiko2d} filter={this.state.tiko2filter} lang={this.state.lang} showInfo={this.showInfo.bind(this)} windowWidth={this.windowWidth} />
      <DrawGame gameObj={GameData.game19tiko2e} filter={this.state.tiko2filter} lang={this.state.lang} showInfo={this.showInfo.bind(this)} windowWidth={this.windowWidth} />
    </div>
    <div className="row">
      <DrawGame gameObj={GameData.game19tiko2f} filter={this.state.tiko2filter} lang={this.state.lang} showInfo={this.showInfo.bind(this)} windowWidth={this.windowWidth} />
      <DrawGame gameObj={GameData.game19tiko3a} filter={this.state.tiko3filter} lang={this.state.lang} showInfo={this.showInfo.bind(this)} windowWidth={this.windowWidth} />
      <DrawGame gameObj={GameData.game19tiko3b} filter={this.state.tiko3filter} lang={this.state.lang} showInfo={this.showInfo.bind(this)} windowWidth={this.windowWidth} />
    </div>
    <div className="row">
      <DrawGame gameObj={GameData.game19tiko3c} filter={this.state.tiko3filter} lang={this.state.lang} showInfo={this.showInfo.bind(this)} windowWidth={this.windowWidth} />
      <DrawGame gameObj={GameData.game19tiko3d} filter={this.state.tiko3filter} lang={this.state.lang} showInfo={this.showInfo.bind(this)} windowWidth={this.windowWidth} />
      <DrawGame gameObj={GameData.game19tiko3e} filter={this.state.tiko3filter} lang={this.state.lang} showInfo={this.showInfo.bind(this)} windowWidth={this.windowWidth} />
      <DrawGame gameObj={GameData.game19tiko3f} filter={this.state.tiko3filter} lang={this.state.lang} showInfo={this.showInfo.bind(this)} windowWidth={this.windowWidth} />
    </div>
  </section>
  <Table className="prizeTable">
    <thead>
      <tr>
        <th colSpan='2'>{this.state.txt.prize.title}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><img alt='' src={badge} /> {this.state.txt.prize.voteWinner}</td>
        <td><img alt='' src={`${process.env.PUBLIC_URL}/logos/` + GameData.game19tiko2a.groupid + `_pelilogo.png`} /> {GameData.game19tiko2a.gameName}</td>
      </tr>
      <tr>
        <td><img alt='' src={badge} /> {this.state.txt.prize.customerWinner}</td>
        <td><img alt='' src={`${process.env.PUBLIC_URL}/logos/` + GameData.game19tiko3c.groupid + `_pelilogo.png`} /> {GameData.game19tiko3c.gameName}</td>
      </tr>
      <tr>
        <td><img alt='' src={badge} /> {this.state.txt.prize.gameWinner}</td>
        <td><img alt='' src={`${process.env.PUBLIC_URL}/logos/` + GameData.game19tiko2b.groupid + `_pelilogo.png`} /> {GameData.game19tiko2b.gameName}</td>
      </tr>
    </tbody>
  </Table>
  <div className="vote">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSf9hJ6eSQv5xpDOrRDXRoy8D2PzPrRUEHvLctxeQdh1yMakiw/viewform">
      <button className="vote">{this.state.txt.games.voteFinished}</button>
    </a>
  </div>
  </Col>
  <Col sm={5} className={this.state.hideSidebar ? 'hidden' : 'gameInfo'} >
      <div className="gameInfoSub">{this.state.gameInfo}</div>
  </Col>
</Row>
<Row>
  <Col>
    <Table striped hover variant="dark" className={this.state.hideSidebar ? '' : 'hidden'}>
      <thead>
        <tr className="tableHeader">
          <th>{this.state.txt.games.tableTitle}</th>
        </tr>
      </thead>
      <tbody>{games}</tbody>
    </Table>
    
  </Col>
  
</Row>
</Container>
        )
    }
}

export default Games