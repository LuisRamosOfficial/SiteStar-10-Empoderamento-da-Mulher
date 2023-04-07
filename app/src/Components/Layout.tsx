import React, { FC, PropsWithChildren } from 'react';
import Navbar from './Navbar';

const Layout: FC<PropsWithChildren> = (props) => {
  return (
    <>
      <Navbar/>
      {props.children}
    </>
  )
}

export default Layout