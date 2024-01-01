import { Box, Divider, Typography } from '@mui/joy';
import { coaches } from '../../../dummyData';
import { Coach } from './ViewCoach';

export default function Coaches() {
  return (
    <>
      <Typography level="h1">مربیان</Typography>
      <Divider sx={{ mt: 2, mb: 5 }}></Divider>
      <Box sx={{ display: 'grid', gridAutoColumns: '1fr', gap: 5, mb: 1 }}>
        {coaches.map((coach, i) => (
          <Coach key={i} coach={coach} disablePayment />
        ))}
      </Box>
    </>
  );
}
