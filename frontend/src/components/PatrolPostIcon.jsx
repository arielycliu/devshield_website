import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import logoBlack from '../assets/PatrolPostBlack.svg';
import logoWhite from '../assets/PatrolPostWhite.svg';
import logo from '../assets/logo.png';
import { styled } from '@mui/material/styles';

const LogoBig = styled('div')(({ theme }) => ({
  backgroundImage: `url(${logoBlack})`,
  height: '50px',
  width: '156.64px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  ...theme.applyStyles('dark', {
      backgroundImage: `url(${logoWhite})`
  }),
}));

export default function PatrolPostIcon() {
  return (
    <LogoBig />
    // <SvgIcon sx={{ height: 70, width: 70 }}>
    //   <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <image href={logo} width="70" height="70" />
    //   </svg>
    // </SvgIcon>
  );
}
