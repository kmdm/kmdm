import React from 'react';
import Stars from "./Stars";



export default function Skill(props)
{
    return (
        <div className="skill col-lg-3 col-md-6 mb-5 mb-lg-0" data-title={props.title}>
            <span className="service-icon rounded-circle mx-auto mb-3">
                <img src={props.img} alt={props.title} />
            </span>
            <h4><strong>{props.title}</strong></h4>
            <p className="tag mb-0">
                {props.tag}
            </p>
            <Stars rating={props.stars} />
        </div>
    );
}