import React from 'react';

import Skill from './Skill';
import Skills from "./Skills";

import clogo from './C.png';
import pythonlogo from './python.png';

import './DevSkills.scss';

export default function DevSkills()
{
    return (
        <Skills
            id="devskills"
            heading="Software Engineering"
        >
            <Skill
                img="https://www.php.net/images/logos/php-logo.svg"
                title="PHP"
                tag="PHP 7+ with various MVC frameworks"
                stars="5"
            />
            <Skill
                img={pythonlogo}
                title="Python"
                tag="Python 3.7 including asyncio"
                stars="5"
            />
            <Skill
                img="https://nodejs.org/static/images/logo.svg"
                title="Nodejs"
                tag="Nodejs 12+ with async/await promises"
                stars="4"
            />
            <Skill
                img={clogo}
                title="C"
                tag='*(char **)&"C, valgrind, pthreads";'
                stars="3"
            />
        </Skills>
    );
}