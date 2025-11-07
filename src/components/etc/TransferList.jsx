import { useTransferList } from './useTransferList';

import {
  Button,
  Grid,
  Checkbox,
  Card,
  CardHeader,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';

export default function TransferList({ leftData, rightData, onChange }) {
  const {
    left,
    right,
    leftChecked,
    rightChecked,
    toggle,
    toggleAll,
    moveItems,
    setLeft,
    setRight,
  } = useTransferList(leftData, rightData, onChange);

  const renderList = (title, items) => {
    const isLeftList = items === left;
    const checkedList = isLeftList ? leftChecked : rightChecked;
    return (
      <Card>
        <CardHeader
          avatar={
            <Checkbox
              onClick={() => toggleAll(items)}
              checked={
                items.length !== 0 && checkedList.length === items.length
              }
              indeterminate={
                checkedList.length !== items.length && checkedList.length !== 0
              }
              disabled={items.length === 0}
            />
          }
          title={title}
        />
        <Divider />
        <List>
          {items.map(item => (
            <ListItemButton key={item.id} onClick={() => toggle(item)}>
              <ListItemIcon>
                <Checkbox checked={checkedList.some(i => i.id === item.id)} />
              </ListItemIcon>
              <ListItemText primary={item.value} />
            </ListItemButton>
          ))}
        </List>
      </Card>
    );
  };

  return (
    <Grid container spacing={2} alignItems="baseline" justifyContent="center">
      <Grid sx={{ flex: '1' }}>{renderList('Left', left)}</Grid>

      <Grid>
        <Grid container direction="column" alignItems="center">
          <Button
            onClick={() => moveItems(left, setLeft, right, setRight, left)}
            disabled={!left.length}
          >
            ≫
          </Button>
          <Button
            onClick={() =>
              moveItems(left, setLeft, right, setRight, leftChecked)
            }
            disabled={!leftChecked.length}
          >
            &gt;
          </Button>
          <Button
            onClick={() =>
              moveItems(right, setRight, left, setLeft, rightChecked)
            }
            disabled={!rightChecked.length}
          >
            &lt;
          </Button>
          <Button
            onClick={() => moveItems(right, setRight, left, setLeft, right)}
            disabled={!right.length}
          >
            ≪
          </Button>
        </Grid>
      </Grid>

      <Grid sx={{ flex: '1' }}>{renderList('Right', right)}</Grid>
    </Grid>
  );
}
