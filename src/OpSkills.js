import React from 'react';

import Skill from './Skill';
import Skills from './Skills';

import './OpSkills.scss';

export default function OpSkills()
{
    return (
        <Skills
            id="opskills"
            background="secondary"
            heading="DevOps"
        >
            <Skill
                img="https://www.debian.org/Pics/openlogo-50.png"
                title="Debian"
                tag="Administration & maintenance"
                stars="5"
            />
            <Skill
                img="https://d33wubrfki0l68.cloudfront.net/879b618f43e80e82627164cb764f0b095b5b266c/d2c97/images/logos/puppet-logo-black.svg"
                title="Puppet"
                tag="Centralised configuration"
                stars="3"
            />
            <Skill
                img="https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png"
                title="Docker"
                tag="Creating & composing containers"
                stars="5"
            />
            <Skill
                img="https://raw.githubusercontent.com/kubernetes/kubernetes/master/logo/logo.svg"
                title="Kubernetes"
                tag="Enterprise container orchestration"
                stars="3"
            />
        </Skills>
    );
}