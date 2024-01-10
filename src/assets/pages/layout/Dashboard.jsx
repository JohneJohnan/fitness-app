import { Sheet, Typography } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/exercises');
  }, []);
}
