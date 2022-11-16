import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import List from './Components/List'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Math from './Pages/Math'
import Parent from './Pages/Parent'
import Science from './Pages/Science'




function App() {
  return (
    <>
     <List/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route  path='/about' component={About}/>
      <Route  path='/contact' component={Contact}/>
      <Route  path='/parent' component={Parent}/>
      <Route  path='/math' component={Math}/>
      <Route  path='/science' component={Science}/>
      <Route component={Error}/>
    </Switch>
    
    </>
  )
}

export default App