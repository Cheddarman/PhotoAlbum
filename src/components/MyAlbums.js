import React from 'react'
import Albums from '../assets/Pictures.json'
import { Link } from 'react-router-dom'

class MyAlbums extends React.Component {
   constructor() {
    super()
    this.state = {
      albums: Albums.gallery
    }
  }


  render() {
    return(
    	<div>
    		<h1>My Albums</h1>
    		<div className='mainBit'>
    			{this.state.albums.map(gallery=>(
      			<Link key={gallery.id} to={'/Album/' + gallery.id}>
        			<div className='galleryBlock'>
        				<img src={gallery.coverphoto} alt={gallery.name} />
        				<p>{gallery.name}</p>
        			</div>
      			</Link>
    			))}
    		</div>
    	</div>
    )
  }
}
export default MyAlbums

					