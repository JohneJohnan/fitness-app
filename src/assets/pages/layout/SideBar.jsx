import {
  List,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  Sheet,
  Typography,
} from '@mui/joy';
import { Icon } from '@iconify/react';
import { NavLink, useLocation } from 'react-router-dom';

const pages = [
  { title: 'پروفایل', link: '/viewProfile/0', icon: 'mingcute:profile-fill' }, //todo put self id for 0
  { title: 'برنامه ها', link: '/plans', icon: 'uis:schedule' },
  { title: 'تمرین ها', link: '/exercises', icon: 'material-symbols:exercise' },
  { title: 'مربی ها', link: '/coaches', icon: 'ph:baseball-cap-bold' },
];

// const pages = [
//   { title: 'پروفایل', link: '/viewProfile/0', icon: 'mingcute:profile-line' }, //todo put self id for 0
//   { title: 'برنامه ها', link: '/plans', icon: 'uil:schedule' },
//   { title: 'تمرین ها', link: '/exercises', icon: 'material-symbols:exercise-outline' },
//   { title: 'مربی ها', link: '/coaches', icon: 'ph:baseball-cap-bold' },
// ];

export default function SideBar() {
  return (
    <Sheet sx={{ bgcolor: 'rgb(120 180 250)' }}>
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
          sx={{
            mb: 4,
            // textAlign: 'center',
            px: 3.7,
            color: '#222',
            '&:hover': { cursor: 'default', backgroundColor: 'rgb(120 180 250) !important' },
            '& svg': {
              width: '46px !important',
              height: '46px !important',
              mr: -1,
            },
          }}
        >
          <ListItemContent>
            <Typography level="h1" fontSize={42}>
              فیتنس
            </Typography>
          </ListItemContent>
          <ListItemDecorator>
            <Icon icon="mingcute:fitness-fill" />
          </ListItemDecorator>
        </ListItemButton>

        {/* <ListDivider sx={{ mt: 1.5, mb: 2.2 }}></ListDivider> */}

        {pages.map((page, i) => {
          const location = useLocation();
          return (
            <NavLink
              key={i}
              to={page.link}
              style={{
                width: 240,
                textDecoration: 'none',
                backgroundColor: location.pathname.includes(page.link)
                  ? 'rgb(85, 163, 255)'
                  : '',
              }}
            >
              <ListItemButton
                sx={{
                  py: 2.5,
                  px: 3,
                  '&:hover': { backgroundColor: 'rgb(145 196 255) !important' },
                }}
              >
                <ListItemDecorator sx={{ color: '#222' }}>
                  <Icon icon={page.icon} />
                </ListItemDecorator>
                <ListItemContent>
                  <Typography level="h3" fontSize={26}>
                    {page.title}
                  </Typography>
                </ListItemContent>
              </ListItemButton>
            </NavLink>
          );
        })}
      </List>
    </Sheet>
  );
}
