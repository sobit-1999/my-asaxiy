import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Box, Collapse, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import React from 'react'

export default function ListCard({item}) {
    const [open, setOpen] = React.useState(false);

    const handleClick = (e) => {
      setOpen(!open);
    };
  
  return (
    <div>
    <Box>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={item.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText
              primary={
                <Typography component="div" variant="p">
                  {item.text}
                </Typography>
              }
            />
          </ListItemButton>
        </List>
      </Collapse>
    </Box></div>
  )
}
