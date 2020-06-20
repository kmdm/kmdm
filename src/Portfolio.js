import React from 'react';


export default function Portfolio(props)
{
    return (
        <section id={props.id} className="content-section">
            <div className="container">
                <div className="content-section-heading text-center">
                    <h3 className="text-secondary mb-0">
                        {props.title}
                    </h3>
                    <h2 className="mb-5">
                        {props.heading}
                    </h2>
                </div>
                <div className="row no-gutters">
                    {props.children}
                </div>
            </div>
        </section>
    );
}

Portfolio.defaultProps = {
    id: 'portfolio',
    title: 'Portfolio'
}