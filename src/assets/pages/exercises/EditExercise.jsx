import { Typography, Box } from "@mui/joy";
import { Icon } from '@iconify/react';

export default function EditExercise() {
  return <>
  <Box sx={{display: 'flex'}}>
  <Icon icon="mdi:edit-outline" />
  <Typography level='h1'>تغییر</Typography>
  </Box>
  </>;
}
