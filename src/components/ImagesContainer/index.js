import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'

import ImageComponent from '../ImageComponent'

class ImagesContainer extends React.Component{

    render(){
        return(
            <Container>
                <Row>
                    {
                        this.props.images.map((image) => {
                            return (
                                <Col sm="3">
                                    <ImageComponent
                                        image={image}
                                        key={image.id}
                                        id={image.id}
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        )
    }
}

export default ImagesContainer
