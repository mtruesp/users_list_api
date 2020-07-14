import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

class User extends React.Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        Name: {this.props.name}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Username: {this.props.username}
                    </Col>
                    <Col>
                        Email: {this.props.email}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Phone: {this.props.phone}
                    </Col>
                    <Col>
                        Website: {this.props.website}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default User