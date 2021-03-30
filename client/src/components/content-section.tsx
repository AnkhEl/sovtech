import React from 'react';
import styled from '@emotion/styled';
import { widths, colors } from '../styles';

interface ContentSectionProps{
  children:React.ReactNode;
}
/**
 * Content Section component renders content (mainly text/mdown based)
 */
const ContentSection = ({ children }:ContentSectionProps) => {
  return <ContentDiv>{children}</ContentDiv>;
};

export default ContentSection;

/** ContentSection styled component */
const ContentDiv = styled.div({
  marginTop: 10,
  display: 'flex',
  flexDirection: 'column',
  maxWidth: widths.textPageWitdh,
  width: '100%',
  alignSelf: 'center',
  backgroundColor: colors.background,
});
