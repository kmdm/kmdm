import React from 'react';

import cv from './assets/CV.pdf';

export default function Actions()
{
    return (
        <section id="actions" className="content-section bg-primary text-white">
            <div className="container text-center">
                <h2 className="mb-4">Find out more</h2>
                <a href={cv} className="btn btn-xl btn-light mr-4">Download my CV</a>
                <a href="https://www.linkedin.com/in/kennymillington" className="btn btn-xl btn-dark">Check out my LinkedIn</a>
            </div>
        </section>
    );
}