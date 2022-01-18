import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MovieIcon from '@material-ui/icons/Movie';
import WhatshotIcon from '@material-ui/icons/Whatshot';

import TVIcon from '@material-ui/icons/Tv';
//import { useHistory } from "react-router-dom";





const useStyles = makeStyles({
  root: {
    width: 600, 
    position: "relative",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
    
  },
});

export default function SearchFooter() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  

  

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction 
      style={{ color: "white" }} label="Trending" icon={<WhatshotIcon />} />
      <BottomNavigationAction 
      style={{ color: "white" }} label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction 
      style={{ color: "white" }} label="Movies" icon={<MovieIcon />} />
      <BottomNavigationAction 
      style={{ color: "white" }} label="Series" icon={<TVIcon />} />
      
    </BottomNavigation>
  );
}