import React from 'react';

import Stars from './Stars';

export default function OpSkills()
{
    return (
        <section id="opskills" className="skills content-section bg-secondary">
            <div className="container text-center">
                <div className="content-section-heading">
                    <h3 className="text-primary mb-0">
                        Technical Skills
                    </h3>
                    <h2 className="mb-5">DevOps</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span className="service-icon rounded-circle mx-auto mb-3">
                            <img src="https://www.debian.org/Pics/openlogo-50.png" />
                        </span>
                        <h4><strong>Debian</strong></h4>
                        <p className="text-muted mb-0">
                            Administration &amp; maintenance
                        </p>
                        <Stars rating="5" />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span className="service-icon rounded-circle mx-auto mb-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/879b618f43e80e82627164cb764f0b095b5b266c/d2c97/images/logos/puppet-logo-black.svg" />
                        </span>
                        <h4><strong>Puppet</strong></h4>
                        <p className="text-muted mb-0">
                            Centralised configuration
                        </p>
                        <Stars rating="3" />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                        <span className="service-icon rounded-circle mx-auto mb-3">
                            <img src="https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png" />
                        </span>
                        <h4><strong>Docker</strong></h4>
                        <p className="text-muted mb-0">
                            Creating &amp; composing containers
                        </p>
                        <Stars rating="5" />
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <span className="service-icon rounded-circle mx-auto mb-3">
                            <img src="https://raw.githubusercontent.com/kubernetes/kubernetes/master/logo/logo.svg" />
                        </span>
                        <h4><strong>Kubernetes</strong></h4>
                        <p className="text-muted mb-0">
                            Enterprise grade container orchestration
                        </p>
                        <Stars rating="3" />
                    </div>
                </div>
            </div>
        </section>
    );
}