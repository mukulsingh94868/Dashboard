import React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';
import Grid from '@mui/material/Grid';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import useStyles from './style';

const changePasswordData = [
    {
        dash: "--",
        data: "At least 8 characters"
    },
    {
        dash: "--",
        data: "At least 1 lower letter (a-z)"
    },
    {
        dash: "--",
        data: "At least 1 uppercase letter (A-Z)"
    },
    {
        dash: "--",
        data: "At least 1 number (0-9)"
    },
    {
        dash: "--",
        data: "At least 1 special characters"
    },
];

const ChangePassword = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.mainBox}>
                <div className={classes.cardHeader}>
                    <Typography className={classes.cardContent}>Change Password</Typography>
                </div>
                <Divider className={classes.dividerInstructions} />

                <Box>
                    <Grid container spacing={10}>
                        <Grid item xs={7}>
                            <Stack gap={4} sx={{ mt: 2 }}>
                                <form>
                                    <FormControl required className={classes.formControl}>
                                        <FormLabel className={classes.formLabel}>Old Password</FormLabel>
                                        <Input
                                            className={classes.input}
                                            type="text"
                                            placeholder="Enter Your Old Password"
                                            name="username"
                                        />
                                    </FormControl>
                                    <FormControl required className={classes.formControl}>
                                        <FormLabel className={classes.formLabel}>New Password</FormLabel>
                                        <Input
                                            type="password"
                                            className={classes.input}
                                            placeholder="Enter Your New Password"
                                            name="password"
                                        />
                                    </FormControl>
                                    <FormControl required className={classes.formControl}>
                                        <FormLabel className={classes.formLabel}>New Password</FormLabel>
                                        <Input
                                            type="password"
                                            className={classes.input}
                                            placeholder="Enter Your New Password"
                                            name="password"
                                        />
                                    </FormControl>
                                    <Stack gap={4} sx={{ mt: 2 }} className={classes.stackMatter}>
                                        <Button className={classes.cancelButton}>
                                            Cancel
                                        </Button>
                                        <Button type="submit" className={classes.changeButton}>
                                            Change Password
                                        </Button>
                                    </Stack>
                                </form>
                            </Stack>
                        </Grid>

                        <Grid item xs={5}>
                            <div className={classes.instructionDiv}>
                                <Typography className={classes.newPass}>New Password must contain:</Typography>
                                {
                                    !!changePasswordData && changePasswordData?.map((change, index) => {
                                        return (
                                            <>
                                                <div className={classes.instructions}>
                                                    <icon>{change?.dash}</icon>
                                                    <Typography className={classes.dataTypo}>{change?.data}</Typography>
                                                </div>
                                                {
                                                    changePasswordData?.length - 1 ? <Divider className={classes.dividerInstructions} /> : null
                                                }
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default ChangePassword;