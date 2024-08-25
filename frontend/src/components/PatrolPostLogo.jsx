import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import logoBlack from '../assets/PatrolPostBlack.svg';
import logoWhite from '../assets/PatrolPostWhite.svg';
import { styled } from '@mui/material/styles';

const Logo = styled('div')(({ theme }) => ({
    backgroundImage: `url(${logoBlack})`,
    height: '25px',
    width: '78.32px',
    ...theme.applyStyles('dark', {
        backgroundImage: `url(${logoWhite})`
    }),
}));

export default function PatrolPostLogo() {
    return (
        <Logo />
    );
}
