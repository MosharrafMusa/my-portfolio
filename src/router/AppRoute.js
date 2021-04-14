import React from 'react'
import {Switch, Route} from 'react-router-dom'
   

const AppRoute = () => {
    return (
        <>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/about" component={AboutPage}/>
            <Route exact path="/portfolio" component={PortfolioPage}/>
            <Route exact path="/contact" component={ContactPage}/>

           
        </Switch>
            
        </>
    )
}

export default AppRoute
