import React, { Component } from 'react'

export class DrawGame extends Component {
    constructor(props) {
        super(props)
        this.title = props.gameObj.gameName
        this.description = props.gameObj.description
        this.url = props.gameObj.url
        this.mouseEnter = this.mouseEnter.bind(this)
        this.mouseLeave = this.mouseLeave.bind(this)
        this.notHovered = this.setStyles(props.gameObj.background, false)
        this.hovered = this.setStyles(props.gameObj.background, true)
        this.state = { style: this.notHovered, hideInfo: true,
            category: props.gameObj.category, filter: props.filter }
    } 

    static getDerivedStateFromProps (props, state) {
        if (props.filter !== state.filter) {
            return { filter: props.filter}
        } else {
            return null
        }
    }


    setStyles(backgroundUrl, flag) {
        let scale, zalign, size;

        if (this.props.windowWidth < 926) {
            size = '78px'
        } else {
            size = '125px'
        }
        
        if (!flag) {
            scale = 'scale(1.0)'
            zalign = '0'
        } else {
            scale = 'scale(1.75)'
            zalign = '5'
        }

        let style = { 
            backgroundImage: 'url(' + backgroundUrl + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: size + ' ' + size,

            transform: scale,
            zIndex: zalign,
            width: size,
            height: size,
            position: 'relative',
            display: 'flex',
            margin: '-10px 0.2em',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            WebkitClipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',

            lineHeight: size,
            marginTop: '1px'
        }
        return style
    }

    mouseEnter() {
        this.setState({ style: this.hovered, hideInfo: false})
        this.props.showInfo(this.props.gameObj)
    }

    mouseLeave() {
        this.setState({ style: this.notHovered, hideInfo: true })
    }
    handleChange = e => this.setState({ test: e }, () => {
        if (this.props.onChange) {
          this.props.onChange(this.state);
        }
      })

    render() {
        return (
            <div>
                <div className={this.state.filter ? '' : 'hidden'}>
                    &nbsp;
                </div>
                <div className={this.state.filter ? 'hidden' : ''}>
                    <a href={this.url}>
                        <div style={this.state.style} 
                            onMouseEnter={this.mouseEnter} 
                            onMouseLeave={this.mouseLeave}
                            onChange={this.handleChange}
                            onClick={() => this.setState({hideInfo: false})}>
                        </div>
                    </a>
                </div>
            </div>
            
        )
    }
}