import React from 'react'
import Albums from '../assets/Pictures.json'
import { Link } from 'react-router-dom'

export default React.createClass({
  getInitialState() {
    return {

    }
  },
  handleClick() {
    return {

    }
  },

  render() {
    return(
    	<div>
    		<aside>
    			<nav>
    				<ul>
            {Albums.photos.map(image=>(
    					<Link to="">
    					<li onClick={this.handleClick}>{Albums.gallery.name}</li>
    					</Link>
              ))}
    				</ul>
    			</nav>
    		</aside>
    		<main className='mainAlbums'>
        {Albums.photos.map(image=>(
          <Link key={image.id} to={'/Photo/' + image.id}>
          <div className='thumbBlock'>
            <img className='thumbnail' src={image.url} alt={image.name} />
            
          </div>
          </Link>
          ))}
    		</main>
    	</div>
    )
  }
})