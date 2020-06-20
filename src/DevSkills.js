import React from 'react';

import Skill from './Skill';
import Skills from "./Skills";

import clogo from './assets/C.png';
import nodelogo from './assets/nodejs-logo.svg';
import phplogo from './assets/php-logo.svg';
import pythonlogo from './assets/python.png';

import './DevSkills.scss';

export default function DevSkills()
{
    return (
        <Skills id="devskills" heading="Software Engineering">
            <Skill img={phplogo} title="PHP" tag="PHP 7+ with various MVC frameworks" stars="5" />
            <Skill img={pythonlogo} title="Python" tag="Python 3.7 including asyncio" stars="5" />
            <Skill img={nodelogo} title="Nodejs" tag="Nodejs 12+ with async/await promises" stars="4" />
            <Skill img={clogo} title="C" tag='*(char **)&"C, valgrind, pthreads";' stars="3" />
        </Skills>
    );
}