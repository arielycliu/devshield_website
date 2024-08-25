import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import devShieldLogo from '../assets/devshield-logo-big.png';

export default function FooterLogo() {
  return (
    <SvgIcon sx={{ height: 160, width: 160 }}>
      <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <image href={devShieldLogo} width="160" height="160" />
      </svg>
    </SvgIcon>
  );
}
