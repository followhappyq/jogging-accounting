import React from "react"
import { Route, Redirect, Switch } from "react-router-dom"
import { useSelector } from "react-redux"

import Header from "./containers/HeaderContainer"
import SignIn from "./pages/SignInPage"
import Jogs from "./pages/JogsPage"
import Info from "./pages/InfoPage"
import NotFound from "./pages/NotFound"

import "./style.scss"

const App = () => {
  const isAuth = useSelector(({ login }) => login.isAuth)

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path={["/signin"]} component={SignIn} />
        <Route exact path={["/info"]} render={() => (isAuth ? <Info /> : <Redirect to="/signin" />)} />
        <Route exact path="/jogs" render={() => (isAuth ? <Jogs /> : <Redirect to="/signin" />)} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
