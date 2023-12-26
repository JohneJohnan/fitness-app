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
  Tabs,
  TabList,
  Tab,
  TabPanel,
  Divider,
  IconButton,
  Typography,
  Sheet,
} from '@mui/joy';
import { Rating } from '@mui/material';
import { styled as matStyled } from '@mui/material';
import { plans } from '../../../dummyData';
import { Icon } from '@iconify/react';
import { exercise } from '../../../dummyData';

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

export default function ViewPlan() {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography level="h1">{plans[0].name}</Typography>
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
      <Divider sx={{ mt: 2 }}></Divider>

      {/* <CardOverflow> */}

      <Box
        sx={{
          display: 'flex',
          mt: 3,
          gap: 3,
          justifyContent: 'space-between',
          bgcolor: 'neutral.100',
          p: 2,
          border: '1px solid',
          borderColor: 'primary.400',
          borderRadius: 10,
        }}
      >
        <Box sx={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', gap: 5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Typography level="h4">سطح برنامه</Typography>
            <StyledRating
              dir="ltr"
              icon={<Icon icon="mingcute:fitness-fill" fontSize="36px" />}
              emptyIcon={<Icon icon="mingcute:fitness-line" fontSize="36px" />}
              value={3}
              readOnly
            ></StyledRating>
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
              <Typography level="title-lg" sx={{ mr: 1 }}>
                <strong>{getDaysPerPlan(plans[0])} روز در هفته</strong>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', flex: '2 0 auto' }}>
              <Icon icon="material-symbols:exercise-outline" />
              <Typography level="title-lg" sx={{ mr: 1 }}>
                <strong>{getExercisesPerPlan(plans[0])} تمرین در هفته</strong>
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Typography level="h4">خصوصیات</Typography>
            <Box sx={{ display: 'flex', gap: 1.6 }}>
              {plans[0].tags.map((tag) => (
                <Chip
                  // sx={{mb: .4}}
                  key={tag}
                  size="lg"
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
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography level="h4">ساخته شده توسط</Typography>
            <Avatar variant="outlined" sx={{ width: '48px', height: '48px', mr: 4, ml: 1.2 }} />
            <Typography level="body-lg">فرد بی نام</Typography>
          </Box>
        </Box>
        <AspectRatio
          ratio={1}
          sx={{
            borderWidth: '1px',
            borderRadius: '10px',
            borderColor: 'neutral.400',
            borderStyle: 'solid',
            width: 270,
          }}
        >
          <img src={plans[0].pic}></img>
        </AspectRatio>
      </Box>

      <Tabs
        defaultValue="sat"
        size="lg"
        variant="outlined"
        sx={{
          mt: 5,
          mb: 1,
          borderRadius: 'lg',
          boxShadow: 'sm',
          overflow: 'auto',
        }}
      >
        <TabList sx={{ display: 'flex', '& > *': { flex: '1 0 max-content !important' } }}>
          <Tab value="sat" variant="soft" color="primary">
            شنبه
          </Tab>
          <Tab value="sun" variant="soft" color="primary">
            1 شنبه
          </Tab>
          <Tab value="mon" variant="soft" color="primary">
            2 شنبه
          </Tab>
          <Tab value="tue" variant="soft" color="primary">
            3 شنبه
          </Tab>
          <Tab value="wen" variant="soft" color="primary">
            4 شنبه
          </Tab>
          <Tab value="thu" variant="soft" color="primary">
            5 شنبه
          </Tab>
          <Tab value="fri" variant="soft" disabled>
            جمعه
          </Tab>
        </TabList>
        {['sat', 'sun', 'mon', 'tue', 'wen', 'thu'].map((dayLabel) => (
          <TabPanel key={dayLabel} value={dayLabel}>
            {!('exercises' in plans[0][dayLabel]) && (
              <Typography level="h4">جلسه ای در این روز وجود ندارد.</Typography>
            )}
            {'exercises' in plans[0][dayLabel] && (
              <>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography level="h4">ساعت شروع جلسه</Typography>
                  <Typography
                    variant="outlined"
                    level="h4"
                    sx={{ p: '2px 8px 0', mr: 2, borderRadius: 'md' }}
                  >
                    {' '}
                    {plans[0][dayLabel].minute < 10
                      ? '0' + plans[0][dayLabel].minute
                      : plans[0][dayLabel].minute}{' '}
                    :{' '}
                    {plans[0][dayLabel].hour < 10
                      ? '0' + plans[0][dayLabel].hour
                      : plans[0][dayLabel].hour}
                  </Typography>
                </Box>

                <Box>
                  {plans[0][dayLabel].exercises.map((ex, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: 'flex',
                        mt: 5,
                        gap: 2,
                        bgcolor: 'neutral.100',
                        p: 2,
                        border: '1px solid',
                        borderColor: 'primary.400',
                        borderRadius: 10,
                      }}
                    >
                      <AspectRatio
                        variant="outlined"
                        ratio={1}
                        color="neutral"
                        sx={{ borderRadius: '10px', width: 240 }}
                      >
                        <img src={exercise.mainImage}></img>
                      </AspectRatio>
                      <Box sx={{ width: 'max-content' }}>
                        <Box
                          sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '12px',
                            alignItems: 'center',
                            width: 'max-content',
                            mb: 2.2
                          }}
                        >
                          <Typography level="h3" sx={{ ml: 2 }}>
                            {ex.name}
                          </Typography>
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

                        <Box sx={{width: 'max-content'}}>
                          {ex.sets.map((set, i) => (
                            <Box
                              key={i}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                // justifyContent: 'space-between',
                                mt: 1.5,
                                px: 1,
                                py: 0.8,
                                border: '1px solid',
                                borderColor: '#9bf',
                                borderRadius: 10,
                                width: 483
                              }}
                            >
                              <Typography level="title-lg" sx={{flex: '0 0 120px'}}>ست {i + 1}</Typography>
                              <Box sx={{ display: 'flex', alignItems: 'center', flex: '0 0 115px' }}>
                                <Typography level="title-md">تکرار</Typography>
                                <Sheet
                                  sx={{
                                    bgcolor: '#f4f8fb',
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    borderColor: '#aac',
                                    borderRadius: 8,
                                    p: '3px 6px 0',
                                    mr: 1,
                                    ml: 2,
                                    '& > *': { lineHeight: '18px' },
                                  }}
                                >
                                  <Typography level="title-md">{set.reps}</Typography>
                                </Sheet>
                              </Box>
                              <Box sx={{ display: 'flex', alignItems: 'center', flex: '0 0 110px' }}>
                                <Typography level="title-md">وزن</Typography>
                                <Sheet
                                  sx={{
                                    bgcolor: '#f4f8fb',
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    borderColor: '#aac',
                                    borderRadius: 8,
                                    p: '3px 6px 0',
                                    mr: 1,
                                    ml: 2,
                                    '& > *': { lineHeight: '18px' },
                                  }}
                                >
                                  <Typography level="title-md">{set.weight}</Typography>
                                </Sheet>
                              </Box>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography level="title-md">استراحت</Typography>
                                <Sheet
                                  sx={{
                                    bgcolor: '#f4f8fb',
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    borderColor: '#aac',
                                    borderRadius: 8,
                                    p: '3px 6px 0',
                                    mr: 1,
                                    ml: 0,
                                    '& > *': { lineHeight: '18px' },
                                  }}
                                >
                                  <Typography level="title-md">{set.rest % 60 > 10 ? set.rest % 60 : '0' + set.rest % 60} : {Math.round(set.rest / 60)}</Typography>
                                </Sheet>
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </>
            )}
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
}
