import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
import playground from '../assets/playground.png';
import hospital from '../assets/hospital.jpg';
import construction from '../assets/construction.jpg';

const dataUseCases = [
    {
        usecase:
            "We real-time monitoring and immediate alerts for any unusual activities. With thermal imaging and geofencing capabilities, you can keep a close eye on playgrounds and entrances.",
        img: `url(${playground})`
    },
    {
        usecase:
            "Our AI-powered software assists in detecting unusual movements and ensuring that safety protocols are adhered to, allowing healthcare professionals to focus on patient care.",
        img: `url(${hospital})`
    },
    {
        usecase:
            "Our wireless functionality ensures that you can monitor equipment, personnel, and the site perimeter. Our advanced detection features help prevent unauthorized access and theft.",
        img: `url(${construction})`
    }
];

export default function UseCases() {
    const theme = useTheme();

    return (
        <Container
            id="usecases"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
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
                <Typography component="h2" variant="h4" sx={{ color: 'text.primary' }}>
                    Empowering Across Industries
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    No matter the industry, PatrolPost’s innovative solutions provide peace of mind and enhance security with advanced technology and seamless integration.
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {dataUseCases.map((usecase, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
                        <Card
                            sx={(theme) => ({
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                flexGrow: 1,
                                p: 1,
                                transition: 'outline 0.3s ease',
                                '&:hover': {
                                    outline: `1px solid ${theme.palette.text.primary}`,
                                },
                            })}
                        >
                            <CardContent>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {usecase.usecase}
                                </Typography>
                            </CardContent>
                            <Box
                                sx={(theme) => ({
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    minHeight: 200,
                                    minWidth: 200,
                                    backgroundImage: 'var(--usecase-img)',
                                    backgroundRepeat: 'no-repeat',
                                    borderRadius: 0.8
                                })}
                                style={{
                                    '--usecase-img': dataUseCases[index].img,
                                }}
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
