import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import ArrowDown from './ArrowDown';

const IntroFlex = styled(Flex)`
  min-height: 100vh;
  height: 100vh;
`;

const IntroBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 42px;
  font-family: 'Montserrat Bold';
  color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.dark};
`;

const Subtitle = styled.h2`
  font-size: 28px;
  font-family: 'Montserrat SemiBold';
  color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.grey};
`;

const Works = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 32px;
`;

const WorksTitle = styled.h1`
  font-size: 16px;
  font-family: 'Montserrat Bold';
  color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.dark};
`;

const WorksSubtitle = styled.h2`
  font-size: 12px;
  font-family: 'Montserrat SemiBold';
  color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.grey};
  margin-bottom: 6px;
`;

function Intro() {
  return (
    <IntroFlex>
      <IntroBox width={1}>
        <Title>Mathieu Roussilhe</Title>
        <Subtitle>Web developer</Subtitle>
        <Works>
          <WorksTitle>WORKS</WorksTitle>
          <WorksSubtitle>Portfolio</WorksSubtitle>
          <ArrowDown />
        </Works>
      </IntroBox>
    </IntroFlex>
  );
}

export default Intro;