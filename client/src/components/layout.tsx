import React from 'react';
import { Header, Footer } from '.';
import styled from '@emotion/styled';
import { widths, unit } from '../styles';
import '../pagination.css';

interface LayoutProps{
  fullWidth?: boolean;
  children: React.ReactNode| JSX.Element| React.ReactElement;
  grid?:boolean;
}

const Layout = ({ fullWidth, children, grid }:LayoutProps) => {
  return (
    <>
      <Header />
      <PageContainer fullWidth={fullWidth} grid={grid}>
        {children}
      </PageContainer>
      <Footer />
    </>
  );
};

export default Layout;

type PageContainerProps = {
  fullWidth?:boolean;
  grid?:boolean;
}
// @ts-ignore
const PageContainer = styled.div((props:PageContainerProps) => ({
  display: 'flex',
  justifyContent: props.grid ? 'center' : 'top',
  flexDirection: props.grid ? 'row' : 'column',
  flexWrap: 'wrap',
  alignSelf: 'center',
  flexGrow: 1,
  maxWidth: props.fullWidth ? null : `${widths.regularPageWidth}px`,
  width: '100%',
  padding: props.fullWidth ? 0 : unit * 2,
  paddingBottom: unit * 5,
}));