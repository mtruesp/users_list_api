import React from 'react'
import {Container, Col, Row, InputGroup, FormControl, Button} from 'react-bootstrap'
import unsplash from '../../Api/unsplash'

import './inputSearch.css'

class InputSearch extends React.Component{

    render(){
        return(
            <Container className="inputSearch">
                <Row>
                    <Col>
                        <InputGroup className="mb-3">
                            <FormControl
                                id="buscador"
                                placeholder="Imagen a buscar"
                                aria-label="Imagen a buscar"
                                aria-describedby="basic-addon2"
                                onChange={this.props.onChangeSearch}
                            />
                            <InputGroup.Append>
                                <Button 
                                    variant="outline-secondary"
                                    onClick={this.props.search}
                                >
                                    Buscar
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default InputSearch
