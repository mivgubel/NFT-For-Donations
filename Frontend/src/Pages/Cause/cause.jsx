import { NavLink, useParams } from 'react-router-dom';
import { CAUSES_INFO } from '../../Utils/Constants/causes';
import s from './cause.module.css';
//Bootstrap
import Button from 'react-bootstrap/Button';
import { CAUSES, MINT } from '../../Utils/Constants/Routes';
export default function Cause() {
  const causes = CAUSES_INFO;
  const { id }= useParams();
  const {image, title, description, state} = causes[id - 1];
  return(   
    <div className={s.container}>
      <img src={image} alt={title}/>
      <p className="title">{title}</p>
      <p className={s.description}>{description}</p>
      <p className="title">Collection</p>
      <div className={s.imgDiv}>
        {
          causes.map( (cause, index) => {
            const {collection} = cause;
            return(<img className={s.collectionImg} key={index} src={collection[index]} alt={`Img ${index}`}/>)
          })
        }
      </div>
      <div className={s.btnContainer}>
      <NavLink className={state === "Soon" ? "hide" : ""} to={`${MINT}/${id}`}>
        <Button className="generalBtn" variant="primary">Mint Collection</Button>
      </NavLink>
      <NavLink className="nav-link" to={CAUSES}>
        <Button className="generalBtn" variant="primary">All Causes</Button>
      </NavLink>
      </div>
    </div>
  )
}