import React from 'react'
import MyAlbums from './MyAlbums'
import Album from './Album'
import Photos from './Photo'
import Albums from '../assets/Pictures.json'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../assets/styles/App.css'

console.log(Albums)

export default React.createClass({
  render() {
    return(
      <Router>
        <div>
         <Route exact={true} path="/" component={MyAlbums}/>
         <Route path="/Album/:albumID" component={Album}/>
         <Route path="/Photo/" component={Photos}/>
        </div>
      </Router>
    )
  }
})
