import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'

import unsplash from '../../Api/unsplash'
import InputSearch from '../InputSearch'
import ImagesContainer from '../ImagesContainer'

class ImagesSearch extends React.Component{
    constructor(){
        super()
        this.state = {
            searchText: '',
            images: []
        }
        this.onChangeSearch = this.onChangeSearch.bind(this)
        this.search = this.search.bind(this)
    }

    onChangeSearch(e){
        e.preventDefault()
        this.setState({searchText: e.target.value})
    }

    async search(){
        const response = await unsplash.get('/search/photos', {
            params:{
                query: this.state.searchText,
                orientation: 'portrait',
                per_page: 20
            }
        })
        this.setState({images: response.data.results})
        console.log('response', response)
    }

    render(){
        return(
            <Container>
                {this.props.saludo}
                <Row>
                    <Col>
                        <InputSearch
                            onChangeSearch={this.onChangeSearch}
                            search={this.search}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ImagesContainer
                            images={this.state.images}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ImagesSearch
