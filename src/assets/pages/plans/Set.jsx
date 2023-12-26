import { Box, Divider, Input, Slider, Typography, Button } from '@mui/joy';
import { Icon } from '@iconify/react';

const marks = [
  { value: 0, label: '0' },
  { value: 60, label: '1m' },
  { value: 120, label: '2m' },
  { value: 180, label: '3m' },
  { value: 240, label: '4m' },
  { value: 300, label: '5m' },
];

export default function Set(props) {
  return (
    <>
      <Divider sx={{ '--Divider-childPosition': '56px', maxWidth: '288px', mt: 2, mb: 1 }}>ست {props.setIndex + 1}</Divider>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography level="title-md">تکرار</Typography>
          <Input
            size="sm"
            type="number"
            value={props.set.reps}
            sx={{ minWidth: '70px', maxWidth: '70px', ml: 5, mr: 1 }}
            slotProps={{ input: { min: 1, max: 999 } }}
            onChange={(e) =>
              props.dispatch({
                type: 'CHANGE_REP',
                exIndex: props.exIndex,
                dayLabel: props.dayLabel,
                setIndex: props.setIndex,
                val: Number(e.target.value),
              })
            }
          />

          <Typography level="title-md">وزن</Typography>
          <Input
            size="sm"
            type="number"
            value={props.set.weight}
            sx={{ minWidth: '70px', maxWidth: '70px', ml: 4, mr: 1 }}
            slotProps={{ input: { min: 1, max: 999 } }}
            onChange={(e) =>
              props.dispatch({
                type: 'CHANGE_WEIGHT',
                exIndex: props.exIndex,
                dayLabel: props.dayLabel,
                setIndex: props.setIndex,
                val: Number(e.target.value),
              })
            }
          />

          <Typography level="title-md">استراحت</Typography>
          <Slider
            size="sm"
            defaultValue={0}
            value={props.set.rest}
            step={10}
            max={300}
            valueLabelDisplay="auto"
            marks={marks}
            sx={{ minWidth: '170px', ml: 3, mr: 2 }}
            onChange={(e) => {
              props.dispatch({
                type: 'CHANGE_REST',
                exIndex: props.exIndex,
                dayLabel: props.dayLabel,
                setIndex: props.setIndex,
                val: e.target.value,
              });
            }}
          />
        </Box>
        <Button
          size="sm"
          variant="soft"
          endDecorator={<Icon icon="charm:tick" />}
          sx={{ '& svg': { ml: -1, mr: 1 } }}
          onClick={() => {
            props.dispatch({
              type: 'CONFIRM_SET',
              exIndex: props.exIndex,
              dayLabel: props.dayLabel,
              setIndex: props.setIndex,
            });
          }}
        >
          تایید
        </Button>
      </Box>
    </>
  );
}
