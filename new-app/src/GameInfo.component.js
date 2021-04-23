import React, { Component } from 'react'
import './css/games.css'
import badge from './img/badge.png'

export class GameInfo extends Component {
    constructor(props) {
        super(props)
        this.title = props.gameObj.gameName
        this.url = props.gameObj.url
        this.winner = props.gameObj.winner
        this.groupid = props.gameObj.groupid
        this.state = { hideDesc: true, txt: props.txt, category: props.gameObj.category,
            lang: props.lang, desc: props.gameObj.description }
    }
    static getDerivedStateFromProps(props, state) {
        if (props.txt !== state.txt) {
            if (props.lang === 'en') {
                return { txt: props.txt, desc: props.gameObj.description_en,
                    category: props.gameObj.category_en }
            } else if (props.lang === 'fi') {
                return { txt: props.txt, desc: props.gameObj.description,
                    category: props.gameObj.category }
            }
        } else {
            return null
        }
    }
    render() {
        let star = '';
        if (this.winner) {
            star = <div><img alt='Prize winner' src={badge} style={{
                width: '50px', 
            }} /><br/></div>
        }
        return (
            <div className="gameInfoComponent">
                {star} <img className="gameTableImg" alt="" 
                        src={`${process.env.PUBLIC_URL}logos/` + this.groupid + `_pelilogo.png`} /> 
                 
                <h4 className='infoTitle'> {this.title} </h4>

                <button onClick={() => this.setState({hideDesc:true})} 
                    className={this.state.hideDesc ? 'hidden' : 'infoButton'}> {this.state.txt.gameinfo.hideInfo} 
                </button>
                
                <span className={this.state.hideDesc ? 'hidden' : 'category'}>
                    {this.state.txt.gameinfo.category} {this.state.category} 
                </span>

                <button onClick={() => this.setState({hideDesc:false})}
                    className={this.state.hideDesc ? 'infoButton' : 'hidden'}> {this.state.txt.gameinfo.showInfo} 
                </button>

                <p className={this.state.hideDesc ? 'hidden' : 'displayGameText'}>
                    {this.state.desc} 
                </p>

                <button onClick={() => window.location.href=this.url}
                    className={this.state.hideDesc ? 'hidden' : 'displayButton'}>
                    {this.state.txt.gameinfo.visit} 
                </button>
            </div>
        )
    }
}