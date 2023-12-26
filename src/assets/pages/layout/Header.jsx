import { Avatar, Box, IconButton, Sheet, Stack, Typography } from '@mui/joy';
import { header } from '../../../dummyData.js';
import { calculateSize } from '@iconify/react';
import { Icon } from '@iconify/react';

export default function Header() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        p: '10px 15px',
        borderBottomStyle: 'solid',
        borderBottomWidth: '.1px',
        borderBottomColor: 'primary.300',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
        }}
      >
        <Box>
          <Avatar src={header.avatar} sx={{ width: '48px', height: '48px' }}></Avatar>
        </Box>
        <Stack>
          <Typography level="body-md">
            {header.fname} {header.lname}
          </Typography>
          <Typography level="title-lg">خوش آمدید!</Typography>
        </Stack>
      </Box>
      <Stack
        direction="row"
        alignContent="center"
        gap="24px"
        sx={{
          '& > *': { width: '44px', height: '44px' },
          svg: { width: '32px', height: '32px' },
        }}
      >
        <IconButton>
          <Icon icon="heroicons:envelope" />
        </IconButton>
        <IconButton>
          <Icon icon="ph:bell" />
        </IconButton>
        <IconButton sx={{ '& svg': {transform: 'rotate(180deg)', width: '80%'} }}>
          <Icon icon="icon-park-outline:logout" />
        </IconButton>
      </Stack>
    </Stack>
  );
}
