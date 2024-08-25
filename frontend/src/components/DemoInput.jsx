import React, { useState } from 'react';
import { Stack, InputLabel, TextField, Button } from '@mui/material';
import DemoForm from './DemoForm';

function DemoInput() {
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
                <InputLabel htmlFor="email-hero" sx={{ display: 'none' }}>
                    Email
                </InputLabel>
                <TextField
                    id="email-hero"
                    hiddenLabel
                    size="small"
                    variant="outlined"
                    aria-label="Enter your email address"
                    placeholder="Your email address"
                    value={email}
                    onChange={handleInputChange}
                    slotProps={{
                        htmlInput: {
                            autoComplete: 'off',
                            'aria-label': 'Enter your email address',
                        },
                    }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ ml: { xs: 0, sm: -10 } }}
                    onClick={handleOpen}
                >
                    Get a demo
                </Button>
            </Stack>

            <DemoForm open={open} handleClose={handleClose} email={email} setEmail={setEmail} />
        </>
    );
}

export default DemoInput;
