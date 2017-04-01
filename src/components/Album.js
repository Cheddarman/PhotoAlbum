import React from 'react'
import Albums from '../assets/Pictures.json'
import { Link } from 'react-router-dom'
 
export default React.createClass({
  handleClick() {
    return {

    }
  },
   getInitialState() {
    return {
      photos: Albums.filter(gallery=>{
        return Number(gallery.id) === Number(this.props.match.params.albumId)

      })[0]
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
    					<li onClick={this.handleClick}>{this.state.photos.gallery.name}</li>
    					</Link>
              ))}
    				</ul>
    			</nav>
    		</aside>
    		<main className='mainAlbums'>
        {this.props.match.params.albumId.photos.map(image=>(
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