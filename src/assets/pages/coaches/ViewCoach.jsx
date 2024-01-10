import { AspectRatio, Box, Button, Chip, Divider, IconButton, Typography } from '@mui/joy';
import { coach } from '../../../dummyData';
import { Rating } from '@mui/material';
import { Icon } from '@iconify/react';
import Badge, { badgeClasses } from '@mui/joy/Badge';
import { useNavigate } from 'react-router-dom';

function Coach(props) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 3,
        justifyContent: 'space-between',
        bgcolor: 'neutral.100',
        p: 2,
        pr: 3,
        border: '1px solid',
        borderColor: 'primary.400',
        borderRadius: 18,
      }}
    >
      <Box
        sx={{
          // flex: '1 0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 4.2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', width: 'max-content' }}>
          <Typography level="h3">تخصص</Typography>
          <Typography level="h3" sx={{ fontWeight: 'normal', mr: 3 }}>
            {props.coach.speciality}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flex: '1 0 auto' }}>
            <Box
              sx={{
                border: '2px solid',
                borderColor: 'primary.400',
                borderRadius: 9999,
                fontWeight: 600,
                fontSize: '18px',
                // p: 1.2
                // lineHeight: 0,
                // p: '20px',
                pt: '9px',
                textAlign: 'center',
                width: 47,
                height: 47,
              }}
            >
              +{props.coach.experience}
            </Box>
            <Typography level="h4" sx={{ mr: 1.4, ml: 12 }}>
              سال تجربه
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', flex: '3 0 auto' }}>
            <Typography level="h4" sx={{ ml: 2 }}>
              امتیاز
            </Typography>
            <Rating size="large" dir="ltr" value={props.coach.rating} readOnly />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Typography level="h4">خصوصیات</Typography>
          <Box sx={{ display: 'flex', gap: 1.6 }}>
            {props.coach.tags.map((tag) => (
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
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography level="h4">هزینه</Typography>
            <Typography
              variant="outlined"
              color="primary"
              level="h4"
              sx={{
                p: '2px 8px 0',
                borderRadius: 'md',
                borderWidth: 2,
                borderColor: 'primary.500',
                mr: 3,
                ml: 1,
              }}
            >
              {props.coach.price}
            </Typography>
            <Typography level="body-xs" sx={{ width: 30 }}>
              هزار تومان
            </Typography>
          </Box>
          {!props.disablePayment && (
            <Button
              size="lg"
              sx={{ pr: 4, pl: 2, '& svg': { mr: 1 } }}
              endDecorator={<Icon icon="mingcute:card-pay-fill" width="20" height="20" />}
            >
              {/** todo */}
              پرداخت
            </Button>
          )}
          {props.disablePayment && (
            <Button
              size="lg"
              sx={{ pr: 4, pl: 2, '& svg': { mr: 1 } }}
              endDecorator={<Icon icon="carbon:view-filled" width="18px" height="18px" />}
              onClick={() => navigate(props.coach.id.toString())}
            >
              مشاهده
            </Button>
          )}
        </Box>
      </Box>
      <Badge
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeInset="1.5%"
        color="success"
        size="lg"
        sx={{
          [`& .${badgeClasses.badge}`]: {
            '&::after': {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              animation: 'ripple 1.2s infinite ease-in-out',
              border: '2px solid',
              borderColor: 'success.500',
              content: '""',
            },
          },
          '@keyframes ripple': {
            '0%': {
              transform: 'scale(1)',
              opacity: 1,
            },
            '100%': {
              transform: 'scale(2)',
              opacity: 0,
            },
          },
        }}
      >
        <AspectRatio
          ratio={1}
          sx={{
            borderWidth: '1px',
            borderRadius: 13,
            borderColor: 'neutral.400',
            borderStyle: 'solid',
            width: 256,
          }}
        >
          <img src={props.coach.pic}></img>
        </AspectRatio>
      </Badge>
    </Box>
  );
}
export { Coach };

export default function ViewCoach() {
  return (
    <>
      <Typography level="h1">{coach.name}</Typography>
      <Divider sx={{ mt: 2, mb: 5 }}></Divider>
      <Coach coach={coach} />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mt: 4,
          border: '2px solid',
          borderColor: 'green',
          borderRadius: 18,
          px: 3,
          py: 2,
          width: 'max-content',
          gap: 16,
          mx: 'auto',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography level="h3">ایمیل</Typography>
          <Typography fontSize={21}>{coach.email}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography level="h3">تلفن</Typography>
          <Typography fontSize={21}>{coach.phone}</Typography>
        </Box>
      </Box>

      <Box sx={{ mt: 4, mb: 1 }}>
        {coach.description.split('\n').map((line, i) => (
          <Typography key={i} fontSize={21} sx={{ textAlign: 'justify', mt: 1 }}>
            {line}
          </Typography>
        ))}
      </Box>
    </>
  );
}
