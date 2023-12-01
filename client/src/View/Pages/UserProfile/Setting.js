import React, { useState } from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';
import Grid from '@mui/material/Grid';
import useStyles from './style';
import Switch from '@mui/joy/Switch';
import Checkbox from '@mui/joy/Checkbox';
import SwitchButton from '../../../Compoments/Switch/SwitchButton';
import Button from '@mui/joy/Button';


const emailSettingData = [
    {
        text: 'Email Notification'
    },
    {
        text: 'Send Copy To Personal Email'
    }
];

const actvityRelatedData = [
    {
        text: 'Have new notifications'
    },
    {
        text: 'You are sent a direct message'
    },
    {
        text: 'Someone adds you as a connection'
    }
];

const escalateEmailsData = [
    {
        text: 'Upon new order'
    },
    {
        text: 'New membership approval'
    },
    {
        text: 'New membership approval'
    }
];


const SystemData = [
    {
        text: 'News about PCT-themes products and feature updates'
    },
    {
        text: 'Tips on getting more out of PCT-themes'
    },
    {
        text: 'Things you missed since you last logged into PCT-themes'
    },
    {
        text: 'News about products and other services'
    },
    {
        text: 'Tips and Document business products'
    }
];

const Setting = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    return (
        <>
            <Box className={classes.mainBox}>
                <Grid container spacing={3}>
                    <Grid item container xs={6} spacing={3}>
                        <Grid item container spacing={3}>
                            <Grid item xs={12}>
                                <div className={classes.aboutSection}>
                                    <div className={classes.cardTop}>
                                        <Typography className={classes.aboutMe}>Email Settings</Typography>
                                    </div>
                                    <Divider className={classes.profileDivider} />
                                    <div className={classes.cardBottom}>
                                        <div className={classes.emailSet}>
                                            <Typography className={classes.setUpEmail}>Setup Email Notification</Typography>
                                            <div className={classes.settingSwitch}>
                                                {
                                                    !!emailSettingData && emailSettingData?.map((email, index) => {
                                                        return (
                                                            <div className={classes.itemEmail} key={index}>
                                                                <div className={classes.itemText}>
                                                                    <Typography className={classes.emailTypo}>{email?.text}</Typography>
                                                                </div>
                                                                <span className={classes.switch}>
                                                                    <SwitchButton />
                                                                </span>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={classes.aboutSection}>
                                    <div className={classes.cardTop}>
                                        <Typography className={classes.aboutMe}>Updates from System Notification</Typography>
                                    </div>
                                    <Divider className={classes.profileDivider} />
                                    <div className={classes.cardBottom}>
                                        <div className={classes.emailSet}>
                                            <Typography className={classes.setUpEmail}>Email you with?</Typography>
                                            <div className={classes.settingSwitch}>
                                                {
                                                    !!SystemData && SystemData?.map((email, index) => {
                                                        return (
                                                            <div className={classes.itemEmail} key={index}>
                                                                <div className={classes.itemText}>
                                                                    <Typography className={classes.emailTypo}>{email?.text}</Typography>
                                                                </div>
                                                                <span className={classes.switch}>
                                                                    <Checkbox />
                                                                </span>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classes.aboutSection}>
                            <div className={classes.cardTop}>
                                <Typography className={classes.aboutMe}>Activity Related Emails</Typography>
                            </div>
                            <Divider className={classes.profileDivider} />
                            <div className={classes.cardBottom}>
                                <div className={classes.emailSet}>
                                    <Typography className={classes.setUpEmail}>When to email?</Typography>
                                    <div className={classes.settingSwitch}>
                                        {
                                            !!actvityRelatedData && actvityRelatedData?.map((email, index) => {
                                                return (
                                                    <div className={classes.itemEmail} key={index}>
                                                        <div className={classes.itemText}>
                                                            <Typography className={classes.emailTypo}>{email?.text}</Typography>
                                                        </div>
                                                        <span className={classes.switch}>
                                                            <SwitchButton />
                                                        </span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <Divider className={classes.profileDivider} style={{ marginBottom: 20, marginTop: 10 }} />
                                <div className={classes.emailSet}>
                                    <Typography className={classes.setUpEmail}>When to escalate emails?</Typography>
                                    <div className={classes.settingSwitch}>
                                        {
                                            !!escalateEmailsData && escalateEmailsData?.map((email, index) => {
                                                return (
                                                    <div className={classes.itemEmail} key={index}>
                                                        <div className={classes.itemText}>
                                                            <Typography className={classes.emailTypo}>{email?.text}</Typography>
                                                        </div>
                                                        <span className={classes.switch}>
                                                            <SwitchButton />
                                                        </span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <div className={classes.buttons}>
                            <Button className={classes.cancelBut}>Cancel</Button>
                            <Button className={classes.updateBut}>Update Setting</Button>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Setting