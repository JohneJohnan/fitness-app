import { Autocomplete, Box, Divider, Typography, Button } from '@mui/joy';
import { exercises as allExercises } from '../../../dummyData';
import { Icon } from '@iconify/react';
import Set from './Set';

export default function Exercise(props) {
  return (
    <>
      <Divider sx={{ p:'0.9px', bgcolor: 'primary.200', mt: 3, maxWidth: '348px' }} />
      <Box
        sx={{
          mt: 3,
          mb: 0,
          mx: 0,
          px: 2,
          py: 3,
          borderRadius: 'md',
          boxShadow: 'sm',
          bgcolor: '#f0f4f9',
        }}
      >
        <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
          <Typography>تمرین شماره {props.exIndex + 1}</Typography>
          {!props.isNewExercise && (
            <Autocomplete
              placeholder="تمرین را انتخاب کنید..."
              options={allExercises}
              getOptionLabel={(option) => option.name}
              // getOptionDisabled={(option) => {
              //   'exercises' in props.state[props.dayLabel]
              //     ? props.state[props.dayLabel].exercises.some(
              //         (ex, i) => i !== props.exIndex && ex.name === option.name
              //       )
              //     : false;
              // }}
              value={allExercises.find((ex) => ex.name === props.exObj.name)}
              sx={{ maxWidth: '248px', mr: 1 }}
              noOptionsText={<i>هیچ تمرینی مطابقت ندارد</i>}
              onChange={(e, value, reason) => {
                if (reason === 'selectOption') {
                  props.dispatch({
                    type: 'CHANGE_EXERCISE_NAME',
                    dayLabel: props.dayLabel,
                    exIndex: props.exIndex,
                    val: value.name,
                  });
                }
              }}
            />
          )}{' '}
          {props.isNewExercise && (
            <Autocomplete
              placeholder="تمرین را انتخاب کنید..."
              options={allExercises}
              getOptionLabel={(option) => option.name}
              // getOptionDisabled={(option) => {
              //   'exercises' in props.state[props.dayLabel]
              //     ? props.state[props.dayLabel].exercises.some(
              //         (ex, i) => i !== props.exIndex && ex.name === option.name
              //       )
              //     : false;
              // }}
              sx={{ maxWidth: '248px', mr: 1 }}
              noOptionsText={<i>هیچ تمرینی مطابقت ندارد</i>}
              onChange={(e, value, reason) => {
                if (reason === 'selectOption') {
                  props.dispatch({
                    type: 'CHANGE_EXERCISE_NAME',
                    dayLabel: props.dayLabel,
                    exIndex: props.exIndex,
                    val: value.name,
                  });
                }
              }}
            />
          )}
        </Box>
        {props.exObj.sets.map((set, setIndex) => (
          <Set
            set={set}
            key={setIndex}
            setIndex={setIndex}
            dayLabel={props.dayLabel}
            exIndex={props.exIndex}
            dispatch={(arg) => props.dispatch(arg)}
          />
        ))}
        {props.exObj.showNewSet && (
          <Set
            set={props.exObj.newSet}
            setIndex={props.exObj.sets ? props.exObj.sets.length : 1}
            dayLabel={props.dayLabel}
            exIndex={props.exIndex}
            dispatch={(arg) => props.dispatch(arg)}
          />
        )}

        {!props.exObj.showNewSet && (
          <>
            <Divider sx={{ maxWidth: '108px', my: 2 }} />
            <Button
              variant="soft"
              size="sm"
              endDecorator={<Icon icon="mingcute:add-fill" />}
              sx={{ '& svg': { ml: -1, mr: 1 } }}
              onClick={() =>
                props.dispatch({
                  type: 'ADD_NEW_SET',
                  dayLabel: props.dayLabel,
                  exIndex: props.exIndex,
                })
              }
            >
              افزودن ست
            </Button>
          </>
        )}
      </Box>
    </>
  );
}
