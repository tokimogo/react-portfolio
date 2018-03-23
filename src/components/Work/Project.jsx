import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

const ProjectFlex = styled(Flex)`
  margin-top: 400px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h1`
  font-size: 100px;
  font-family: 'Open Sans Bold';
  color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.dark};
  margin-bottom: 18px;
`;

const Heading = styled.h3`
  font-size: 16px;
  font-family: 'Montserrat Regular';
  color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.dark};
  margin-top: 16px;
  margin-bottom: 4px;
`;

const Body = styled.p`
  font-size: 14px;
  font-family: 'Open Sans Regular';
  color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.grey};
`;

const Link = styled.a`
  font-size: 14px;
  font-family: 'Open Sans Regular';
  color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.grey};
`;

function Project(props) {
  return (
    <ProjectFlex>
      <Box ml="25%" width={1/2}>
        <Title>{props.project.title}</Title>
        <Image src={props.project.image.src} alt={props.project.image.alt} />
        <Heading>{props.project.subtitle}</Heading>
        <Body>{props.project.description}</Body>
        <Heading>Role</Heading>
        <Body>{props.project.role}</Body>
        <Heading>Tech</Heading>
        <Body>{props.project.tech}</Body>
        {
          (props.project.link)
          ?
            <div>
              <Heading>Link</Heading>
              <Link href={props.project.link.url}>{props.project.link.label}</Link>
            </div>
          : ''
        }
      </Box>
    </ProjectFlex>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tech: PropTypes.string.isRequired,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
    link: PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Project;
