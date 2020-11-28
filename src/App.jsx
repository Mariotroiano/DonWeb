import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainPage from './pages/MainPage'
import CartPage from './pages/CartPage'


const App = () => {
    
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                     <MainPage/>
                </Route>

                <Route path="/cart">
                    <CartPage />
                </Route>      
                
                                                                        
            </Switch>
        </Router>
    )
}

export default App