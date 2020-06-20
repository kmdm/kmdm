import React from 'react';

import Skill from './Skill';
import Skills from './Skills';

import './OpSkills.scss';

import debianlogo from './assets/debian-logo.png';
import dockerlogo from './assets/docker-logo.png';
import k8logo from './assets/k8s-logo.svg';
import puppetlogo from './assets/puppet-logo.svg';

export default function OpSkills()
{
    return (
        <Skills id="opskills" background="secondary" heading="DevOps">
            <Skill img={debianlogo} title="Debian" tag="Administration & maintenance" stars="5" />
            <Skill img={puppetlogo} title="Puppet" tag="Centralised configuration" stars="3" />
            <Skill img={dockerlogo} title="Docker" tag="Creating & composing containers" stars="5" />
            <Skill img={k8logo} title="Kubernetes" tag="Enterprise container orchestration" stars="3" />
        </Skills>
    );
}