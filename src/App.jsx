import React from "react"
import { Route, Redirect, Switch } from "react-router-dom"

import Header from "./components/HeaderComponent"
import SignIn from "./pages/SignInPage"
import Jogs from "./pages/JogsPage"
import Info from "./pages/InfoPage"

import "./style.scss"

const App = () => {
  const isAuth = true
  return (
    <div className="app">
      <Header isAuth={isAuth} />
      <Switch>
        <Route exact path={["/signin"]} component={SignIn} />
        <Route exact path={["/info"]} component={Info} />
        <Route path="/" render={() => (isAuth ? <Jogs /> : <Redirect to="/signin" />)} />
      </Switch>
    </div>
  )
}

export default App
