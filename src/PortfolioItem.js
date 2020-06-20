import React from 'react';


export default function PortfolioItem(props)
{
    return (
        <div className="col-lg-6">
            <a className="portfolio-item" href={props.href}>
                <span className="caption">
                    <span className="caption-content">
                        <h2>{props.title}</h2>
                        <p className="mb-0">
                            {props.children}
                        </p>
                    </span>
                </span>
                <img className="img-fluid" src={props.img} alt={props.title} />
            </a>
        </div>
    );
}

PortfolioItem.defaultProps = {
    href: '#'
}