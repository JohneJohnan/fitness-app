import {
  AspectRatio,
  Box,
  Button,
  Checkbox,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemDecorator,
  Typography,
} from '@mui/joy';
import { trainee } from '../../dummyData';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

export default function ViewProfile() {
  const navigate = useNavigate();
  const Id = 1234567890;
  return (
    <>
      <Box
        sx={{ display: 'flex', alignItems: 'center', gap: 3, justifyContent: 'space-between' }}
      >
        <Typography level="h1">{trainee.name}</Typography>
        {trainee.id === Id ? (
          <Button
            size="lg"
            variant="solid"
            endDecorator={<Icon icon="mdi:edit-outline" />}
            sx={{ pl: 1.2, '& svg': { ml: 0, mr: 1, fontSize: 20 } }}
            onClick={() => navigate('/editSignUp/')}
          >
            تغییر مشخصات
          </Button>
        ) : (
          ''
        )}
      </Box>
      <Divider sx={{ mt: 2, mb: 4 }}></Divider>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          bgcolor: 'neutral.100',
          mt: 3,
          // gap: 4,
          p: 2.5,
          pr: 3,
          border: '1px solid',
          borderColor: 'primary.400',
          borderRadius: 18,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
            width: 681,
            maxWidth: 681,
            minWidth: 681,
            // flexGrow: 1,
            // pl:4
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              gap: 7,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography level="h3">نام کاربری</Typography>
              <Box sx={{ pt: 0.4, mr: 2, ml: 6 }}>
                <Typography
                  level="h3"
                  sx={{
                    fontWeight: 'normal',
                    border: '2px solid',
                    borderColor: 'primary.400',
                    borderRadius: 'md',
                    p: '3px 10px 1px 8px',
                  }}
                >
                  {trainee.id}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
              <Typography level="h3" sx={{ ml: 2 }}>
                جنسیت
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '2px solid',
                  borderColor: 'primary.400',
                  borderRadius: 'md',
                  p: '1px 10px 3px 8px',
                  mt: 0.3,
                }}
              >
                <Typography level="h3" sx={{ fontWeight: 'normal', ml: 1.5 }}>
                  {trainee.gender}
                </Typography>
                {trainee.gender === 'مرد' ? (
                  <Icon icon="material-symbols:male-rounded" width="30" height="30" />
                ) : (
                  <Icon icon="tabler:gender-female" width="30" height="30" />
                )}
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              gap: 12,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography level="h3">قد</Typography>
              <Typography
                level="h3"
                sx={{
                  fontWeight: 'normal',
                  border: '2px solid',
                  borderColor: 'primary.400',
                  borderRadius: 'md',
                  p: '3px 14px 0px 12px',
                  mr: 2,
                  ml: 1,
                }}
              >
                {trainee.height}
              </Typography>
              <Typography level="body-sm" sx={{ width: 30, lineHeight: 1.25 }}>
                سانتی متر
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography level="h3">وزن</Typography>
              <Typography
                level="h3"
                sx={{
                  fontWeight: 'normal',
                  border: '2px solid',
                  borderColor: 'primary.400',
                  borderRadius: 'md',
                  p: '3px 14px 0px 12px',
                  mr: 2,
                  ml: 1,
                }}
              >
                {trainee.weight}
              </Typography>
              <Typography level="body-sm" sx={{ width: 30, lineHeight: 1.25 }}>
                کیلو گرم
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography level="h3">وزن هدف</Typography>
              <Typography
                level="h3"
                sx={{
                  fontWeight: 'normal',
                  border: '2px solid',
                  borderColor: 'primary.400',
                  borderRadius: 'md',
                  p: '3px 14px 0px 12px',
                  mr: 2,
                  ml: 1,
                }}
              >
                {trainee.targetWeight}
              </Typography>
              <Typography level="body-sm" sx={{ width: 30, lineHeight: 1.25 }}>
                کیلو گرم
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              gap: 8,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography level="h3">ایمیل</Typography>
              <Typography
                level="h3"
                sx={{
                  fontWeight: 'normal',
                  border: '2px solid',
                  borderColor: 'primary.400',
                  borderRadius: 'md',
                  p: '3px 14px 0px 12px',
                  mr: 2,
                  ml: 1,
                }}
              >
                {trainee.email}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 0.4 }}>
              <Typography level="h3">تلفن</Typography>
              <Typography
                level="h3"
                sx={{
                  fontWeight: 'normal',
                  border: '2px solid',
                  borderColor: 'primary.400',
                  borderRadius: 'md',
                  p: '3px 14px 0px 12px',
                  mr: 2,
                  ml: 1,
                }}
              >
                {trainee.phone}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              gap: 8,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Typography level="h3">خصوصیات</Typography>
              <Box sx={{ display: 'flex', gap: 1.6 }}>
                {trainee.tags.map((tag) => (
                  <Chip
                    // sx={{mb: .4}}
                    key={tag}
                    size="lg"
                    color="primary"
                    variant="outlined"
                    startDecorator={<Icon icon="mdi:tick" />}
                    // sx={{ bgcolor: 'white', borderColor: 'red', color: 'red' }}
                  >
                    {tag}
                  </Chip>
                ))}
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              gap: 3,
            }}
          >
            <Typography fontSize={23} sx={{ fontWeight: '600' }}>
              زمان های ارجح
            </Typography>
            <List
              // variant="outlined"
              role="group"
              orientation="horizontal"
              sx={{
                flexGrow: 0,
                '--List-gap': '8px',
                '--List-padding': '8px',
                '--List-radius': '8px',
                fontWeight: 'normal',
                border: '1px solid',
                borderColor: 'primary.500',
                borderRadius: 'md',
                p: '5px 6px',
                '& :hover': { cursor: 'default' },
              }}
            >
              {['صبح', 'عصر', 'شب'].map((item) => (
                <ListItem key={item} sx={{ '& input': { position: 'relative' }, '& *:hover': {bgcolor: 'inherit'} }}>
                  <Checkbox
                    disableIcon
                    overlay
                    label={item}
                    checked={trainee.preferredTimes.includes(item)}
                    color="neutral"
                    variant={trainee.preferredTimes.includes(item) ? 'outlined' : 'plain'}
                    slotProps={{
                      action: ({ checked }) => ({
                        sx: {
                          ':hover': {bgcolor: checked ? 'primary.100' : 'transparent'},
                          borderColor: checked ? 'primary.500' : 'red',
                          borderRadius: 7,
                          borderWidth: '2px',
                          bgcolor: checked ? 'primary.100' : 'transparent',
                        },
                      }),
                    }}
                  />
                  <ListItemDecorator
                    sx={{
                      zIndex: 2,
                      pointerEvents: 'none',
                      ...(trainee.preferredTimes.includes(item) && { color: 'text.primary' }),
                    }}
                  >
                    {
                      {
                        صبح: <Icon icon="mingcute:sunrise-line" />,
                        عصر: <Icon icon="mingcute:sunset-line" />,
                        شب: <Icon icon="akar-icons:moon" />,
                      }[item]
                    }
                  </ListItemDecorator>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
        <Box sx={{ flex: '0 0 16px' }}></Box>
        <AspectRatio
          ratio={1}
          sx={{
            borderWidth: '1px',
            borderRadius: 13,
            borderColor: 'neutral.400',
            borderStyle: 'solid',
            width: 360,
            minWidth: 358,
            maxWidth: 360,
            // flex: '0 0 360px'
          }}
        >
          <img src={trainee.pic}></img>
        </AspectRatio>
        {/* <Box sx={{width: 16}}></Box> */}
      </Box>
    </>
  );
}
