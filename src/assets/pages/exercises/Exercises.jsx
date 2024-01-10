import {
  AspectRatio,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Chip,
  Divider,
  IconButton,
  Typography,
} from '@mui/joy';
import { Icon } from '@iconify/react';
// import { exercises } from '../../../dummyData';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { exercises as exercisesApi } from '../../api';

// const exercises = [
//   {
//     creator_id: 3381202348,
//     difficulty: 4,
//     eid: 2,
//     main_muscles: ['دلتای جلو', 'سینه'],
//     public: null,
//     stages: '1.a2.b3.c',
//     sub_muscles: ['پشت بازو'],
//     summary: 'idk what to write',
//     title: 'پرس سینه',
//     weight_numbers_females: [1, 10, 3, 2, 5],
//     weight_numbers_males: [1, 2, 3, 4, 5],
//   },
// ];

export default function Exercises() {
  const navigate = useNavigate();
  // const usertype = useSelector((state) => state.user);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await exercisesApi({});
        setExercises([])
        for (const key in result) {
          setExercises((prev) => [...prev, result[key]]);
        }
        console.log(result);
        console.log(exercises);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  // console.log(usertype);

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography level="h1">تمرین ها</Typography>
        <Button
          size="lg"
          endDecorator={<Icon icon="mingcute:add-fill" />}
          sx={{ '& svg': { ml: -2, mr: 1 } }}
          onClick={() => navigate('new')}
        >
          تمرین جدید
        </Button>
      </Box>
      <Divider sx={{ mt: 2 }}></Divider>
      <Box
        sx={{
          p: '10px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '40px',
          mt: '24px',
        }}
      >
        {exercises.length === 0 && (
          <Typography level="h3" fontWeight="sm">
            هیچ تمرینی وجود ندارد!
          </Typography>
        )}
        {exercises.map((exercise, i) => (
          <Card
            key={i}
            size="md"
            sx={{
              borderWidth: '2px',
              borderRadius: '14px',
              borderColor: 'primary.500',
              backgroundColor: 'primary.50',
            }}
          >
            <AspectRatio
              ratio={1}
              sx={{
                borderWidth: '1px',
                borderRadius: '10px',
                borderColor: 'neutral.400',
                borderStyle: 'solid',
              }}
            >
              {/* <img src={exercise.mainImage}></img> */}
            </AspectRatio>
            <CardContent>
              <Typography level="title-lg" sx={{ mb: '8px' }}>
                {exercise.title}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <Typography level="body-md">عضلات درگیر:</Typography>
                {exercise['main_muscles'].map((target, index) => (
                  <Chip
                    key={index}
                    sx={{ borderColor: 'red', color: 'red', bgcolor: 'background.body' }}
                    startDecorator={<Icon icon="mdi:fire" />}
                    variant="outlined"
                  >
                    {target}
                  </Chip>
                ))}
                {exercise['sub_muscles'].map((target, index) => (
                  <Chip
                    key={index}
                    sx={{ borderColor: 'blue', color: 'blue', bgcolor: 'background.body' }}
                    startDecorator={<Icon icon="charm:tick" />}
                    variant="outlined"
                  >
                    {target}
                  </Chip>
                ))}
              </Box>
            </CardContent>
            <CardActions>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <Button
                  endDecorator={<Icon icon="carbon:view-filled" width="18px" height="18px" />}
                  sx={{ flex: '1 1 auto', alignItems: 'center', pl: 0, '& svg': { mr: 1 } }}
                  onClick={() => navigate(exercise.eid.toString())}
                >
                  مشاهده
                </Button>
                <Box sx={{ flex: '1.5 1 0' }}></Box>
                {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '1px' }}> */}
                <ButtonGroup sx={{ direction: 'ltr' }}>
                  <IconButton
                    size="lg"
                    variant="outlined"
                    sx={{
                      flex: '0 1 auto',
                      color: 'black',
                      borderColor: 'neutral.500',
                      '& svg': { width: '75%', height: '75%' },
                    }}
                  >
                    <Icon icon="mi:delete" />
                  </IconButton>
                  <IconButton
                    size="lg"
                    variant="outlined"
                    sx={{
                      flex: '0 1 auto',
                      color: 'black',
                      borderColor: 'neutral.500',
                      '& svg': { width: '80%', height: '80%' },
                    }}
                    onClick={() => navigate('0/edit')}
                  >
                    <Icon icon="mdi:edit-outline" />
                  </IconButton>
                  <IconButton
                    size="lg"
                    variant="outlined"
                    sx={{
                      flex: '0 1 auto',
                      color: 'red',
                      borderColor: '#bb7777',
                      '& svg': { width: '80%', height: '80%' },
                    }}
                  >
                    <Icon icon="ic:round-favorite" />
                  </IconButton>
                </ButtonGroup>
                {/* </Box> */}
              </Box>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
}
