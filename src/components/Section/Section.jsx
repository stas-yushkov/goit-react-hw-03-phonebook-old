import PropTypes from 'prop-types';
import { StyledSection, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <Title>{title}</Title>
      {children}
    </StyledSection>
  );
};

Section.propTypes = { title: PropTypes.string, children: PropTypes.node };

export { Section };
