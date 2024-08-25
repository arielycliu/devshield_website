import * as React from 'react';
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
import DemoInputCTA from './DemoInputCTA';

export default function CallToAction() {
    return (
        <Container
            id="signup"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pt: { xs: 14, sm: 14, md: 10 },
                pb: { xs: 8, sm: 12, md: 10 },
                mt: 10,
                mb: 10,
                color: 'white',
                bgcolor: 'hsl(220, 30%, 2%)',
                borderRadius: { sm: 0, md: '25px'}
            }}
        >
            <Stack
                spacing={2}
                useFlexGap
                sx={{ 
                    alignItems: 'center',
                    width: { xs: '100%', sm: '70%' } }}
            >
                <Typography
                    variant="h4"
                    sx={{ textAlign: 'center' }}
                >
                    Experience the&#32;
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
                        PatrolPost&#32;
                    </Typography>
                    advantage
                </Typography>
                
                <Typography
                    sx={{
                        textAlign: 'center',
                        color: 'white',
                        width: { sm: '100%', md: '80%' },
                    }}
                >
                    Ready to see how PatrolPost can transform your surveillance needs? 
                </Typography>
                <Typography
                    sx={{
                        textAlign: 'center',
                        color: 'white',
                        width: { sm: '100%', md: '80%' },
                        mt: -1.5
                    }}
                >
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
                        Sign up for a demo today&nbsp;
                    </Typography>
                    and discover the future of remote monitoring.
                </Typography>
                <DemoInputCTA />
            </Stack>
        </Container>
    );
}
