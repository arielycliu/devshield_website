import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import HowItWorksCard from './HowItWorksCard';
import './Timeline.css'

const howItWorksData = [
    {
        header: "1. Download our application",
        text: "Deploy our Google Workspace app with a few clicks."
    },
    {
        header: "2. Pulse Surveys (Optional)",
        text: "Every day, engineers will receive a small popup featuring a single question, measuring their happiness and gathering suggestions."
    },
    {
        header: "3. Data collection",
        text: "Our platform carefully analyzes every calendar invite, enforcing best practices like redirects to office hours and protecting focus time."
    },
    {
        header: "4. AI-powered insight generation",
        text: "From this wealth of data, our AI model generates curated insights, enabling informed decision-making at its best. But wait, there's more."
    }
];

export default function HowItWorks() {
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
                        How it works
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'grey.400' }}>
                        We providing seamless integration with Google workspace, daily surveys, and advanced analytics&mdash;ensuring you have complete visibility at all times.
                    </Typography>
                </Box>


                <div class="timeline">
                    <div class="timeline__component">
                        <div class="timeline__date timeline__date--right"></div>
                    </div>
                    <div class="timeline__middle">
                        <div class="timeline__point"></div>
                    </div>
                    <HowItWorksCard
                        header={howItWorksData[0].header}
                        text={howItWorksData[0].text}
                    />
                    <HowItWorksCard
                        header={howItWorksData[1].header}
                        text={howItWorksData[1].text}
                    />
                    <div class="timeline__middle">
                        <div class="timeline__point"></div>
                    </div>
                    <div class="timeline__component">
                        <div class="timeline__date"></div>
                    </div>
                    <div class="timeline__component">
                        <div class="timeline__date timeline__date--right"></div>
                    </div>
                    <div class="timeline__middle">
                        <div class="timeline__point"></div>
                    </div>
                    <HowItWorksCard
                        header={howItWorksData[2].header}
                        text={howItWorksData[2].text}
                    />
                    <HowItWorksCard
                        header={howItWorksData[3].header}
                        text={howItWorksData[3].text}
                    />
                    <div class="timeline__middle">
                        <div class="timeline__point"></div>
                        <div class="timeline__point timeline__point--bottom"></div>
                    </div>
                    <div class="timeline__component timeline__component--bottom">
                        <div class="timeline__date"></div>
                    </div>
                </div>

            </Container>
        </Box>
    );
}
