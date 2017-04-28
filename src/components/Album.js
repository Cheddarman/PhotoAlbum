import React from 'react'
import Albums from '../assets/Pictures.json'
import { Link } from 'react-router-dom'
 
class SingleAlbum extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: Albums.gallery.filter(album=>{
        return Number(album.id) === this.props.match.params.albumID
      })[0].name,
      photos: Albums.photos.filter(photo=>{
        return Number(photo.albumid) === this.props.match.params.albumID
      })
    }
  }

  render() {
    console.log(this.state)
    return(
       <div>
        <h1>{this.state.name}</h1>
        <div className='grid'>
          {this.state.photos.map(photo=>(
            <Link key={photo.id} to={'/Album/' + photo.id}>
              <div className='galleryBlock'>
                <img src={photo.url} alt={photo.id} />
                <p>{photo.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }
}

export default SingleAlbum




// <div>
//         <aside>
//           <h1>{this.state.name}</h1>
//           <nav>
//             <ul>
//             {this.state.albums.map(pic=>(
//               <Link key={gallery.id} to={'/Album/' + gallery.id}>
//               <li onClick={pic.handleClick}>{pic.state.gallery.photos.name}</li>
//               </Link>
//               ))}
//             </ul>
//           </nav>
//         </aside>
//         <main className='mainAlbums'>
//         {this.props.match.params.albumId.photos.map(image=>(
//           <Link key={image.id} to={'/Photo/' + image.id}>
//           <div className='thumbBlock'>
//             <img className='thumbnail' src={image.url} alt={image.name} />
//           </div>
//           </Link>
//           ))}
//         </main>
//       </div>