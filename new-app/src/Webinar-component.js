import React, { Component } from 'react'
import { Table, Container } from 'react-bootstrap'
import './css/webinar.css'

export class Webinar extends Component {
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
        let timeTable = this.state.txt.webinar
        let timeData = timeTable.map(time => 
                <tr key={time.clock}><td>{time.clock}</td><td>{time.what}</td><td>{time.who}</td></tr>
            )
        return (
            <Container fluid className="webinar">
                <h1>{this.state.txt.webinarTitles.pageTitle}</h1>
                <Table striped bordered hover className="table">
                    <thead>
                        <tr>
                            <th width="20%">{this.state.txt.webinarTitles.clock}</th>
                            <th width="40%">{this.state.txt.webinarTitles.subject}</th>
                            <th width="40%">{this.state.txt.webinarTitles.speakers}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {timeData}
                    </tbody>
                </Table>
            </Container>
        )
    }
}