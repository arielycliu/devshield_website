import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/material/styles';
import DemoInput from './DemoInput';
import robot from '../assets/robot.png';

const StyledBox = styled('div')(({ theme }) => ({
    alignSelf: 'center',
    width: '100%',
    height: 400,
    marginTop: theme.spacing(8),
    borderRadius: theme.shape.borderRadius,
    outline: '1px solid',
    boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
    backgroundImage: `url(${'/src/assets/robot2.png'})`,
    outlineColor: 'hsla(220, 25%, 80%, 0.5)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(10),
        height: 700,
    },
    ...theme.applyStyles('dark', {
        boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
        backgroundImage: `url(${'/src/assets/robot2.png'})`,
        outlineColor: 'hsla(210, 100%, 80%, 0.1)',
    }),
}));

const ImageBox = styled('div')(({ theme }) => ({
    alignSelf: 'center',
    width: '100%',
    height: 400,
    marginTop: theme.spacing(8),
    backgroundImage: `url(${robot})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(10),
        height: 700,
    }
}));

const AnimatedText = () => {
    const texts = [
        'For Schools',
        'For Hospitals',
        'For Construction Sites',
        'For Everything'
    ];

    const [currentText, setCurrentText] = useState(texts[0]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentText(prev => {
                const currentIndex = texts.indexOf(prev);
                const nextIndex = (currentIndex + 1) % texts.length;
                return texts[nextIndex];
            });
        }, 1500);

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <Typography
            variant="h6"
            sx={(theme) => ({
                display: 'flex',
                fontWeight: '700',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: {
                    sm: 'center',
                    md: 'flex-start',
                },
                fontSize: {
                    xs: '1.3rem',
                    sm: '1.5rem',
                    md: '1.5rem',
                },
                background: 'linear-gradient(to right, #05b0ff, #033dfc)', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent', 
                backgroundClip: 'text', 
                color: '#7dc7ff',
                transition: 'opacity 0.5s ease-in-out', 
                ...theme.applyStyles('dark', {
                    background: 'linear-gradient(to right, #8adaff, #6e8ffa)'
                }),
            })}
        >
            {currentText}
        </Typography>
    );
};

export default function HeroVideo() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box
            id="hero"
            sx={(theme) => ({
                width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundImage:
                    'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
                ...theme.applyStyles('dark', {
                    backgroundImage:
                        'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
                }),
            })}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        sm: 'column',
                        md: 'row'
                    },
                    alignItems: {
                        xs: 'center',
                        sm: 'center',
                        md: 'left'
                    },
                    pt: { xs: 14, sm: 14, md: 0 },
                    pb: { xs: 8, sm: 12, md: 0 },
                }}
            >
                <Stack
                    spacing={2}
                    useFlexGap
                    sx={{
                        alignItems: {
                            xs: 'center',
                            sm: 'center',
                            md: 'flex-start'
                        },
                        width: { xs: '100%', sm: '70%' }
                    }}
                >
                    <AnimatedText /> 
                    <Typography
                        variant="h1"
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'row', sm: 'row' },
                            alignItems: {
                                xs: 'center',
                                sm: 'center',
                                md: 'flex-start'
                            },
                            fontSize: {
                                xs: 'clamp(2rem, 10vw, 2rem)',
                                sm: 'clamp(3rem, 10vw, 2rem)',
                                md: 'clamp(3rem, 10vw, 3.5rem)'
                            },
                        }}
                    >
                        Real&#8209;Time&nbsp;
                        <Typography
                            component="span"
                            variant="h1"
                            sx={(theme) => ({
                                fontSize: 'inherit',
                                color: 'primary.main',
                                ...theme.applyStyles('dark', {
                                    color: 'primary.light',
                                }),
                            })}
                        >
                            Security
                        </Typography>
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'row', sm: 'row' },
                            alignItems: {
                                xs: 'center',
                                sm: 'center',
                                md: 'flex-start'
                            },
                            fontSize: {
                                xs: 'clamp(2rem, 10vw, 2rem)',
                                sm: 'clamp(3rem, 10vw, 2rem)',
                                md: 'clamp(3rem, 10vw, 3.5rem)'
                            },
                        }}
                    >
                        for&nbsp;Real&#8209;World&nbsp;
                        <Typography
                            component="span"
                            variant="h1"
                            sx={(theme) => ({
                                fontSize: 'inherit',
                                color: 'primary.main',
                                ...theme.applyStyles('dark', {
                                    color: 'primary.light',
                                }),
                            })}
                        >
                            Safety
                        </Typography>
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: {
                                xs: 'center',
                                sm: 'center',
                                md: 'left'
                            },
                            color: 'text.secondary',
                            width: { sm: '100%', md: '80%' },
                        }}
                    >
                        PatrolPost provides top-notch remote monitoring solutions for schools, hospitals, construction sites, and more.
                        Our state-of-the-art technology ensures you have eyes everywhere, anytime, and with unprecedented ease and reliability.
                    </Typography>
                    <DemoInput />
                    {/* <Typography variant="caption" sx={{ textAlign: 'center' }}>
                        We will be in contact in 2-3&nbsp;
                        <Link href="#" color="primary">
                            working days
                        </Link>
                        .
                    </Typography> */}
                </Stack>
                <ImageBox id="image" />
            </Container>
            {/* <Container
            >
                <StyledBox />
            </Container> */}
        </Box>
    );
}
