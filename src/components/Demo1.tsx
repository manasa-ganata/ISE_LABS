import React, { useState } from 'react';
import { Tabs, Tab ,Box} from '@mui/material';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() => ({
    customTabsContainer: {
        backgroundColor: '#367aba', // Set background color for the container
        display: 'inline-block', // This will make the container take only the width of the tabs
      },
 
    tab: {
        color: 'white !important', // Text color of the tabs
        '&.Mui-selected': {
          backgroundColor: '#c4c4cf', // Focused tab color
           color:'#367aba !important'// Text color when focused
        },
      },
      tabPanel: {
        display: 'none',
        '&.Mui-selected': {
          display: 'block',
          backgroundColor: '#c4c4cf', // Set background color to match selected tab color
        },
      },


  }));
  const TabPanel = (props:any) => {
    const { children, value, index } = props;
  
    return (
      <div hidden={value !== index}  style={{backgroundColor:'#c4c4cf'}}>
        {value === index && <Box>{children}</Box>}
      </div>
    );
  };


  const CustomTabs: React.FC = () => {
    const classes = useStyles();
    const [value, setValue] = useState<number>(0);
  
    const handleChange = (event:any, newValue: any) => {
      setValue(newValue);
    };
  
    return (
        <div  className={classes.customTabsContainer}>
        <Tabs                                                                       
     value={value} onChange={handleChange}
     TabIndicatorProps={{sx:{backgroundColor:'#c4c4cf'}}}
     >
          <Tab className={classes.tab} label="Traveler Lots" />
          <Tab className={classes.tab} label="Hardware Inventory" />
          <Tab className={classes.tab} label="BOM" />
          <Tab className={classes.tab} label="ERF" />
        </Tabs>
        
        <TabPanel value={value} index={0}>
       
      </TabPanel>
      <TabPanel value={value} index={1}>
      
      </TabPanel>
      <TabPanel value={value} index={2}>
       
      </TabPanel>
      <TabPanel value={value} index={3}>
       
      </TabPanel>
      </div>
    );
  };
    export default CustomTabs;
