import React from 'react'
import MyAlbums from './MyAlbums'
import Album from './Album'
import Photos from './Photo'
import Albums from '../assets/Pictures.json'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../assets/styles/App.css'

console.log(Albums)
// console.log(image)
export default React.createClass({
  render() {
    return(
      <Router>
        <div>
         <Route exact={true} path="/" component={MyAlbums}/>
         <Route path="/Album/:albumID" component={Album}/>
         <Route path="/Photo/:photoID" component={Photos}/>
        </div>
      </Router>
    )
  }
})
