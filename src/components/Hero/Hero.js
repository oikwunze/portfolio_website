import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Okechukwu Ikwunze Personal Portfolio
        </SectionTitle>
        <SectionText>
        This a personal portfolio website about what i have done, what i'm doing now and my future plans.
        I am a Skilled IT Professional with 8+ years in DevOps and Site Reliability Engineer experience in
        designing, automating, and optimizing mission critical deployments in AWS, leveraging
        configuration management, CI/CD, Docker, Kubernetes and DevOps processes.  I am passionate about DevOps, Web Dev, Kubernetes, Machine Learning & I enjoy learning new things.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;