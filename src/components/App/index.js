import React from 'react'

import UsersList from '../UsersList'
import ImagesSearch from '../ImagesSearch'
import { Container } from 'react-bootstrap'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import ImageComponent from '../ImageComponent'

class App extends React.Component{
    render(){
        return(
            <Container>
                <a href="usersList">User</a>
                <BrowserRouter>
                    <Link to="/">
                        <button>Images Search</button>
                    </Link>
                    <Link to="/usersList">Users List</Link>
                    <Link to="http://www.google.com">Google</Link>
                    <Route path="/" exact component={() => <ImagesSearch saludo="Hola"></ImagesSearch>}></Route>
                    <Route path="/usersList" component={UsersList}></Route>
                </BrowserRouter>
            </Container>
        )
    }
}

export default App