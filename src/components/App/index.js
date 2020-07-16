import React from 'react'

import UsersList from '../UsersList'
import ImagesSearch from '../ImagesSearch'
import { Container } from 'react-bootstrap'
import {BrowserRouter, Route, Link} from 'react-router-dom'

class App extends React.Component{
    render(){
        return(
            <Container>
                <a href="usersList">User</a>
                <BrowserRouter>
                    <Link to="/">Images Search</Link>
                    <Link to="/usersList">Users List</Link>
                    <Link to="http://www.google.com">Google</Link>
                    <Route path="/" exact component={ImagesSearch}></Route>
                    <Route path="/usersList" component={UsersList}></Route>
                </BrowserRouter>
            </Container>
        )
    }
}

export default App