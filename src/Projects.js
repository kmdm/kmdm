import React from 'react';

import Portfolio from "./Portfolio";
import PortfolioItem from './PortfolioItem';

import './Projects.scss';


import remote from './assets/remote-access.jpg';
import cache from './assets/cache.jpg';
import packaging from './assets/packaging.jpg';
import recursive from './assets/recursive.jpg';

export default function Projects()
{
    return (
        <Portfolio id="projects" heading="Recent Projects">
            <PortfolioItem title="Secure remote access solution" img={remote}>
                Architected a remote access solution using docker, nginx, squid and
                oauth2-proxy composed in docker-compose to allow credentials to be
                checked in nginx before passing the traffic to the target service.
            </PortfolioItem>
            <PortfolioItem title="Hierarchical replicated cache" img={cache}>
                Designed and implemented a distributed global cache where data is collected
                at the local sites and pushed up to a central main server and replicated
                down to other sites across the company.
            </PortfolioItem>
            <PortfolioItem title="Automated Debian packaging" img={packaging}>
                Created a service which receives push notifications from GitLab,
                merges upstream changes into local branches, resolves common merge conflicts
                and commits the changes back triggering our CI/CD pipeline to push the
                newly created package to our Debian package repository.
            </PortfolioItem>
            <PortfolioItem title="kmdm.uk" img={recursive}>
                Created this straightforward React website to quickly get familiar with
                React and create a recursive project portfolio item. It's a very basic
                site that simply abstracts the underlying HTML template with some custom
                styling.
            </PortfolioItem>
        </Portfolio>
    );
}