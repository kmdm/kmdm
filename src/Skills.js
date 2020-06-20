import React from 'react';

import './Skills.scss';

export default function Skills(props)
{
    let text = ' text-white',
        heading = 'secondary'
    ;

    if ('secondary' === props.background) {
        text = '';
        heading = 'primary';
    }

    return (
        <section
            id={props.id}
            className={"skills content-section bg-" + props.background + text}
        >
            <div className="container text-center">
                <div className="content-section-heading">
                    <h3 className={"mb-0 text-"+heading}>
                        {props.title}
                    </h3>
                    <h2 className="mb-5">{props.heading}</h2>
                </div>
                <div className="row">
                    {props.children}
                </div>
            </div>
        </section>
    );
}

Skills.defaultProps = {
    background: 'primary',
    title: 'Technical Skills'
}