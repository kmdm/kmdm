import React from 'react';

export default function Map()
{
    return (
        <section id="contact" className="map">
            <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?f=q&hl=en&geocode=&q=Crawley+Town+Center&t=m&z=15&iwloc=A&output=embed"
            />
        </section>
    );
}