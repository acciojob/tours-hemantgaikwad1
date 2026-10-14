import React,{useState} from "react";

export default function Tour({tour,removeTour}){
    const [readmore,setReadMore]=useState(false);
    const isLongDescription = tour.info.length > 201;
    const displayedInfo =
      readmore || !isLongDescription
        ? tour.info
        : `${tour.info.slice(0, 201)}...`;
    return (
        <article className="tour">
            <img className="tour-image" src={tour.image} alt={tour.name} />
            <div className="tour-details">
                <div className="tour-heading">
                    <h2>{tour.name}</h2>
                    <p className="tour-price">${tour.price}</p>
                </div>
                <p className="tour-description">{displayedInfo}<button onClick={()=>setReadMore(prev=>!prev)}>{readmore?"See Less":"Read More..."}</button></p>
            </div>
            <button onClick={()=>removeTour(tour.id)} >Remove</button>
        </article>
    );
}