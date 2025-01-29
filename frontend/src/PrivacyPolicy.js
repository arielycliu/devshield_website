import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

export default function PrivacyPolicy() {
    return (
        <Container sx={{ py: 5 }}>
            <Typography variant="h4" gutterBottom>
                Privacy Policy
            </Typography>
            <Typography variant="body1" paragraph>
                Last updated: 01/27/2025
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1" paragraph>
                DevShield ("we," "our," or "us") values your privacy and is committed to protecting your personal data.
                This Privacy Policy outlines how we collect, use, and safeguard your information when you use our app.
            </Typography>
            <Typography variant="h6" gutterBottom>1. Information We Collect</Typography>
            <Typography variant="body1">
                <strong>Authentication Data:</strong> We collect your email address and other profile information necessary to authenticate your account via third-party login providers.
            </Typography>
            <Typography variant="body1">
                <strong>Calendar Data:</strong> With your explicit consent, we access your calendar data (e.g., event details, times, and attendees) to provide core app functionalities. We do not collect or store calendar data without your permission.
            </Typography>
            <Typography variant="h6" gutterBottom>2. How We Use Your Information</Typography>
            <Typography variant="body1">
                - To authenticate and provide secure access to your account.<br />
                - To process and analyze calendar data for productivity insights and scheduling recommendations.<br />
                - To improve our app's features and functionality.
            </Typography>
            <Typography variant="h6" gutterBottom>3. Data Sharing</Typography>
            <Typography variant="body1">
                - We do not sell or rent your personal data to third parties.<br />
                - We may share your information with service providers or partners strictly for purposes related to the app’s operation, under legally binding agreements.
            </Typography>
            <Typography variant="h6" gutterBottom>4. Data Retention</Typography>
            <Typography variant="body1">
                Your data is retained only as long as necessary to provide our services or comply with legal obligations.
            </Typography>
            <Typography variant="h6" gutterBottom>5. Your Rights</Typography>
            <Typography variant="body1">
                - You can withdraw consent for calendar access at any time.<br />
                - You can request access, correction, or deletion of your personal data by contacting us at admin@devshield.org.
            </Typography>
        </Container>
    );
}
