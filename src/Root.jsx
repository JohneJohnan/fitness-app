import * as React from 'react';
// import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import { Box, Sheet, Grid, Stack, Typography } from '@mui/joy';
import { Outlet } from 'react-router-dom';
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material/styles';
import { extendTheme, CssVarsProvider as JoyCssVarsProvider } from '@mui/joy/styles';

import SideBar from './assets/pages/layout/SideBar';
import Header from './assets/pages/layout/Header';

const materialTheme = materialExtendTheme();

export default function Root() {
  return (
    <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider>
        <CssBaseline enableColorScheme />
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
                <Outlet></Outlet>
              </Sheet>
            </Sheet>
          </Stack>
        </Stack>
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  );
}
