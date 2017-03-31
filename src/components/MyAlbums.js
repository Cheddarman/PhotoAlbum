import React from 'react'
import Albums from '../assets/Pictures.json'
import { Link } from 'react-router-dom'


export default React.createClass({
  render() {
    return(
    	<div>
    		<h1>My Albums</h1>
    		<div className='mainBit'>
    			{Albums.gallery.map(gallery=>(
    			<Link key={gallery.id} to={'/Album/' + gallery.id}>
    			<div className='galleryBlock'>
    				<img src={gallery.coverphoto} alt={galley.id} />
    				<p>{gallery.name}</p>
    			</div>
    			</Link>
    			))}
    		</div>
    	</div>
    )
  }
})

					