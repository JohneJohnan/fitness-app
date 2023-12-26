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
  ButtonGroup,
} from '@mui/joy';
import { Icon } from '@iconify/react';

import { exercise } from '../../../dummyData';

const strengthLevels = ['تازه کار', 'مبتدی', 'متوسط', 'پیشرفته', 'خبره'];

export default function ViewExercise() {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography level="h1">{exercise.name}</Typography>
        {/* <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
          }}
        > */}
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
      <Divider sx={{ mt: 2, mb: 4 }}></Divider>

      {exercise.description.split('\n').map((line, i) => (
        <Typography key={i} level="body-lg" sx={{ textAlign: 'justify', my: 2 }}>
          {line}
        </Typography>
      ))}
      <AspectRatio
        variant="outlined"
        ratio={1}
        objectFit="cover"
        sx={{ borderRadius: 6, mt: 4, mb: 2, mx: 'auto', maxWidth: '520px' }}
      >
        <img src={exercise.mainImage}></img>
      </AspectRatio>
      <Typography level="h2" sx={{ mt: 4, mb: 2 }}>
        مراحل انجام {exercise.name}
      </Typography>
      <List component="ol" marker="decimal">
        {exercise.howToDescription.split('\n').map((step, i) => (
          <ListItem key={i}>{step}</ListItem>
        ))}
      </List>

      <Typography level="h2" sx={{ mt: 2 }}>
        عضلات درگیر در {exercise.name}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ flex: '1 1 0' }}>
          <Typography level="title-lg" sx={{ mt: 5, mb: 2 }}>
            عضلات درگیر اصلی:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {exercise.mainTargetMuscles.map((target, index) => (
              <Chip
                key={index}
                size="lg"
                sx={{ bgcolor: 'white', borderColor: 'red', color: 'red' }}
                startDecorator={<Icon icon="mdi:fire" />}
                variant="outlined"
              >
                {target}
              </Chip>
            ))}
          </Box>
          <Typography level="title-lg" sx={{ mt: 4, mb: 2 }}>
            عضلات درگیر فرعی:
          </Typography>
          <Box>
            {exercise.secondaryTargetMuscles.map((target, index) => (
              <Chip
                key={index}
                size="lg"
                sx={{ bgcolor: 'white', borderColor: 'blue', color: 'blue' }}
                startDecorator={<Icon icon="charm:tick" />}
                variant="outlined"
              >
                {target}
              </Chip>
            ))}
          </Box>
        </Box>
        <AspectRatio ratio={1} objectFit="cover" sx={{ flex: '1 1 0' }}>
          <img src={exercise.secondaryImage} />
        </AspectRatio>
      </Box>

      <Typography level="h2" sx={{mt: 2, mb: 4}}>وزن های استاندارد قدرت در {exercise.name}</Typography>
      <Sheet>
        
      </Sheet>
      <Table size='lg' variant='outlined' stripe='odd' sx={{ mx: 'auto', mb: 3, maxWidth: '560px', borderRadius: 4,'& th': {textAlign: 'start'}}}>
        <thead>
          <tr>
            <th>سطح قدرت</th>
            <th>مردان</th>
            <th>زنان</th>
          </tr>
        </thead>
        <tbody>
          {exercise.strengthStandardsTable.map((level, i) => (
            <tr key={i}>
              <td><strong>{strengthLevels[i]}</strong></td>
              <td>{level[0]}</td>
              <td>{level[1]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
