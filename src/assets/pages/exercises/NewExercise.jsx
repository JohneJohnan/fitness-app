import {
  Autocomplete,
  Box,
  Divider,
  Input,
  Stack,
  Typography,
  Button,
  AspectRatio,
  Textarea,
  Table,
} from '@mui/joy';
import { Icon } from '@iconify/react';
import { Rating } from '@mui/material';
import { styled as matStyled } from '@mui/material';
import { muscles } from '../../../dummyData';
import { styled } from '@mui/joy';
import { exercise } from '../../../dummyData';

const strengthLevels = ['تازه کار', 'مبتدی', 'متوسط', 'پیشرفته', 'خبره'];

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

export default function NewExercise() {
  return (
    <>
      <Typography level="h1">تمرین جدید</Typography>
      <Divider sx={{ mt: 2 }}></Divider>

      <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 3 }}>
        <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', flex: '1 0 auto' }}>
          <Typography level="body-lg" sx={{ ml: 2.1, flex: '0 0 max-content' }}>
            عنوان تمرین
          </Typography>
          <Input placeholder="اینجا تایپ کنید..." sx={{ flex: '0 0 207px', ml: 3 }}></Input>
        </Box>
        <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', flex: '1 0 auto' }}>
          <Typography level="body-lg" sx={{ ml: 2, flex: '0 0 max-content' }}>
            درجه سختی
          </Typography>
          <StyledRating
            dir="ltr"
            icon={<Icon icon="mingcute:fitness-fill" fontSize="34px" />}
            emptyIcon={<Icon icon="mingcute:fitness-line" fontSize="34px" />}
          ></StyledRating>
        </Box>
      </Box>
      <Box sx={{ mt: 5, display: 'flex', alignItems: 'center' }}>
        <Typography level="body-lg" sx={{ ml: 2, flex: '0 0 max-content' }}>
          عضلات اصلی
        </Typography>
        <Autocomplete
          multiple
          placeholder="عضله ها را انتخاب کنید..."
          options={muscles}
          // getOptionLabel={(option) => option}
          // getOptionDisabled={(option) => {
          //   'exercises' in props.state[props.dayLabel]
          //     ? props.state[props.dayLabel].exercises.some(
          //         (ex, i) => i !== props.exIndex && ex.name === option.name
          //       )
          //     : false;
          // }}
          // value={allExercises.find((ex) => ex.name === props.exObj.name)}
          sx={{
            '& .MuiChip-label': { px: '4px', py: '1px' },
            // '& .MuiChip-root': { color: 'red', border: '1px solid red' },
          }}
          // startDecorator={<Icon icon="mdi:fire" />}
          noOptionsText={<i>هیچ موردی مطابقت ندارد</i>}
          // onChange={(e, value, reason) => {
          //   if (reason === 'selectOption') {
          //     dispatch({
          //       type: 'CHANGE_MAIN_TARGET',
          //       val: value.name,
          //     });
          //   }
          // }}
        />
      </Box>

      <Box sx={{ mt: 5, display: 'flex', alignItems: 'center' }}>
        <Typography level="body-lg" sx={{ ml: 2, flex: '0 0 max-content' }}>
          عضلات فرعی
        </Typography>
        <Autocomplete
          multiple
          placeholder="عضله ها را انتخاب کنید..."
          options={muscles}
          // getOptionLabel={(option) => option}
          // getOptionDisabled={(option) => {
          //   'exercises' in props.state[props.dayLabel]
          //     ? props.state[props.dayLabel].exercises.some(
          //         (ex, i) => i !== props.exIndex && ex.name === option.name
          //       )
          //     : false;
          // }}
          // value={allExercises.find((ex) => ex.name === props.exObj.name)}
          sx={{
            '& .MuiChip-label': { px: '4px', py: '1px' },
            // '& .MuiChip-root': { color: 'red', border: '1px solid red' },
          }}
          // startDecorator={<Icon icon="mdi:fire" />}
          noOptionsText={<i>هیچ موردی مطابقت ندارد</i>}
          // onChange={(e, value, reason) => {
          //   if (reason === 'selectOption') {
          //     dispatch({
          //       type: 'CHANGE_MAIN_TARGET',
          //       val: value.name,
          //     });
          //   }
          // }}
        />
      </Box>

      <Box sx={{ display: 'flex', mt: 5 }}>
        <Typography level="body-lg" sx={{ ml: 2 }}>
          مراحل
        </Typography>
        <Textarea
          minRows={2}
          placeholder="اینجا تایپ کنید..."
          sx={{ flex: '0 1 400px' }}
        ></Textarea>
      </Box>

      <Box sx={{ mt: 3, display: 'flex' }}>
        {['تصویر اصلی', 'تصویر فرعی'].map((i) => (
          <Box key={i} sx={{ display: 'flex', flex: '1 1 0', flexDirection: 'column', p: 3 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Typography level="body-lg" sx={{ ml: 2 }}>
                {i}
              </Typography>
              <Button
                component="label"
                role={undefined}
                tabIndex={-1}
                variant="outlined"
                color="neutral"
                endDecorator={<Icon icon="mdi:cloud-upload-outline" />}
                sx={{ '& svg': { mr: 1, ml: -1.2, width: '22px', height: '22px' } }}
              >
                آپلود فایل <VisuallyHiddenInput type="file" />
              </Button>
            </Box>
            <AspectRatio
              ratio="1"
              sx={{
                mt: 2.5,
                borderWidth: '1px',
                borderRadius: '10px',
                borderColor: 'neutral.400',
                borderStyle: 'solid',
              }}
            >
              <img src={exercise.secondaryImage} />
            </AspectRatio>
          </Box>
        ))}
        
      </Box>

      <Box sx={{ display: 'flex', mt: 3 }}>
        <Typography level="body-lg" sx={{ ml: 2 }}>
          توضیحات
        </Typography>
        <Textarea
          minRows={2}
          placeholder="اینجا تایپ کنید..."
          sx={{ flex: '0 1 380px' }}
        ></Textarea>
      </Box>

      <Typography level="title-lg" sx={{ mt: 4 }}>
        وزن های استاندارد قدرت
      </Typography>
      <Divider sx={{ mt: 1, maxWidth: 200, bgcolor: 'neutral.400' }}></Divider>
      <Box sx={{ display: 'flex' }}>
        {['در مردان', 'در زنان'].map((g) => (
          <Box key={g} sx={{ flex: '1 1 0' }}>
            <Typography level="body-md" sx={{ mt: 2 }}>
              <strong>{g}</strong>
            </Typography>
            <Divider sx={{ mt: 0.6, maxWidth: 66, bgcolor: 'neutral.400' }}></Divider>
            {strengthLevels.map((i) => (
              <Box key={i} sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <Typography level="body-md" sx={{ flex: '0 0 66px' }}>
                  {i}
                </Typography>
                <Input
                  size="sm"
                  type="number"
                  sx={{ minWidth: '70px', maxWidth: '70px' }}
                  slotProps={{ input: { min: 1, max: 999 } }}
                />
              </Box>
            ))}
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Divider sx={{ width: '200px', bgcolor: 'neutral.400', p: '.5 px' }}></Divider>
        </Box>
        <Button
          endDecorator={<Icon icon="charm:tick" />}
          sx={{ mt: 2.5, mb: 1, px: 4, fontSize: 'md', '& svg': { ml: -1.9, mr: 1 } }}
          onClick={() => dispatch({ type: 'SEND_PLAN' })}
        >
          تایید برنامه
        </Button>
      </Box>
    </>
  );
}
