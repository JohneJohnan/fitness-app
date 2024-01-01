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
import { exercise } from '../../../dummyData';
import { useNavigate } from 'react-router-dom';

//delete
//open

//new
//difficulty

//rate
//calory

export default function Exercises() {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography level="h1">تمرین ها</Typography>
        <Button
          size="lg"
          endDecorator={<Icon icon="mingcute:add-fill" />}
          sx={{ '& svg': { ml: -2, mr: 1 } }}
          onClick={()=>navigate('new')}
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
        <Card
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
            <img src={exercise.mainImage}></img>
          </AspectRatio>
          <CardContent>
            <Typography level="title-lg" sx={{ mb: '8px' }}>
              {exercise.name}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <Typography level="body-md">عضلات درگیر:</Typography>
              {exercise.mainTargetMuscles.map((target, index) => (
                <Chip
                  key={index}
                  sx={{ borderColor: 'red', color: 'red' }}
                  startDecorator={<Icon icon="mdi:fire" />}
                  variant="outlined"
                >
                  {target}
                </Chip>
              ))}
              {exercise.secondaryTargetMuscles.map((target, index) => (
                <Chip
                  key={index}
                  sx={{ borderColor: 'blue', color: 'blue' }}
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
              <Button sx={{ flex: '1 1 auto' }} onClick={()=>navigate('0')}>مشاهده</Button>
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
                  onClick={()=>navigate('0/edit')}
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
      </Box>
    </>
  );
}
