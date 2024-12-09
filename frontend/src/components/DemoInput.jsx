import React, { useState } from 'react';
import { Box, InputLabel, TextField, Button } from '@mui/material';
import DemoForm from './DemoForm';

function DemoInput() {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleInputChange = (event) => setEmail(event.target.value);

    return (
        <>
            <Button
                variant="contained"
                color="primary"
                onClick={handleOpen}
            >
                Get Early Access
            </Button>

            <DemoForm open={open} handleClose={handleClose} email={email} setEmail={setEmail} />
        </>
    );
}

export default DemoInput;
