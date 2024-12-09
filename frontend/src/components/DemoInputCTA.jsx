import React, { useState } from 'react';
import { Stack, InputLabel, TextField, Button } from '@mui/material';
import DemoForm from './DemoForm';

function DemoInputCTA() {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleInputChange = (event) => setEmail(event.target.value);

    return (
        <>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1}
                useFlexGap
                sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
            >
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleOpen}
                >
                    Get Early Access
                </Button>
            </Stack>

            <DemoForm open={open} handleClose={handleClose} email={email} setEmail={setEmail} />
        </>
    );
}

export default DemoInputCTA;
