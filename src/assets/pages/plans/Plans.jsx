import {
  AspectRatio,
  Avatar,
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
import { Rating } from '@mui/material';
import { styled as matStyled } from '@mui/material';
import { plans } from '../../../dummyData';
import { Icon } from '@iconify/react';
import { NavLink, useNavigate } from 'react-router-dom';

const StyledRating = matStyled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#eb7134',
  },
  '& .MuiRating-iconHover': {
    color: '#ff5500',
  },
  '& .MuiRating-iconEmpty': {
    color: '#777',
  },
});

function getDaysPerPlan(plan) {
  return ['sat', 'sun', 'mon', 'tue', 'wen', 'thu'].reduce((count, dayLabel) => {
    if ('hour' in plan[dayLabel]) return count + 1;
    else return count;
  }, 0);
}
function getExercisesPerPlan(plan) {
  return ['sat', 'sun', 'mon', 'tue', 'wen', 'thu'].reduce((count, dayLabel) => {
    if ('exercises' in plan[dayLabel]) return count + plan[dayLabel].exercises.length;
    else return count;
  }, 0);
}

export default function Plans() {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography level="h1">برنامه ها</Typography>
        <Button
          size="lg"
          endDecorator={<Icon icon="mingcute:add-fill" />}
          sx={{ '& svg': { ml: -2, mr: 1 } }}
          onClick={() => navigate('new/')}
        >
          برنامه جدید
        </Button>
      </Box>
      <Divider sx={{ mt: 2 }}></Divider>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          mt: '24px',
        }}
      >
        {plans.map((plan, i) => (
          <Card
            key={i}
            orientation="horizontal"
            size="sm"
            sx={{
              borderWidth: '2px',
              borderRadius: '14px',
              borderColor: 'primary.500',
              backgroundColor: 'primary.50',
              // width:700
              // '& :hover': { cursor: 'pointer' },
            }}
          >
            {/* <CardOverflow> */}
            <AspectRatio
              ratio={1}
              sx={{
                borderWidth: '1px',
                borderRadius: '10px',
                borderColor: 'neutral.400',
                borderStyle: 'solid',
                width: 150,
              }}
            >
              <NavLink to={plan.id.toString()} style={{ textDecoration: 'none' }}>
                <img src={plan.pic}></img>
              </NavLink>
            </AspectRatio>
            {/* </CardOverflow> */}
            <Box sx={{ width: '100%', display: 'grid', mr: 1 }}>
              <CardContent>
                <NavLink
                  to={plan.id.toString()}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flex: '1 0 auto' }}>
                      <Box sx={{ display: 'flex' }}>
                        <Typography level="h2" sx={{ mb: '8px', flex: '1 0 auto' }}>
                          {plan.name}
                        </Typography>
                        <Box sx={{ flex: '2 0 auto' }}>
                          <StyledRating
                            dir="ltr"
                            icon={<Icon icon="mingcute:fitness-fill" fontSize="36px" />}
                            emptyIcon={<Icon icon="mingcute:fitness-line" fontSize="36px" />}
                            value={3}
                            readOnly
                          ></StyledRating>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          mt: 0.5,
                          display: 'flex',
                          alignItems: 'center',
                          '& svg': { fontSize: 24 },
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', flex: '1 0 auto' }}>
                          <Icon icon="gravity-ui:calendar" />
                          <Typography level="title-md" sx={{ mr: 1 }}>
                            <strong>{getDaysPerPlan(plan)} روز در هفته</strong>
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', flex: '2 0 auto' }}>
                          <Icon icon="material-symbols:exercise-outline" />{' '}
                          <Typography level="title-md" sx={{ mr: 1 }}>
                            <strong>{getExercisesPerPlan(plan)} تمرین در هفته</strong>
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    {/** todo */}
                    <Avatar
                      variant="outlined"
                      sx={{ width: '48px', height: '48px', mx: 1 }}
                    ></Avatar>
                  </Box>
                </NavLink>
                <Box
                  sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}
                >
                  <NavLink
                    to={plan.id.toString()}
                    style={{
                      textDecoration: 'none',
                      display: 'flex',
                      alignSelf: 'stretch',
                      flex: '1 0 auto',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignSelf: 'end', gap: 1.3 }}>
                      {plan.tags.map((tag) => (
                        <Chip
                          // sx={{mb: .4}}
                          key={tag}
                          size="md"
                          color="danger"
                          variant="outlined"
                          startDecorator={<Icon icon="mdi:fire" />}
                          // sx={{ bgcolor: 'white', borderColor: 'red', color: 'red' }}
                          // startDecorator={<Icon icon="mdi:fire" />}
                        >
                          {tag}
                        </Chip>
                      ))}
                    </Box>
                  </NavLink>
                  <CardActions>
                    <ButtonGroup sx={{ direction: 'ltr', bgcolor: 'white' }}>
                      <IconButton
                        size="md"
                        variant="outlined"
                        sx={{
                          flex: '0 1 auto',
                          color: 'black',
                          borderColor: 'neutral.500',
                          '& svg': { width: '75%', height: '75%' },
                        }} //todo plus the same in view plan
                      >
                        <Icon icon="mi:delete" />
                      </IconButton>
                      <IconButton
                        size="md"
                        variant="outlined"
                        sx={{
                          flex: '0 1 auto',
                          color: 'black',
                          borderColor: 'neutral.500',
                          '& svg': { width: '80%', height: '80%' },
                        }}
                        onClick={() => navigate(plan.id.toString() + '/edit')}
                      >
                        <Icon icon="mdi:edit-outline" />
                      </IconButton>
                      <IconButton
                        size="md"
                        variant="outlined"
                        sx={{
                          flex: '0 1 auto',
                          color: plan.isFavorite ? 'red' : '#333',
                          borderColor: plan.isFavorite ? '#bb7777' : 'neutral.500',
                          '& svg': { width: '80%', height: '80%' },
                        }}
                      >
                        <Icon icon="ic:round-favorite" />
                      </IconButton>
                    </ButtonGroup>
                  </CardActions>
                </Box>
              </CardContent>
            </Box>
          </Card>
        ))}
      </Box>
    </>
  );
}
