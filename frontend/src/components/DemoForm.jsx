import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
    Modal, Stack, TextField, Select, MenuItem, InputLabel, FormControl, Button, Typography, Box, Link
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function DemoForm({ open, handleClose, email, setEmail }) {
    const [industry, setIndustry] = useState('');
    const [companySize, setCompanySize] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [submitModal, setSubmitModal] = useState(false);

    const [state, handleSubmit, reset] = useForm('xnnadvnb');

    const handleCloseSubmitted = () => {
        setSubmitModal(false);
        handleClose();
        setIndustry('');
        setCompanySize('');
        setName('');
        setPhone('');
        setEmail('');
        reset();
    }

    useEffect(() => {
        if (state.succeeded) {
            setSubmitModal(true);
        }
    }, [state.succeeded]);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // Handle form submission logic here
    //     setSubmitted(true);
    // };

    return (
        <>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: {
                        xs: '90%',
                        sm: '70%',
                        md: '40%'
                    },
                    bgcolor: 'background.paper',
                    borderRadius: '12px',
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Box sx={{ 
                    position: 'absolute', top: 16, right: 16,
                    borderRadius: '20px',
                    width: 'fit-content',
                    height: 'fit-content',
                    p: '5px',
                    m: '0',
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center',
                    '&:hover': {
                        backgroundColor: 'hsl(220, 35%, 88%)',
                        cursor: 'pointer'
                    }
                }} onClick={handleClose}>
                    <CloseIcon />
                </Box>
                <form
                    onSubmit={handleSubmit}
                >
                    <Stack spacing={2} sx={{ 
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'left'
                    }}>
                        <Typography id="modal-title" variant="h6" component="h2">
                            Ready to secure your property?
                        </Typography>

                        <TextField
                            label="Name"
                            name="name"
                            size="small"
                            variant="outlined"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <TextField
                            label="Email"
                            name="email"
                            size="small"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            type="email"
                        />
                        <ValidationError field="email" prefix="Email" errors={state.errors} />

                        <TextField
                            label="Phone number"
                            name="phone"
                            size="small"
                            variant="outlined"
                            fullWidth
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="phone"
                        />

                        <TextField
                            label="Industry"
                            name="industry"
                            size="small"
                            variant="outlined"
                            fullWidth
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                        />

                        <TextField
                            label="Company size (rough estimate)"
                            name="companySize"
                            size="small"
                            variant="outlined"
                            fullWidth
                            value={companySize}
                            onChange={(e) => setCompanySize(e.target.value)}
                        />

                            
                        {/* <FormControl fullWidth size="small">
                            <InputLabel id="company-size-label">Company Size</InputLabel>
                            <Select
                                labelId="company-size-label"
                                value={companySize}
                                onChange={(e) => setCompanySize(e.target.value)}
                                label="CompanySize"
                                name="companySize"
                            >
                                <MenuItem value="1-10">1-10</MenuItem>
                                <MenuItem value="11-50">11-50</MenuItem>
                                <MenuItem value="51-200">51-200</MenuItem>
                                <MenuItem value="201-500">201-500</MenuItem>
                                <MenuItem value="500+">500+</MenuItem>
                            </Select>
                        </FormControl> */}

                        <Button type="submit" disabled={state.submitting} variant="contained" color="primary" sx={{ 
                            mt: 2,
                            width: 'fit-content'
                        }}>
                            Submit
                        </Button>
                    </Stack>
                </form>

            </Box>
        </Modal>
        <Modal
            open={submitModal}
            onClose={handleCloseSubmitted}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: {
                        xs: '90%',
                        sm: '70%',
                        md: '40%'
                    },
                    bgcolor: 'background.paper',
                    borderRadius: '12px',
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Box sx={{ 
                    position: 'absolute', top: 16, right: 16,
                    borderRadius: '20px',
                    width: 'fit-content',
                    height: 'fit-content',
                    p: '5px',
                    m: '0',
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center',
                    '&:hover': {
                        backgroundColor: 'hsl(220, 35%, 88%)',
                        cursor: 'pointer'
                    }
                }} onClick={handleCloseSubmitted}>
                    <CloseIcon />
                </Box>
                
                <Typography variant="h6" sx={(theme) => ({
                    fontWeight: '700',
                    alignSelf: 'center',
                    fontSize: {
                        xs: '1.3rem',
                        sm: '1.5rem',
                        md: '1.5rem',
                    },
                    background: 'linear-gradient(to right, #05b0ff, #033dfc)', 
                    WebkitBackgroundClip: 'text', 
                    WebkitTextFillColor: 'transparent', 
                    backgroundClip: 'text', 
                    color: '#7dc7ff',
                    transition: 'opacity 0.5s ease-in-out', 
                    ...theme.applyStyles('dark', {
                        background: 'linear-gradient(to right, #8adaff, #6e8ffa)'
                    })
                })}>
                    Submitted!
                </Typography>
                <Typography>
                Thank you for your interest! A member of our sales team will reach out to you within 1-3 business days.
                </Typography>
                <Typography sx={{ mt: 1 }}>
                If you have any immediate questions, feel free to contact us at{' '}
                <Link href="mailto:info@patrolpost.com" color="inherit">
                    info@patrolpost.com
                </Link>.
                </Typography>

            </Box>
        </Modal>
        </>
    );
}

export default DemoForm;
