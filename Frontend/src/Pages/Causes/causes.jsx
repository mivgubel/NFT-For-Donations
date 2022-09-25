//React
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

//Style
import s from './causes.module.css';

//constants
import { CAUSES } from '../../Utils/Constants/Routes';

// Redux actions
import { getAllVisibleCauses } from '../../redux/actions';

export default function Causas() {
    //Dispatch
    const dispatch = useDispatch();
    useEffect(()=> {
      dispatch(getAllVisibleCauses());
    }, [ dispatch ]);
    const causes = useSelector(state => state.allVisibleCauses);

  return (
    <div>
      {
        causes.map((cause, index) => {
          const {address, image, name} = cause;
          const description = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec vulputate quis lorem sed tristique. Vestibulum hendrerit vitae mi et tristique. Aliquam erat volutpat. 
                                Nunc sollicitudin tincidunt ante in tincidunt. Vivamus eget ligula pellentesque lacus tristique sollicitudin. 
                                In aliquam risus ac justo porta, at luctus mauris vestibulum. Duis condimentum mi vitae neque cursus placerat. 
                                Nam nibh magna, tristique at est ac, lacinia volutpat dui. In sed enim eu nibh porttitor tincidunt vel ut libero. 
                                Donec quis felis eu enim pellentesque gravida in et ligula. Morbi porta, velit eu ultrices porta, lacus augue fringilla 
                                felis, id gravida risus leo vel urna. Proin dictum, augue quis laoreet mollis, elit mi viverra purus, 
                                ac volutpat leo nisi ut mauris. Pellentesque finibus turpis non odio tincidunt, vel interdum eros posuere. 
                                Fusce facilisis auctor ipsum, vel mattis nunc pulvinar eget. Morbi odio diam, vehicula vitae nisl eget, fermentum blandit leo. Phasellus pharetra libero a laoreet volutpat.`
                                                                    //trees of hope                                     Education for all                                 Matic for Grandparents
        const imagesContracts = ["0x51710b84b3be56201b87bdf052c07ee9d334ddce", "0x2ead43c1d40ee4f642e9a558e781fd88e39b3209", "0x8c34e57d808a1c8a99a1a7fcc4d1ca6557c5e384"];
        const descriptions = [`Solidarity's first collection of NFTs is called "Trees of hope".
        Trees are major players in the life of the planet and nature, they symbolize growth and development.
        These oil paintings are drawn from the perspective of children, who imagine and capture love and hope in trees, which will endure in time in a better world.`, `We want children to be able to access school, have a decent education, school creation programs.
        One of the goals is to improve teaching and bring education to rural communities.  The actions undertaken are focused on the rights of boys and girls to a decent education, including education programs with projects focused on the creation of schools, allocation of scholarships, organization of volunteers.`, `Dignified aging.  Help elderly people in a state of poverty and abandonment.
        Programs that serve elderly people in a state of abandonment.  The services include the delivery of a weekly pantry, support in medical devices and home repair, as well as economic scholarships.`];
          const {container, titleAndImage, imageStyle, descriptionStyle, info} = s;
          return (
            <div key={address} className={container}>
              <div className={titleAndImage}>
                <p className="title">{name}</p>
                <img className={imageStyle} src={`../../../causa${index + 1}.png`} alt={name}/>
              </div>
              <div className={descriptionStyle}>
                <p >{descriptions[index]?.slice(0,300) + '...'}</p>
                <NavLink className={info} to={`${CAUSES}/${address}`}>More Info</NavLink>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}