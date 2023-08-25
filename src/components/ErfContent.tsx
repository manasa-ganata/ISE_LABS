import  { useState } from 'react';
import { ListItemIcon, ListItem, Collapse } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ErfComponent = () => {
  const [open, setOpen] = useState(false);

  const handleToggleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ListItem button onClick={handleToggleClick}>
        <ListItemIcon>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemIcon>
        <span>ERF</span>
      </ListItem>
      <Collapse in={open}>
        {/* Content to display when the icon is open */}
        <ListItem>
          <span>Menu Item 1</span>
        </ListItem>
        <ListItem>
          <span>Menu Item 2</span>
        </ListItem>
      </Collapse>
    </div>
  );
};

export default ErfComponent;
