import Tab, { tabClasses } from '@mui/joy/Tab';
import TabList from '@mui/joy/TabList';
import TabPanel from '@mui/joy/TabPanel';
import Tabs from '@mui/joy/Tabs';
import React from 'react';
import ChangePassword from './ChangePassword';
import Profile from './Profile';
import Setting from './Setting';

const UserProfile = () => {
  return (
    <>
      <Tabs aria-label="tabs" defaultValue={0} sx={{ bgcolor: 'transparent' }}>
        <TabList
          disableUnderline
          sx={{
            p: 0.5,
            gap: 0.5,
            borderRadius: 'xl',
            // bgcolor: 'background.level1',
            [`& .${tabClasses.root}[aria-selected="true"]`]: {
              // boxShadow: 'sm',
              // bgcolor: 'background.surface',
            },
            // width: '400px'
          }}
        >
          <Tab disableIndicator>Profile</Tab>
          <Tab disableIndicator>Change Password</Tab>
          <Tab disableIndicator>Settings</Tab>
        </TabList>

        <TabPanel value={0}>
          <Profile />
        </TabPanel>

        <TabPanel value={1}>
          <ChangePassword />
        </TabPanel>

        <TabPanel value={2}>
          <Setting />
        </TabPanel>
      </Tabs>
    </>
  )
}

export default UserProfile;