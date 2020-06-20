import React from 'react';

import Portfolio from "./Portfolio";
import PortfolioItem from './PortfolioItem';

import port1 from 'startbootstrap-stylish-portfolio/img/portfolio-1.jpg';
import port2 from 'startbootstrap-stylish-portfolio/img/portfolio-2.jpg';
import port3 from 'startbootstrap-stylish-portfolio/img/portfolio-3.jpg';
import port4 from 'startbootstrap-stylish-portfolio/img/portfolio-4.jpg';

export default function Projects()
{
    return (
        <Portfolio
            id="projects"
            heading="Recent Projects"
        >
            <PortfolioItem
                title="Remote access solution"
                img={port1}
            >
                A remote access solution using docker, nginx, squid and oauth2-proxy composed in docker-compose to allow credentials to be checked in nginx before passing the traffic to the target service.
            </PortfolioItem>
            <PortfolioItem
                title="Remote access solution"
                img={port2}
            >
                A remote access solution using docker, nginx, squid and oauth2-proxy composed in docker-compose to allow credentials to be checked in nginx before passing the traffic to the target service.
            </PortfolioItem>
            <PortfolioItem
                title="Remote access solution"
                img={port3}
            >
                A remote access solution using docker, nginx, squid and oauth2-proxy composed in docker-compose to allow credentials to be checked in nginx before passing the traffic to the target service.
            </PortfolioItem>
            <PortfolioItem
                title="Remote access solution"
                img={port4}
            >
                A remote access solution using docker, nginx, squid and oauth2-proxy composed in docker-compose to allow credentials to be checked in nginx before passing the traffic to the target service.
            </PortfolioItem>
        </Portfolio>
    );
}