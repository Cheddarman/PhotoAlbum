import React from 'react'
import Albums from '../assets/Pictures.json'

export default React.createClass({
  render() {
    return(
    	<div>
      <img src={Albums.photos.url} alt={Albums.photos.name} />
    	</div>
    )
  }
})