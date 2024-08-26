import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function HowItWorksCard({ header, text }) {
    return (
        <Stack
            direction="column"
            component={Card}
            spacing={1}
            useFlexGap
            sx={{
                color: 'inherit',
                p: 3,
                height: 'fit-content',
                border: '1px solid',
                borderColor: 'hsla(220, 25%, 25%, .3)',
                background: 'transparent',
                backgroundColor: 'grey.800',
                boxShadow: 'none',
                transition: 'outline 0.6s ease',
                ml: '2rem',
                mr: '2rem',
                '&:hover': {
                    outline: `1px solid hsl(220, 25%, 10%)`,
                },
                '&:active': {
                    outline: `1px solid hsl(220, 25%, 10%)`,
                },
            }}
        >
            <div>
                <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                    {header}
                </Typography>
                <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {text}
                </Typography>
            </div>
        </Stack>
    );
}
