import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import SmsFailedRoundedIcon from '@mui/icons-material/SmsFailedRounded';
import DirectionsBikeRoundedIcon from '@mui/icons-material/DirectionsBikeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MovieCreationRoundedIcon from '@mui/icons-material/MovieCreationRounded';

const items = [
    {
        icon: <SettingsSuggestRoundedIcon />,
        title: 'User-Friendly Dashboard',
        description:
            'Navigate with ease and minimal learning curve.',
    },
    {
        icon: <MovieCreationRoundedIcon />,
        title: '24/7 Recording and Playback',
        description:
            'Access continuous video footage whenever you need it.',
    },
    {
        icon: <SearchRoundedIcon />,
        title: 'Advanced Video Filtering',
        description:
            'Quickly find specific events or objects with advanced tagging features.',
    },
    {
        icon: <SmsFailedRoundedIcon />,
        title: 'Intrusion Alerts',
        description:
        'Receive alerts when boundaries are breached.',
    },
    {
        icon: <DirectionsBikeRoundedIcon />,
        title: 'Human and Vehicle Detection',
        description:
            'Identify and track people and vehicles effortlessly.',
    },
    {
        icon: <QueryStatsRoundedIcon />,
        title: 'Remote AI Capabilities',
        description:
            'Harness the power of artificial intelligence for smarter monitoring.',
    },
];

export default function Highlights() {
    return (
        <Box
            id="highlights"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                color: 'white',
                bgcolor: 'hsl(220, 30%, 2%)',
            }}
        >
            <Container
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 3, sm: 6 },
                }}
            >
                <Box
                    sx={{
                        width: { sm: '100%', md: '60%' },
                        textAlign: { sm: 'left', md: 'center' },
                    }}
                >
                    <Typography component="h2" variant="h4">
                        Cutting-edge surveillance software
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'grey.400' }}>
                    We providing seamless integration, real-time alerts, and advanced analytics&mdash;ensuring you have complete control and visibility at all times.
                    </Typography>
                </Box>
                <Grid container spacing={2.5}>
                    {items.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Stack
                                direction="column"
                                component={Card}
                                spacing={1}
                                useFlexGap
                                sx={{
                                    color: 'inherit',
                                    p: 3,
                                    height: '100%',
                                    border: '1px solid',
                                    borderColor: 'hsla(220, 25%, 25%, .3)',
                                    background: 'transparent',
                                    backgroundColor: 'grey.900',
                                    boxShadow: 'none',
                                    transition: 'outline 0.6s ease',
                                    '&:hover': {
                                        outline: `1px solid hsl(220, 25%, 10%)`,
                                    },
                                    '&:active': {
                                        outline: `1px solid hsl(220, 25%, 10%)`,
                                    },
                                }}
                            >
                                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                                <div>
                                    <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'grey.400' }}>
                                        {item.description}
                                    </Typography>
                                </div>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
