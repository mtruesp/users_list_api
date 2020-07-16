import React from 'react'
import {Container, Col, Row, Image} from 'react-bootstrap'

class ImageComponent extends React.Component{
    constructor(){
        super()
        this.imageRef = React.createRef()
    }

    componentDidMount(){

        this.imageRef.current.addEventListener('mouseover', 
            (e) => {
                this.imageRef.current.style.opacity = '0.5'
            }
        )

        this.imageRef.current.addEventListener('mouseout', 
            (e) => {
                this.imageRef.current.style.opacity = '1'
            }
        )
    }

    render(){
        return(
            <Container>
                <Image 
                    id={this.props.image.id}
                    src={this.props.image.urls.thumb}
                    thumbnail 
                    ref={this.imageRef}
                />
                {
                    this.props.image.alt_description
                }
            </Container>
        )
    }
}

export default ImageComponent
