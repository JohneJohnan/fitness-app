import { Sheet, Stack } from '@mui/joy';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import Header from './Header';

export default function LoggedInRoot() {
  return (
    <Stack direction="row" sx={{ height: '100%' }}>
      <SideBar></SideBar>
      <Stack sx={{ width: '100%' }}>
        <Header></Header>
        <Sheet sx={{ p: 4, bgcolor: 'background.level2', height: '100%', overflow: 'auto' }}>
          <Sheet
            sx={{
              p: '24px 32px',
              bgcolor: 'white',
              borderRadius: 'lg',
              boxShadow: 'sm',
              minHeight: '100%',
            }}
          >
            <Outlet />
          </Sheet>
        </Sheet>
      </Stack>
    </Stack>
  );
}
