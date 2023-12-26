import {
  Box,
  List,
  ListDivider,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  Sheet,
  Typography,
} from '@mui/joy';
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';

//{title:'', link:'', icon:''}
const pages = [
  { title: 'تمرین ها', link: '/exercises', icon: 'material-symbols:exercise' },
  { title: 'برنامه', link: '/plan', icon: 'uis:schedule' },
];

export default function SideBar() {
  return (
    <Sheet sx={{ bgcolor: 'rgb(120 180 250)', p: '10px 20px 10px 40px' }}>
      <List
        sx={{
          '--ListItemDecorator-size': '53px',
          '& svg': {
            width: '30px',
            height: '30px',
          },
        }}
      >
        <ListItemButton
          key="fitness"
          sx={{
            color: '#222',
            '& svg': {
              width: '42px !important',
              height: '42px !important',
              mr: '16px',
            },
          }}
        >
          <ListItemContent>
            <Typography level="h1">فیتنس</Typography>
          </ListItemContent>
          <ListItemDecorator>
            <Icon icon="mingcute:fitness-fill" />
          </ListItemDecorator>
        </ListItemButton>

        <ListDivider sx={{ mt: 2, mb: 2.2 }}></ListDivider>

        {pages.map((page, i) => {
          return (
            <ListItemButton key={i} sx={{my: 1}}>
              <ListItemDecorator sx={{ color: '#222' }}>
                <Icon icon={page.icon} />
              </ListItemDecorator>
              <ListItemContent>
                <Typography level="h3">{page.title}</Typography>
              </ListItemContent>
            </ListItemButton>
          );
        })}
      </List>
    </Sheet>
  );
}
