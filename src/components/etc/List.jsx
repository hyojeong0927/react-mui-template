import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/FiberManualRecord';
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function MixedList({
  component = 'ul',
  listValue = [],
  listItem = 'name',
  secondary,
  icon = 'none', // dot | bar | check | arrow | none
  showNumber = false, // false | "text" | "circle"
}) {
  const renderIcon = type => {
    switch (type) {
      case 'dot':
        return <CircleIcon sx={{ fontSize: 10, color: 'text.secondary' }} />;
      case 'bar':
        return (
          <Box
            sx={{
              width: 3,
              height: 16,
              bgcolor: 'text.secondary',
              borderRadius: 1,
            }}
          />
        );
      case 'check':
        return <CheckIcon sx={{ fontSize: 18, color: 'success.main' }} />;
      case 'arrow':
        return (
          <ArrowForwardIosIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
        );
      default:
        return null;
    }
  };

  return (
    <List
      component={component}
      sx={{
        p: 1.25,
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 1,
        listStyleType:
          component === 'ol' && showNumber === 'text' ? 'decimal' : 'none',
        pl: component === 'ol' && showNumber === 'text' ? 3 : 0,
      }}
    >
      {listValue.map((item, index) => {
        const currentIcon =
          typeof icon === 'string' ? icon : (icon[index] ?? 'none');

        // dl list
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

        // ol list
        if (component === 'ol') {
          return (
            <ListItem
              key={index}
              disablePadding
              sx={{
                display: 'flex',
                alignItems: 'center',
                pl: showNumber ? 0 : 2,
                gap: 1,
              }}
            >
              {showNumber === 'text' && (
                <Box
                  component="span"
                  sx={{
                    fontSize: 14,
                    color: 'text.secondary',
                    width: 20,
                    textAlign: 'right',
                  }}
                >
                  {index + 1}.
                </Box>
              )}

              {showNumber === 'circle' && (
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    color: 'white',
                    fontSize: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 500,
                  }}
                >
                  {index + 1}
                </Box>
              )}

              <ListItemText
                primary={item[listItem] ?? item}
                secondary={secondary ? 'Secondary text' : null}
              />
            </ListItem>
          );
        }

        // ul list
        return (
          <ListItem key={index} disablePadding>
            {currentIcon !== 'none' && (
              <ListItemIcon sx={{ minWidth: 24 }}>
                {renderIcon(currentIcon)}
              </ListItemIcon>
            )}
            <ListItemText
              primary={item[listItem] ?? item}
              secondary={secondary ? 'Secondary text' : null}
            />
          </ListItem>
        );
      })}
    </List>
  );
}
