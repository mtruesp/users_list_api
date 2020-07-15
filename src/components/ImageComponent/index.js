import React from 'react'
import {Container, Col, Row, Image} from 'react-bootstrap'

class ImageComponent extends React.Component{

    render(){
        return(
            <Container>
                <Image 
                    src={this.props.url}
                    thumbnail 
                />
            </Container>
        )
    }
}

export default ImageComponent
