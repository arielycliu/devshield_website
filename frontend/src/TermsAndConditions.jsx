import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

export default function TermsAndConditions() {
    return (
        <Container sx={{ py: 5 }}>
            <Typography variant="h4" gutterBottom>
                Terms and Conditions
            </Typography>
            <Typography variant="body1" paragraph>
                Last updated: 01/27/2025
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1" paragraph>
                Welcome to DevShield ("the App"). By accessing or using the App, you agree to these Terms and Conditions ("Terms"). If you do not agree, do not use the App.
            </Typography>
            <Typography variant="h6" gutterBottom>1. Use of the App</Typography>
            <Typography variant="body1">
                - The App is provided "as is" and "as available." We do not guarantee uninterrupted access or functionality.<br />
                - You must use the App only for lawful purposes and in compliance with these Terms.
            </Typography>
            <Typography variant="h6" gutterBottom>2. User Responsibilities</Typography>
            <Typography variant="body1">
                - You agree to provide accurate and complete information during registration.<br />
                - You are responsible for maintaining the confidentiality of your account credentials.
            </Typography>
            <Typography variant="h6" gutterBottom>3. Prohibited Actions</Typography>
            <Typography variant="body1">
                - Unauthorized access or use of another user's account.<br />
                - Reverse-engineering, modifying, or distributing the App without our consent.
            </Typography>
            <Typography variant="h6" gutterBottom>4. Limitation of Liability</Typography>
            <Typography variant="body1">
                - We are not liable for any indirect, incidental, or consequential damages resulting from your use of the App.<br />
                - Our maximum liability for direct damages will not exceed the amount you paid for the App (if any).
            </Typography>
            <Typography variant="h6" gutterBottom>5. Governing Law</Typography>
            <Typography variant="body1">
                These Terms are governed by the laws of the United States of America and Colorado.
            </Typography>
            <Typography variant="body1" paragraph>
                For questions, contact us at admin@devshield.org.
            </Typography>
        </Container>
    );
}
