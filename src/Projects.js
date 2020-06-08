import React from 'react';

import port1 from 'startbootstrap-stylish-portfolio/img/portfolio-1.jpg';
import port2 from 'startbootstrap-stylish-portfolio/img/portfolio-2.jpg';
import port3 from 'startbootstrap-stylish-portfolio/img/portfolio-3.jpg';
import port4 from 'startbootstrap-stylish-portfolio/img/portfolio-4.jpg';

export default function Projects()
{
    return (
        <section id="projects" className="content-section">
            <div className="container">
                <div className="content-section-heading text-center">
                    <h3 className="text-secondary mb-0">
                        Portfolio
                    </h3>
                    <h2 className="mb-5">
                        Recent Projects
                    </h2>
                </div>
                <div className="row no-gutters">
                    <div className="col-lg-6">
                        <a className="portfolio-item" href="#">
                            <span className="caption">
                                <span className="caption-content">
                                    <h2>Remote access solution</h2>
                                    <p className="mb-0">
                                        A remote access solution using docker, nginx, squid and oauth2-proxy composed in docker-compose to allow credentials to be checked in nginx before passing the traffic to the target service.
                                    </p>
                                </span>
                            </span>
                            <img className="img-fluid" src={port1} />
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a className="portfolio-item" href="#">
                            <span className="caption">
                                <span className="caption-content">
                                    <h2>Remote access solution</h2>
                                    <p className="mb-0">
                                        A remote access solution using docker, nginx, squid and oauth2-proxy composed in docker-compose to allow credentials to be checked in nginx before passing the traffic to the target service.
                                    </p>
                                </span>
                            </span>
                            <img className="img-fluid" src={port2}/>
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a className="portfolio-item" href="#">
                            <span className="caption">
                                <span className="caption-content">
                                    <h2>Remote access solution</h2>
                                    <p className="mb-0">
                                        A remote access solution using docker, nginx, squid and oauth2-proxy composed in docker-compose to allow credentials to be checked in nginx before passing the traffic to the target service.
                                    </p>
                                </span>
                            </span>
                            <img className="img-fluid" src={port3}/>
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a className="portfolio-item" href="#">
                            <span className="caption">
                                <span className="caption-content">
                                    <h2>Remote access solution</h2>
                                    <p className="mb-0">
                                        A remote access solution using docker, nginx, squid and oauth2-proxy composed in docker-compose to allow credentials to be checked in nginx before passing the traffic to the target service.
                                    </p>
                                </span>
                            </span>
                            <img className="img-fluid" src={port4}/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}