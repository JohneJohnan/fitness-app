import { useEffect, useRef, useState } from 'react';
import {
  AspectRatio,
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Input,
  List,
  ListItem,
  ListItemDecorator,
  Radio,
  RadioGroup,
  Sheet,
  Snackbar,
  Step,
  StepButton,
  StepIndicator,
  Stepper,
  Textarea,
  Typography,
} from '@mui/joy';
import { Icon } from '@iconify/react';
import { styled } from '@mui/joy';
import pic from '../../images/images.jfif';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { signup } from '../../api';
import { userActions } from '../../store/user';
import { useDispatch, useSelector } from 'react-redux';
import { isValidNumber, isValidString } from '../../utils';

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const inputStyles = {
  // '--Input-paddingInline': '8px',
  '--Input-gap': '6px',
  '--Input-radius': '8px',
};

export default function Signup() {
  const dispatch = useDispatch();

  const usertype = useSelector((state) => state.user);

  const [activeStep, setActiveStep] = useState(1);
  const [openSnackbar, setopenSnackbar] = useState(false);
  const [snackbarContent, setSnackbarContent] = useState('');

  const name = useRef('');
  const email = useRef('');
  const phone = useRef('');
  const id = useRef('');
  const password = useRef('');
  const password2 = useRef('');
  // const pic = useRef('');

  const height = useRef('');
  const weight = useRef('');
  const targetWeight = useRef('');
  const [genderValue, setGenderValue] = useState('');
  const [timesValue, setTimesValue] = useState([]);
  const [tagsValue, setTags] = useState([]);

  const speciality = useRef('');
  const experience = useRef('');
  const [availableValue, setAvailableValue] = useState('');
  const price = useRef('');
  const description = useRef('');

  const [searchParams] = useSearchParams();
  const isCoach = searchParams.get('usertype') === 'coach';

  const navigate = useNavigate();
  // useEffect(() => {
  //   console.log(usertype);
  // });

  function NextButton() {
    return (
      <Button
        onClick={() => setActiveStep((prev) => prev + 1)}
        size="lg"
        sx={{ width: '100%', gridColumn: '1/3' }}
      >
        بعدی
      </Button>
    );
  }

  function FinishButton() {
    return (
      <Button
        size="lg"
        sx={{ width: '100%', gridColumn: '1/3' }}
        onClick={async () => {
          if (!isValidString(name.current.value)) {
            setSnackbarContent('نام خود را تایپ کنید!');
            setopenSnackbar(true);
            return;
          }
          if (!isValidString(email.current.value)) {
            setSnackbarContent('ایمیل خود را تایپ کنید!');
            setopenSnackbar(true);
            return;
          }
          if (
            !isValidNumber(Number(phone.current.value)) ||
            !isValidString(phone.current.value)
          ) {
            setSnackbarContent('شماره تلفن را به درستی وارد کنید!');
            setopenSnackbar(true);
            return;
          }
          if (!isValidNumber(Number(id.current.value))) {
            setSnackbarContent('کد ملی نامعتبر است! (باید عدد باشد)');
            setopenSnackbar(true);
            return;
          }
          if (!isValidString(password.current.value)) {
            setSnackbarContent('رمز عبور را تایپ کنید!');
            setopenSnackbar(true);
            return;
          }
          if (!isValidString(password2.current.value)) {
            setSnackbarContent('تکرار رمز عبور را تایپ کنید!');
            setopenSnackbar(true);
            return;
          }

          if (isCoach) {
            if (!isValidString(speciality.current.value)) {
              setSnackbarContent('تخصص خود را تایپ کنید!');
              setopenSnackbar(true);
              return;
            }
            if (!isValidNumber(Number(experience.current.value))) {
              setSnackbarContent('تجربه خود را وارد کنید!');
              setopenSnackbar(true);
              return;
            }
            if (!isValidNumber(Number(price.current.value))) {
              setSnackbarContent('هزینه را وارد کنید!');
              setopenSnackbar(true);
              return;
            }
            if (!isValidString(availableValue)) {
              setSnackbarContent('وضعیت در دسترس بودن را انتخاب کنید!');
              setopenSnackbar(true);
              return;
            }
            if (!isValidString(description.current.value)) {
              setSnackbarContent('توضیحات را تایپ کنید!');
              setopenSnackbar(true);
              return;
            }
          } else {
            if (!isValidNumber(Number(height.current.value))) {
              setSnackbarContent('قد خود را وارد کنید!');
              setopenSnackbar(true);
              return;
            }
            if (!isValidNumber(Number(weight.current.value))) {
              setSnackbarContent('وزن خود را وارد کنید!');
              setopenSnackbar(true);
              return;
            }
            if (!isValidNumber(Number(targetWeight.current.value))) {
              setSnackbarContent('وزن دلخواه خود را وارد کنید!');
              setopenSnackbar(true);
              return;
            }
            if (!isValidString(genderValue)) {
              setSnackbarContent('جنسیت خود را انتخاب کنید!');
              setopenSnackbar(true);
              return;
            }
          }
          let body = {
            id: Number(id.current.value),
            account_type: isCoach ? 'C' : 'T',
            password: password.current.value,
            repassword: password2.current.value,
            full_name: name.current.value,
            phone_number: phone.current.value,
            email: email.current.value,
          };
          if (isCoach) {
            body = {
              ...body,
              speciality: speciality.current.value,
              experience: Number(experience.current.value),
              price: Number(price.current.value),
              avalaible: availableValue === 'هستم' ? 'y' : 'n',
              pref_tags: tagsValue,
              description: description.current.value,
            };
          } else {
            body = {
              ...body,
              height: Number(height.current.value),
              weight: Number(weight.current.value),
              desired_weight: Number(targetWeight.current.value),
              gender: genderValue === 'مرد' ? 'm' : 'f',
              pref_time: [
                timesValue.includes('صبح') ? 1 : 0,
                timesValue.includes('عصر') ? 1 : 0,
                timesValue.includes('شب') ? 1 : 0,
              ],
              like_tags: tagsValue,
            };
          }
          const data = await signup(body);
          // console.log(data);
          if ('error' in data) {
            setSnackbarContent(data.error);
            setopenSnackbar(true);
          } else {
            //   localStorage.setItem('token', response.json().token);
            dispatch(userActions.changeUser(data));
            navigate('/exercises');
          }

          // console.log(name.current.value);
          // console.log(email.current.value);
          // console.log(phone.current.value);
          // console.log(id.current.value);
          // console.log(password.current.value);
          // console.log(password2.current.value);

          // console.log(height.current.value);
          // console.log(weight.current.value);
          // console.log(targetWeight.current.value);
          // console.log(genderValue);
          // console.log(timesValue);

          // console.log(tagsValue);

          // console.log(speciality.current.value);
          // console.log(experience.current.value);
          // console.log(price.current.value);
          // console.log(availableValue);
          // console.log(description.current.value);
        }}
      >
        اتمام
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
      </Button>
    );
  }

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
            pt: 3.5,
            pb: 4.5,
            borderRadius: 'lg',
          }}
        >
          <Typography level="h2" sx={{ textAlign: 'center', mb: 5 }}>
            ثبت نام
          </Typography>
          <Box
            sx={{
              display: activeStep === 1 ? 'grid' : 'none',
              gridTemplateColumns: 'max-content 1fr',
              columnGap: 2.4,
              rowGap: 4,
              width: 360,
            }}
          >
            <Typography level="title-lg" sx={{ placeSelf: 'center end' }}>
              نام کامل
            </Typography>
            <Input slotProps={{ input: { ref: name } }} size="lg" sx={{ ...inputStyles }} />

            <Typography level="title-lg" sx={{ placeSelf: 'center end' }}>
              ایمیل
            </Typography>
            <Input slotProps={{ input: { ref: email } }} size="lg" sx={{ ...inputStyles }} />
            <Typography level="title-lg" sx={{ placeSelf: 'center end' }}>
              تلفن
            </Typography>
            <Input slotProps={{ input: { ref: phone } }} size="lg" sx={{ ...inputStyles }} />
            <NextButton />
          </Box>

          <Box
            sx={{
              display: activeStep === 2 ? 'grid' : 'none',
              gridTemplateColumns: 'max-content 1fr',
              columnGap: 2.4,
              rowGap: 4,
              width: 360,
            }}
          >
            <Typography level="title-lg" sx={{ placeSelf: 'center end' }}>
              کد ملی
            </Typography>
            <Input slotProps={{ input: { ref: id } }} size="lg" sx={{ ...inputStyles }} />
            <Box sx={{ mt: -3.5 }}></Box>
            <Typography level="body-sm" sx={{ mt: -3.5 }}>
              به عنوان نام کاربری استفاده می شود.
            </Typography>
            <Typography level="title-lg" sx={{ placeSelf: 'center end', mt: -2.5 }}>
              رمز عبور
            </Typography>
            <Input
              slotProps={{ input: { ref: password } }}
              size="lg"
              type="password"
              sx={{ ...inputStyles, mt: -2 }}
            />
            <Typography level="title-lg" sx={{ placeSelf: 'center end' }}>
              تکرار رمز
            </Typography>
            <Input
              slotProps={{ input: { ref: password2 } }}
              size="lg"
              type="password"
              sx={{ ...inputStyles }}
            />
            <NextButton />
          </Box>

          <Box
            sx={{
              display: activeStep === 3 ? 'grid' : 'none',
              gridTemplateColumns: 'max-content 1fr',
              columnGap: 9,
              rowGap: 4,
              mt: -0.5,
              width: 360,
            }}
          >
            <Typography level="title-lg" sx={{ placeSelf: 'center end' }}>
              تصویر پروفایل
            </Typography>
            <Button
              size="lg"
              component="label"
              role={undefined}
              tabIndex={-1}
              variant="outlined"
              color="neutral"
              endDecorator={<Icon icon="mdi:cloud-upload-outline" />}
              sx={{ px: 5, '& svg': { mr: 1.6, ml: -1.9, width: '24px', height: '24px' } }}
            >
              آپلود فایل <VisuallyHiddenInput type="file" />
            </Button>
            <Typography
              level="body-md"
              startDecorator={<Icon icon="ph:warning-circle-bold" width="21" height="21" />}
              sx={{ mt: -2, gridColumn: '1/3' }}
            >
              نسبت تصویر 1:1 باشد.
            </Typography>
            <AspectRatio
              ratio="1"
              sx={{
                gridColumn: '1/3',
                mt: -0.5,
                justifySelf: 'center',
                width: 240,
                borderWidth: '1px',
                borderRadius: '9px',
                borderColor: 'neutral.400',
                borderStyle: 'solid',
              }}
            >
              <img src={pic} />
            </AspectRatio>
            <NextButton />
          </Box>

          <Box
            sx={{
              display: !isCoach && activeStep === 4 ? 'grid' : 'none',
              gridTemplateColumns: 'max-content 1fr',
              columnGap: 2.4,
              rowGap: 4,
              width: 360,
            }}
          >
            <Typography level="title-lg" sx={{ placeSelf: 'center end' }}>
              قد (سانتی متر)
            </Typography>
            <Input
              size="lg"
              type="number"
              sx={{ ...inputStyles }}
              slotProps={{ input: { min: 0, max: 300, ref: height } }}
            />
            <Typography level="title-lg" sx={{ placeSelf: 'center end' }}>
              وزن (کیلوگرم)
            </Typography>
            <Input
              size="lg"
              type="number"
              sx={{ ...inputStyles }}
              slotProps={{ input: { min: 0, max: 300, ref: weight } }}
            />
            <Typography level="title-lg" sx={{ placeSelf: 'center end' }}>
              وزن دلخواه شما
            </Typography>
            <Input
              size="lg"
              type="number"
              sx={{ ...inputStyles }}
              slotProps={{ input: { min: 0, max: 100, ref: targetWeight } }}
            />
            <NextButton />
          </Box>

          <Box
            sx={{
              display: !isCoach && activeStep === 5 ? 'grid' : 'none',
              gridTemplateColumns: 'max-content 1fr',
              columnGap: 2.4,
              rowGap: 4,
              width: 360,
            }}
          >
            <Typography level="title-lg" sx={{ placeSelf: 'center end' }}>
              جنسیت
            </Typography>
            <RadioGroup
              variant="outlined"
              orientation="horizontal"
              defaultValue="مرد"
              size="lg"
              value={genderValue}
              sx={{ gap: 1.5, '& input': { position: 'relative' }, p: 1, borderRadius: 'md' }}
            >
              {['مرد', 'زن'].map((value) => (
                <Sheet
                  key={value}
                  sx={{
                    py: 0.7,
                    px: 4.65,
                    borderRadius: 'md',
                  }}
                >
                  <Radio
                    value={value}
                    label={
                      <>
                        <span>{value}</span>
                        {value === 'مرد' ? (
                          <Icon icon="material-symbols:male-rounded" width="24" height="24" />
                        ) : (
                          <Icon icon="tabler:gender-female" width="24" height="24" />
                        )}
                      </>
                    }
                    checked={value === genderValue}
                    overlay
                    disableIcon
                    onChange={(e) => setGenderValue(e.target.value)}
                    slotProps={{
                      label: ({ checked }) => ({
                        sx: {
                          display: 'grid',
                          gridTemplateColumns: 'max-content max-content',
                          gap: 1,
                          fontWeight: 'lg',
                          fontSize: 'md',
                          color: checked ? 'text.primary' : 'text.secondary',
                        },
                      }),
                      action: ({ checked }) => ({
                        sx: (theme) => ({
                          ...(checked && {
                            borderRadius: 7,
                            borderWidth: '2px',
                            bgcolor: '#f2f5ff',
                            // boxShadow: checked ? 'sm' : 'none',
                            // '&&': {
                            //   // && to increase the specificity to win the base :hover styles
                            //   borderColor: theme.vars.palette.primary[500],
                            // },
                            borderColor: 'primary.500',
                          }),
                        }),
                      }),
                    }}
                  />
                </Sheet>
              ))}
            </RadioGroup>
            <Typography level="title-lg" sx={{ placeSelf: 'center end' }}>
              زمان ارجح
            </Typography>
            <List
              variant="outlined"
              aria-label="Screens"
              role="group"
              orientation="horizontal"
              sx={{
                flexGrow: 0,
                '--List-gap': '8px',
                '--List-padding': '8px',
                '--List-radius': '8px',
              }}
            >
              {['صبح', 'عصر', 'شب'].map((item) => (
                <ListItem key={item} sx={{ '& input': { position: 'relative' } }}>
                  <Checkbox
                    disableIcon
                    overlay
                    label={item}
                    checked={timesValue.includes(item)}
                    color="neutral"
                    variant={timesValue.includes(item) ? 'outlined' : 'plain'}
                    onChange={(event) => {
                      if (event.target.checked) {
                        setTimesValue((val) => [...val, item]);
                      } else {
                        setTimesValue((val) => val.filter((text) => text !== item));
                      }
                    }}
                    slotProps={{
                      action: ({ checked }) => ({
                        sx: {
                          borderColor: checked ? 'primary.500' : 'red',
                          borderRadius: 7,
                          borderWidth: '2px',
                          bgcolor: checked ? '#f2f5ff' : 'transparent',
                          // boxShadow: checked ? 'sm' : 'none',
                        },
                      }),
                    }}
                  />
                  <ListItemDecorator
                    sx={{
                      zIndex: 2,
                      pointerEvents: 'none',
                      ...(timesValue.includes(item) && { color: 'text.primary' }),
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
            <Typography
              level="body-md"
              startDecorator={<Icon icon="ph:warning-circle-bold" width="21" height="21" />}
              sx={{ mt: -2, gridColumn: '1/3' }}
            >
              زمان هایی از روز که ترجیح می دهید تمرین کنید.
            </Typography>
            <Typography level="title-lg" sx={{ placeSelf: 'center end' }}>
              علایق
            </Typography>
            <Autocomplete
              size="md"
              multiple
              placeholder="انتخاب کنید..."
              options={['کاهش وزن', 'حجم گیری', 'دوستانه', 'جدی', 'قدرت']}
              getOptionLabel={(option) => option}
              // value={allExercises.find((ex) => ex.name === props.exObj.name)}
              sx={{
                '& .MuiChip-label': { px: '4px', py: '1px' },
                '& .MuiChip-root': {
                  color: 'primary.500',
                  border: '1px solid',
                  borderColor: 'primary.500',
                  mr: 0.2,
                },
                '& .MuiChip-root svg': { color: 'primary.500' },
                py: 0.9,
                borderRadius: 'md',
              }}
              // startDecorator={<Icon icon="mdi:fire" />}
              noOptionsText={<i>هیچ موردی مطابقت ندارد</i>}
              onChange={(e, value, reason) => {
                if (reason === 'selectOption') {
                  setTags(value);
                }
              }}
            />
            <FinishButton />
          </Box>

          <Box
            sx={{
              display: isCoach && activeStep === 4 ? 'grid' : 'none',
              gridTemplateColumns: 'max-content 1fr',
              columnGap: 2.4,
              rowGap: 4,
              width: 360,
            }}
          >
            <Typography level="title-lg" sx={{ placeSelf: 'center end' }}>
              تخصص
            </Typography>
            <Input
              slotProps={{ input: { ref: speciality } }}
              size="lg"
              sx={{ ...inputStyles }}
            />
            <Typography level="title-lg" sx={{ placeSelf: 'center end' }}>
              تجربه(سال)
            </Typography>
            <Input
              size="lg"
              type="number"
              sx={{ ...inputStyles }}
              slotProps={{ input: { min: 0, max: 300, ref: experience } }}
            />
            <Typography level="title-lg" sx={{ placeSelf: 'center end' }}>
              هزینه
            </Typography>
            <Input
              size="lg"
              type="number"
              sx={{ ...inputStyles }}
              // step={10}
              slotProps={{ input: { min: 0, max: 100, ref: price } }}
            />
            <Typography level="title-lg" sx={{ placeSelf: 'center end' }}>
              در دسترس
            </Typography>
            <RadioGroup
              variant="outlined"
              orientation="horizontal"
              defaultValue="مرد"
              size="lg"
              sx={{ gap: 1.5, '& input': { position: 'relative' }, p: 1, borderRadius: 'md' }}
            >
              {['هستم', 'نیستم'].map((value) => (
                <Sheet
                  key={value}
                  sx={{
                    py: 0.7,
                    px: 2.8,
                    borderRadius: 'md',
                  }}
                >
                  <Radio
                    label={
                      <>
                        <span>{value}</span>
                        {value === 'هستم' ? (
                          <Icon icon="charm:tick" width="21" height="21" />
                        ) : (
                          <Icon icon="charm:cross" width="24" height="24" />
                        )}
                      </>
                    }
                    onChange={(e) => setAvailableValue(e.target.value)}
                    overlay
                    disableIcon
                    value={value}
                    slotProps={{
                      label: ({ checked }) => ({
                        sx: {
                          display: 'grid',
                          gridTemplateColumns: 'max-content max-content',
                          gap: 1,
                          fontWeight: 'lg',
                          fontSize: 'md',
                          color: checked ? 'text.primary' : 'text.secondary',
                        },
                      }),
                      action: ({ checked }) => ({
                        sx: (theme) => ({
                          ...(checked && {
                            borderRadius: 7,
                            borderWidth: '2px',
                            bgcolor: '#f2f5ff',
                            // boxShadow: checked ? 'sm' : 'none',
                            // '&&': {
                            //   // && to increase the specificity to win the base :hover styles
                            //   borderColor: theme.vars.palette.primary[500],
                            // },
                            borderColor: 'primary.500',
                          }),
                        }),
                      }),
                    }}
                  />
                </Sheet>
              ))}
            </RadioGroup>
            <NextButton />
          </Box>

          <Box
            sx={{
              display: isCoach && activeStep === 5 ? 'grid' : 'none',
              gridTemplateColumns: 'max-content 1fr',
              columnGap: 2.4,
              rowGap: 4,
              width: 360,
            }}
          >
            <Typography level="title-lg" sx={{ placeSelf: 'center end' }}>
              تمایلات
            </Typography>
            <Autocomplete
              size="md"
              multiple
              placeholder="انتخاب کنید..."
              options={['کاهش وزن', 'حجم گیری', 'دوستانه', 'جدی', 'قدرت']}
              getOptionLabel={(option) => option}
              sx={{
                '& .MuiChip-label': { px: '4px', py: '1px' },
                '& .MuiChip-root': {
                  color: 'primary.500',
                  border: '1px solid',
                  borderColor: 'primary.500',
                  mr: 0.2,
                },
                '& .MuiChip-root svg': { color: 'primary.500' },
                py: 0.9,
                borderRadius: 'md',
              }}
              // startDecorator={<Icon icon="mdi:fire" />}
              noOptionsText={<i>هیچ موردی مطابقت ندارد</i>}
              onChange={(e, value, reason) => {
                if (reason === 'selectOption') {
                  setTags(value);
                }
              }}
            />
            <Typography level="title-lg" sx={{ placeSelf: 'start end' }}>
              توضیحات
            </Typography>
            <Textarea
              slotProps={{ textarea: { ref: description } }}
              minRows={3}
              maxRows={9}
              placeholder="اینجا تایپ کنید..."
              sx={{ borderRadius: 'md', pt: 1 }}
            ></Textarea>
            <FinishButton />
          </Box>
        </Sheet>

        <Sheet
          sx={{
            pb: 2,
            pt: 3,
            pr: 2.5,
            pl: 3.1,
            borderRadius: 'lg',
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            width: 426,
            border: '1px solid',
            borderBottom: 'none',
            borderColor: 'neutral.300',
          }}
        >
          <Stepper sx={{ direction: 'ltr' }}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Step
                key={index}
                indicator={
                  <StepIndicator
                    variant={activeStep <= index ? 'soft' : 'solid'}
                    color={activeStep < index ? 'neutral' : 'primary'}
                  >
                    {activeStep <= index ? index : <Icon icon="charm:tick" />}
                  </StepIndicator>
                }
                sx={{
                  '&::after': {
                    ...(activeStep > index && index !== 5 && { bgcolor: 'primary.solidBg' }),
                  },
                }}
              >
                <StepButton onClick={() => setActiveStep(index)}></StepButton>
              </Step>
            ))}
          </Stepper>
        </Sheet>
      </Box>
    </>
  );
}
