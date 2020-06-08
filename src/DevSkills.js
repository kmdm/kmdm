import React from 'react';

import Stars from './Stars';

import clogo from './C.png';
import pythonlogo from './python.png';

export default function DevSkills()
{
    return (
        <section id="devskills" className=" skills content-section bg-primary text-white">
            <div className="container text-center">
                <div className="content-section-heading">
                    <h3 className="text-secondary mb-0">
                        Technical Skills
                    </h3>
                    <h2 className="mb-5">Software Engineering</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span className="service-icon php rounded-circle mx-auto mb-3">
                            <img src="https://www.php.net/images/logos/php-logo.svg" />
                        </span>
                        <h4><strong>PHP</strong></h4>
                        <p className="text-faded mb-0">
                            PHP 7+ with various MVC frameworks
                        </p>
                        <Stars rating="5" />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span className="service-icon rounded-circle mx-auto mb-3">
                            <img src={pythonlogo} />
                        </span>
                        <h4><strong>Python</strong></h4>
                        <p className="text-faded mb-0">
                            Python 3.7+ including asyncio
                        </p>
                        <Stars rating="5" />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                        <span className="service-icon node rounded-circle mx-auto mb-3">
                            <img src="https://nodejs.org/static/images/logo.svg" />
                        </span>
                        <h4><strong>Nodejs</strong></h4>
                        <p className="text-faded mb-0">
                            Nodejs 12+ with async/await promises
                        </p>
                        <Stars rating="4" />
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <span className="service-icon rounded-circle mx-auto mb-3">
                            <img src={clogo} />
                        </span>
                        <h4><strong>C</strong></h4>
                        <p className="text-faded mb-0">
                            *(char **)&"C, valgrind, pthreads";
                        </p>
                        <Stars rating="3" />
                    </div>
                </div>
            </div>
        </section>
    );
}