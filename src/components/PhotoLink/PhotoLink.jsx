import { Link } from "react-router-dom";
import styles from './photolink.module.css'
function PhotoLink({ photoInfo })
{
  console.log(photoInfo);
  return (
    <>              
      <Link to={`/photos/${photoInfo.id}`} >{photoInfo.title}</Link>
      <p>------------------------------</p>  
    </>
  )
}

export default PhotoLink