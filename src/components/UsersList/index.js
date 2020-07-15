import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import axios from 'axios'

import User from '../User'

class UsersList extends React.Component{
    constructor(){
        super()
        this.state = {
            users: []
        }
    }

    componentWillMount(){
        this.apiRequest()
        
    }

    async apiRequest(){
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            this.setState({users: response.data})
        }
        catch(err){
            console.log('error', err)
        }

        //Array de promesas
        // Promise.all([
        //     axios.get('https://jsonplaceholder.typicode.com/users'),
        //     axios.get('https://jsonplaceholder.typicode.com/posts')
        // ])
        // .then((response) => {
        //     console.log('reponse', response)
        // })
        // .catch((error) => {
        //     console.log('error', error)
        // })

        //Promesa
        // .then((response) => {
        //     console.log('reponse', response)
        // })
        // .catch((error) => {
        //     console.log('error', error)
        // })
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        {
                            this.state.users.map((user) => {
                                return (
                                    <User
                                        name={user.name}
                                        username={user.username}
                                        email={user.email}
                                        phone={user.phone}
                                        website={user.website}
                                        key={user.id}
                                    />
                                )   
                            })
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default UsersList