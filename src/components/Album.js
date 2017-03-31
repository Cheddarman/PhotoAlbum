import React from 'react'
import Albums from '.assets/Pictures.json'
import { Link } from 'react-router-dom'

export default React.createClass({
  getInitialState() {
    return {

    }
  }


  render() {
    return(
    	<div>
    		<aside>
    			<nav>
    				<ul>
    					<Link to="">
    					<li>{Albums.gallery.name}</li>
    					</Link>
    				</ul>
    			</nav>
    		</aside>
    		<main>
        {Albums.photos.map(image=>(
          <Link key={image.id} to={'/Album/' + image.id}>
          <div className='thumbnail'>
            <img src={image.url} alt={image.name} />
            
          </div>
          </Link>
          ))}
    		</main>
    	</div>
    )
  }
})