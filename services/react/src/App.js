import React, { Component, createContext } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
// import Home from './components/home'
import Header from './components/header'
import './App.css'
import axios from 'axios'
import Home from './components/home'
import Footer from './components/footer'

export const TheContext = createContext({
  user: {},
  logout: () => {},
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount () {
    axios.get('/api/users')
    .then((response) => {
      console.log(response.data)
      this.setState({ users: response.data })
    })
    .catch(err => console.log(err))
  }
  
  render() {
    return (
      <TheContext.Provider value={this.state}>
        <Router>
          <Header />
          <Route
            path='/'
            exact
            component={Home} 
          />
          <Footer />
        </Router>
      </TheContext.Provider>
    )
  }
}

export default App
