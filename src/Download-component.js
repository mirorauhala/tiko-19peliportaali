import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import './css/download.css'
import GameData from './GameData'
import { Table } from 'react-bootstrap'
import { GameInfo } from './GameInfo.component'
import googleLogo from './img/googleplay.png'


export class Download extends Component {
    constructor(props) {
        super(props)
        this.state = { txt: props.txt, lang: props.lang }
    }
    static getDerivedStateFromProps(props, state) {
        if (props.txt !== state.txt) {
            return { txt: props.txt, lang: props.lang }
        } else {
            return null
        }
    }
    render() {
        let gameDownloadList = Object.keys(GameData).map(game =>
                <tr key={GameData[game].groupid}>
                    <td>
                        <GameInfo gameObj={GameData[game]}  txt={this.state.txt} lang={this.state.lang} />
                    </td>
                    <td>
                        <a href={GameData[game].downloadGoogleUrl}>
                            <img className="downloadLogo" alt={this.state.txt.gameinfo.tableGoogle} src={googleLogo} />
                        </a>
                    </td>
                </tr>
            )
        return(
        <Container fluid className="download">
            <h1>{this.state.txt.download.pageTitle}</h1>
            <Table striped bordered hover className="table">
                <thead>
                    <tr>
                        <th width="75%">{this.state.txt.gameinfo.tableTitle2}</th>
                        <th width="25%">{this.state.txt.gameinfo.tableTitle3}</th>
                    </tr>
                </thead>
                <tbody>
                    {gameDownloadList}
                </tbody>
            </Table>
        </Container>
        )
    }
}