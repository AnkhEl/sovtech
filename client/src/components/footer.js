import React from 'react';
import styled from '@emotion/styled';
import { colors, } from '../styles';


const Footer = () => {
  return (
    <FooterContainer>
      2021 ©{'SOVTECH Full Stack Engineer Test By Themba Alex Khumalo '}
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  color: colors.blue.base,
  marginTop: 20,
  height: 100,
  padding: 20,
  backgroundColor: 'white',
  borderTop: `solid 1px ${colors.blue.light}`,
});

