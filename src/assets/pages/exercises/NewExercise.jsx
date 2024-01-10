import {
  Autocomplete,
  Box,
  Divider,
  Input,
  Typography,
  Button,
  AspectRatio,
  Textarea,
} from '@mui/joy';
import { Icon } from '@iconify/react';
import { Rating } from '@mui/material';
import { styled as matStyled } from '@mui/material';
import { muscles } from '../../../dummyData';
import { styled } from '@mui/joy';
import { useRef, useState } from 'react';
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
  const name = useRef('');
  const [ratingValue, setRatingValue] = useState(0);
  const [mainTargetMusclesValue, setMainTargetMuscles] = useState([]);
  const [secondaryTargetMusclesValue, setSecondaryTargetMuscles] = useState([]);
  const [table, setTable] = useState([
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ]);
  const howToDescription = useRef('');
  const description = useRef('');

  return (
    <>
      <Typography level="h1">تمرین جدید</Typography>
      <Divider sx={{ mt: 2 }}></Divider>

      <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 3 }}>
        <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', flex: '1 0 auto' }}>
          <Typography level="body-lg" sx={{ mr: 0.8, ml: 2, flex: '0 0 max-content' }}>
            عنوان تمرین
          </Typography>
          <Input
            defaultValue={exercise.name}
            slotProps={{ input: { ref: name } }}
            placeholder="اینجا تایپ کنید..."
            sx={{ flex: '0 0 207px', ml: 3, py: 0.4 }}
          ></Input>
        </Box>
        <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', flex: '1 0 auto' }}>
          <Typography level="body-lg" sx={{ ml: 2, flex: '0 0 max-content' }}>
            درجه سختی
          </Typography>
          <StyledRating
            defaultValue={exercise.difficulty}
            onChange={(event, newValue) => {
              setRatingValue(newValue);
            }}
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
          defaultValue={exercise.mainTargetMuscles}
          multiple
          placeholder="عضله ها را انتخاب کنید..."
          options={muscles}
          getOptionLabel={(option) => option}
          // getOptionDisabled={(option) => {
          //   'exercises' in props.state[props.dayLabel]
          //     ? props.state[props.dayLabel].exercises.some(
          //         (ex, i) => i !== props.exIndex && ex.name === option.name
          //       )
          //     : false;
          // }}
          // value={allExercises.find((ex) => ex.name === props.exObj.name)}
          sx={{
            py: 0.4,
            '& .MuiChip-label': { px: '4px', py: '1px' },
            '& .MuiChip-root': {
              color: 'primary.500',
              border: '1px solid',
              borderColor: 'primary.500',
              mr: 0.2,
            },
            '& .MuiChip-root svg': { color: 'primary.500' },
          }}
          // startDecorator={<Icon icon="mdi:fire" />}
          noOptionsText={<i>هیچ موردی مطابقت ندارد</i>}
          onChange={(e, value, reason) => {
            if (reason === 'selectOption') {
              setMainTargetMuscles(value);
            }
          }}
        />
      </Box>

      <Box sx={{ mt: 5, display: 'flex', alignItems: 'center' }}>
        <Typography level="body-lg" sx={{ ml: 2, flex: '0 0 max-content' }}>
          عضلات فرعی
        </Typography>
        <Autocomplete
          defaultValue={exercise.secondaryTargetMuscles}
          multiple
          placeholder="عضله ها را انتخاب کنید..."
          options={muscles}
          getOptionLabel={(option) => option}
          // getOptionDisabled={(option) => {
          //   'exercises' in props.state[props.dayLabel]
          //     ? props.state[props.dayLabel].exercises.some(
          //         (ex, i) => i !== props.exIndex && ex.name === option.name
          //       )
          //     : false;
          // }}
          // value={allExercises.find((ex) => ex.name === props.exObj.name)}
          sx={{
            py: 0.4,
            '& .MuiChip-label': { px: '4px', py: '1px' },
            '& .MuiChip-root': {
              color: 'primary.500',
              border: '1px solid',
              borderColor: 'primary.500',
              mr: 0.2,
            },
            '& .MuiChip-root svg': { color: 'primary.500' },
          }}
          // startDecorator={<Icon icon="mdi:fire" />}
          noOptionsText={<i>هیچ موردی مطابقت ندارد</i>}
          onChange={(e, value, reason) => {
            if (reason === 'selectOption') {
              setSecondaryTargetMuscles(value);
            }
          }}
        />
      </Box>

      <Box sx={{ display: 'flex', mt: 3 }}>
        <Typography level="body-lg" sx={{ ml: 2, mr: 3.3 }}>
          توضیحات
        </Typography>
        <Textarea
          defaultValue={exercise.description}
          slotProps={{ textarea: { ref: description } }}
          minRows={2}
          placeholder="اینجا تایپ کنید..."
          sx={{ flex: '0 1 380px' }}
        ></Textarea>
      </Box>

      <Box sx={{ display: 'flex', mt: 5 }}>
        <Typography level="body-lg" sx={{ ml: 2, mr: 6.1 }}>
          مراحل
        </Typography>
        <Textarea
          defaultValue={exercise.howToDescription}
          slotProps={{ textarea: { ref: howToDescription } }}
          minRows={2}
          placeholder="اینجا تایپ کنید..."
          sx={{ flex: '0 1 400px' }}
        ></Textarea>
      </Box>

      <Box sx={{ mt: 3, display: 'flex' }}>
        {['تصویر اصلی', 'تصویر فرعی'].map((img, i) => (
          <Box key={img} sx={{ display: 'flex', flex: '1 1 0', flexDirection: 'column', p: 3 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Typography level="body-lg" sx={{ ml: 2 }}>
                {img}
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
              {exercise.secondaryImage ? (
                <img src={exercise.secondaryImage} />
              ) : (
                <Box>
                  <Icon icon="fa:picture-o" width="110px" height="110px" color="#abc" />
                </Box>
              )}
            </AspectRatio>
          </Box>
        ))}
      </Box>

      <Typography level="title-lg" sx={{ mt: 4 }}>
        وزن های استاندارد قدرت
      </Typography>
      <Divider sx={{ mt: 1, maxWidth: 200, bgcolor: 'neutral.400' }}></Divider>
      <Box sx={{ display: 'flex' }}>
        {['در مردان', 'در زنان'].map((g, i) => (
          <Box key={g} sx={{ flex: '1 1 0' }}>
            <Typography level="body-md" sx={{ mt: 2 }}>
              <strong>{g}</strong>
            </Typography>
            <Divider sx={{ mt: 0.6, maxWidth: 66, bgcolor: 'neutral.400' }}></Divider>
            {strengthLevels.map((s, j) => (
              <Box key={s} sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <Typography level="body-md" sx={{ flex: '0 0 66px' }}>
                  {s}
                </Typography>
                <Input
                  onChange={(e) => {
                    setTable((prev) => {
                      let temp = prev;
                      temp[j][i] = e.target.value;
                      return temp;
                    });
                  }}
                  defaultValue={exercise.strengthStandardsTable[j][i]}
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
