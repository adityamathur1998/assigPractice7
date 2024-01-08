import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'

import ThemeAndVideoContext from './context/ThemeAndVideoContext'

import Login from './components/Login'
import Home from './components/Home'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    activeTab: 'Home',
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  render() {
    const {isDarkTheme, activeTab} = this.state
    return (
      <ThemeAndVideoContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          activeTab,
          changeTab: this.changeTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}

export default App
