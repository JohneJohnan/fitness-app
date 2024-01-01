import { Icon } from '@iconify/react';
import { Box, Button, FormControl, FormLabel, Input, Link, Sheet, Typography } from '@mui/joy';
import CssBaseline from '@mui/joy/CssBaseline';
import { useNavigate } from 'react-router-dom';


const inputStyles = {
  '--Input-paddingInline': '8px',
  '--Input-gap': '6px',
  '--Input-radius': '8px',
};
export { inputStyles };

export default function Login() {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          height: '100%',
          bgcolor: 'background.level1',
          display: 'grid',
          gridTemplateColumns: 'max-content',
          gridTemplateRows: 'max-content 1fr',
          placeContent: 'start center',
          placeItems: 'center',
        }}
      >
        <Sheet
          sx={{
            display: 'grid',
            placeContent: 'center',
            gridTemplateColumns: 'max-content max-content',
            gap: 0.5,
            py: 2,
            px: 3,
            // mt: 1,
            // borderRadius: 'lg',
            width: '100vw',
            borderBottom: '1px solid',
            borderColor: 'neutral.300',
            color: '#222',
            '& svg': {
              width: '42px !important',
              height: '42px !important',
              mr: '16px',
            },
          }}
        >
          <Typography level="h1">فیتنس</Typography>
          <Icon icon="mingcute:fitness-fill" />
        </Sheet>
        <Sheet
          variant="outlined"
          sx={{
            mx: 'auto',
            bgcolor: 'white',
            pr: 3.6,
            pl: 4.1,
            pt: 2.5,
            pb: 4,
            borderRadius: 'lg',
          }}
        >
          <Typography level="h2" sx={{ textAlign: 'center', mb: 5 }}>
            ورود
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'max-content 260px',
              columnGap: 2,
              rowGap: 4,
            }}
          >
            <Typography level="title-lg" sx={{ placeSelf: 'center end' }}>
              نام کاربری
            </Typography>
            <Input
              size="lg"
              startDecorator={<Icon icon="mdi:user" width="30" height="30" />}
              sx={{ ...inputStyles }}
            />
            {/* <Typography sx={{placeSelf: 'center end'}}>ایمیل</Typography> */}
            {/* <Input type= 'email' /> */}
            <Typography level="title-lg" sx={{ placeSelf: 'center end' }}>
              رمز عبور
            </Typography>
            <Input
              size="lg"
              type="password"
              sx={{ ...inputStyles }}
              startDecorator={<Icon icon="basil:key-solid" width="28" height="28" />}
            />
            {/* <Typography sx={{placeSelf: 'center end'}}>تکرار رمز</Typography>
            <Input type= 'email' /> */}
            <Button size="lg" sx={{ width: '100%', gridColumn: '1/3' }} onClick={()=>navigate('/exercises')}>
              ورود
            </Button>
          </Box>
          <Typography level="body-md" sx={{ mt: 5 }}>
            حساب کاربری ندارید؟
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mt: 2.5,
              justifyContent: 'space-between',
            }}
          >
            <Button size="lg" sx={{ px: 3.5 }} variant="soft" onClick={()=>navigate('/signup')}>
              ثبت نام کاربران
            </Button>
            <Button size="lg" sx={{ px: 3.5 }} variant="soft">
              ثبت نام مربیان
            </Button>
          </Box>
        </Sheet>
      </Box>
    </>
  );
}
