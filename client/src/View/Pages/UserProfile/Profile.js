import React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';
import Grid from '@mui/material/Grid';
import useStyles from './style';
import { Avatar, LinearProgress } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

const dataIcon = [
  {
    icon: <EmailOutlinedIcon fontSize='small' />,
    data: 'mukul@gmail.com'
  },
  {
    icon: <LocalPhoneOutlinedIcon fontSize='small' />,
    data: '8654 239 581'
  },
  {
    icon: <MyLocationOutlinedIcon fontSize='small' />,
    data: 'India'
  },
  {
    icon: <FmdGoodOutlinedIcon fontSize='small' />,
    data: 'https://anshan.dh.url'
  }
];

const dataSkills = [
  {
    tech: "MongoDB",
    percent: 65
  },
  {
    tech: "Express",
    percent: 85
  },
  {
    tech: "React",
    percent: 95
  },
  {
    tech: "NodeJS",
    percent: 70
  }
];

const Profile = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.mainBox}>
        <Grid container spacing={3}>
          <Grid item container xs={4}>
            <div className={classes.profileSide}>
              <div className={classes.card}>
                <Grid item container spacing={3}>
                  <Grid item xs={12}>
                    <div className={classes.firstGrid}>
                      <div className={classes.underFirstGrid}>
                        <Avatar src="../images/user.jpg" alt="" className={classes.avatarImage} />
                      </div>
                      <div className={classes.underSecondGrid}>
                        <Typography className={classes.name}>Mukul Singh</Typography>
                        <Typography className={classes.deignation}>Software Engineer</Typography>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider className={classes.profileDivider} />
                  </Grid>
                  <Grid item xs={12}>
                    <div className={classes.secondGrid}>
                      <div className={classes.underGrid}>
                        <Typography className={classes.typo1}>80</Typography>
                        <Typography className={classes.typo2}>Post</Typography>
                      </div>
                      <Divider className={classes.dividerVertical} />
                      <div className={classes.underGrid}>
                        <Typography className={classes.typo1}>40</Typography>
                        <Typography className={classes.typo2}>Post</Typography>
                      </div>
                      <Divider className={classes.dividerVertical} />
                      <div className={classes.underGrid}>
                        <Typography className={classes.typo1}>4.5k</Typography>
                        <Typography className={classes.typo2}>Members</Typography>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider className={classes.profileDivider} />
                  </Grid>
                  <Grid item xs={12}>
                    <div className={classes.nav}>
                      {
                        !!dataIcon && dataIcon?.map((data, index) => {
                          return (
                            <>
                              <div key={index} className={classes.list}>
                                <div>
                                  <icon className={classes.listIcon}>{data?.icon}</icon>
                                </div>

                                <div>
                                  <Typography className={classes.listText}>{data?.data}</Typography>
                                </div>
                              </div>
                            </>
                          )
                        })
                      }
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider className={classes.profileDivider} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className={classes.skills}>Skills</Typography>
                    <div className={classes.nav}>
                      {
                        !!dataSkills && dataSkills?.map((data, index) => {
                          return (
                            <>
                              <div key={index} className={classes.list}>
                                <div>
                                  <Typography className={classes.techItem}>{data?.tech}</Typography>
                                </div>

                                <div className={classes.linearProgress}>
                                  <LinearProgress variant="determinate" value={data?.percent} className={classes.progress} />
                                  <Typography className={classes.listText}>{data?.percent}</Typography>
                                </div>
                              </div>
                            </>
                          )
                        })
                      }
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>

          <Grid item container xs={8}>
            <div className={classes.profileSide}>
              <div className={classes.card}>
                <Grid item container spacing={3}>
                  <Grid item xs={12}>
                    <div className={classes.aboutSection}>
                      <div className={classes.cardTop}>
                        <Typography className={classes.aboutMe}>About Me</Typography>
                      </div>
                      <Divider className={classes.profileDivider} />
                      <div className={classes.cardBottom}>
                        <Typography className={classes.aboutData}>
                          I’m Mukul Singh! I’m a web developer with in-depth experience in UI/UX design. In a nutshell, I create websites 
                          that help organizations address business challenges and meet their needs. I manage everything from website 
                          navigation and layout to a company’s web hosting and security architecture. My expertise lies within 
                          front-end web apps, and the main languages in my tech stack are JavaScript, React, and of course HTML/CSS.
                        </Typography>
                      </div>
                    </div>
                  </Grid>

                  <Grid item xs={12}>
                    <div className={classes.aboutSection}>
                      <div className={classes.cardTop}>
                        <Typography className={classes.aboutMe}>Personal Details</Typography>
                      </div>
                      <Divider className={classes.profileDivider} />
                      <div className={classes.cardBottom}>
                        <div>
                          <div className={classes.formData}>
                            <div container item spacing={3} className={classes.gridClass}>
                              <div className={classes.gridWidth}>
                                <Typography className={classes.label}>Full Name</Typography>
                                <Typography className={classes.labelName}>Mukul Singh</Typography>
                              </div>
                              <div className={classes.gridWidth}>
                                <Typography className={classes.label}>User Name</Typography>
                                <Typography className={classes.labelName}>mukul65</Typography>
                              </div>
                            </div>
                          </div>
                          <Divider className={classes.profileDivider} />


                          <div className={classes.formData}>
                            <div className={classes.gridClass}>
                              <div className={classes.gridWidth}>
                                <Typography className={classes.label}>Email</Typography>
                                <Typography className={classes.labelName}>mukul@gmail.com</Typography>
                              </div>
                              <div className={classes.gridWidth}>
                                <Typography className={classes.label}>Contact No.</Typography>
                                <Typography className={classes.labelName}>7657565655</Typography>
                              </div>
                            </div>
                          </div>
                          <Divider className={classes.profileDivider} />

                          <div className={classes.formData}>
                            <div className={classes.gridClass}>
                              <div className={classes.gridWidth}>
                                <Typography className={classes.label}>Gender</Typography>
                                <Typography className={classes.labelName}>male</Typography>
                              </div>
                              <div className={classes.gridWidth}>
                                <Typography className={classes.label}>Location</Typography>
                                <Typography className={classes.labelName}>Malviya Nagar</Typography>
                              </div>
                            </div>
                          </div>
                          <Divider className={classes.profileDivider} />

                          <div className={classes.formData}>
                            <div className={classes.gridClass}>
                              <div className={classes.gridWidth}>
                                <Typography className={classes.label}>Role</Typography>
                                <Typography className={classes.labelName}>user</Typography>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Profile