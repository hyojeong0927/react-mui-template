import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function MixedList({
  component = 'ul',
  listValue = [],
  listItem = 'name',
}) {
  return (
    <List
      component={component}
      sx={{
        padding: '10px',
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      {listValue.map((item, index) => {
        if (component === 'dl') {
          return (
            <React.Fragment key={index}>
              <ListItem component="dt" disablePadding>
                <ListItemText primary={item.term} />
              </ListItem>
              <ListItem component="dd" disablePadding sx={{ pl: 2 }}>
                <ListItemText primary={item.desc} />
              </ListItem>
            </React.Fragment>
          );
        }
        if (component === 'ol') {
          <ListItem key={index} disablePadding>
            <ListItemText primary={item[listItem] ?? item} />
          </ListItem>;
        }
        return (
          <ListItem key={index} disablePadding>
            <ListItemText primary={item[listItem] ?? item} />
          </ListItem>
        );
      })}
    </List>
  );
}
