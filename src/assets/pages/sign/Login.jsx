import { Icon } from '@iconify/react';
import { Box, Button, Input, Sheet, Snackbar, Typography } from '@mui/joy';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../store/user';
import { login } from '../../api';
import { isValidNumber, isValidString } from '../../utils';

const inputStyles = {
  '--Input-paddingInline': '8px',
  '--Input-gap': '6px',
  '--Input-radius': '8px',
};
export { inputStyles };

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [openSnackbar, setopenSnackbar] = useState(false);
  const [snackbarContent, setSnackbarContent] = useState('');
  const [usernameValid, setUsernameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

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
              error={!usernameValid}
              size="lg"
              startDecorator={<Icon icon="mdi:user" width="30" height="30" />}
              sx={{ ...inputStyles }}
              slotProps={{ input: { ref: usernameRef } }}
            />
            <Typography level="title-lg" sx={{ placeSelf: 'center end' }}>
              رمز عبور
            </Typography>
            <Input
              error={!passwordValid}
              size="lg"
              type="password"
              sx={{ ...inputStyles }}
              slotProps={{ input: { ref: passwordRef } }}
              startDecorator={<Icon icon="basil:key-solid" width="28" height="28" />}
            />
            <Button
              size="lg"
              sx={{ width: '100%', gridColumn: '1/3' }}
              onClick={async () => {
                if (!isValidNumber(Number(usernameRef.current.value))) {
                  setUsernameValid(false);
                  setSnackbarContent('نام کاربری نامعتبر است! (باید عدد باشد)');
                  setopenSnackbar(true);
                  return;
                }
                if (!isValidString(passwordRef.current.value)) {
                  setPasswordValid(false);
                  setSnackbarContent('رمز عبور را وارد کنید!');
                  setopenSnackbar(true);
                  return;
                }
                const data = await login({
                  id: Number(usernameRef.current.value),
                  password: passwordRef.current.value,
                });
                if ('error' in data) {
                  setPasswordValid(false);
                  setUsernameValid(false);
                  setSnackbarContent(data.error);
                  setopenSnackbar(true);
                } else {
                  //   localStorage.setItem('token', response.json().token);
                  dispatch(userActions.changeUser(data));
                  navigate('/exercises');
                }
              }}
            >
              ورود
            </Button>
            <Snackbar
              variant="soft"
              color="danger"
              size="lg"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              startDecorator={<Icon icon="clarity:error-solid" width="24px" height="24px" />}
              open={openSnackbar}
              autoHideDuration={2000}
              onClose={() => setopenSnackbar(false)}
            >
              {snackbarContent}
            </Snackbar>
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
            <Button
              size="lg"
              sx={{ px: 3.5 }}
              variant="soft"
              onClick={() => navigate('/signup?usertype=trainee')}
            >
              ثبت نام کاربران
            </Button>
            <Button
              size="lg"
              sx={{ px: 3.5 }}
              variant="soft"
              onClick={() => navigate('/signup?usertype=coach')}
            >
              ثبت نام مربیان
            </Button>
          </Box>
        </Sheet>
      </Box>
    </>
  );
}
