import {
  AspectRatio,
  Box,
  IconButton,
  List,
  ListItem,
  Divider,
  Chip,
  Typography,
  Table,
  Sheet,
  Button,
  ButtonGroup,
  Snackbar,
} from '@mui/joy';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';

// import { exercise } from '../../../dummyData';
import { useNavigate, useParams } from 'react-router-dom';
import { exercises as exercisesApi } from '../../api';

const strengthLevels = ['تازه کار', 'مبتدی', 'متوسط', 'پیشرفته', 'خبره'];

export default function ViewExercise() {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [openSnackbar, setopenSnackbar] = useState(false);
  const navigate = useNavigate();
  const [exercises, setExercises] = useState([]);
  const [exercise, setExercise] = useState({});
  const { id } = useParams();

  useEffect(() => {
    exercisesApi({}).then((result) => {
      for (const key in result) {
        setExercises((prev) => [...prev, result[key]]);
      }
      setExercise(exercises[id]);
      console.log(result);
      console.log(exercises);
      setLoading(false);
    });
  }, []);

  return (
    <>
      
    </>
  );
}
