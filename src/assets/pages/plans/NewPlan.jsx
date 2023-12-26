import { Box, Divider, Input, Tabs, TabList, Tab, Typography, TabPanel, Button } from '@mui/joy';
import { useReducer } from 'react';
import { Icon } from '@iconify/react';
import Exercise from './Exercise';

function falseIfError(a, b) {
  try {
    return a in b;
  } catch (error) {
    // console.warn(error.message);
    return false;
  }
}

function reducerFn(state, action) {
  let timeIsValid = false;
  const stateCopy = { ...state };
  console.log(4);

  switch (action.type) {
    case 'CHANGE_UNCHECKED_NAME':
      return { ...state, uncheckedName: action.val };
    case 'CAHNGE_VALID_NAME':
      if (state.uncheckedName == '') {
        //not valid
        //unvalid style and error
        return state;
      } else return { ...state, name: state.uncheckedName };
    case 'CHANGE_HOUR':
      if (
        state[action.dayLabel].minute >= 0 &&
        state[action.dayLabel].minute < 60 &&
        action.val >= 0 &&
        action.val < 24
      ) {
        timeIsValid = true;
      } else timeIsValid = false;
      return {
        ...state,
        [action.dayLabel]: { ...state[action.dayLabel], hour: action.val, timeIsValid },
      };
    case 'CHANGE_MINUTE':
      if (
        state[action.dayLabel].hour >= 0 &&
        state[action.dayLabel].hour < 24 &&
        action.val >= 0 &&
        action.val < 60
      ) {
        timeIsValid = true;
      } else timeIsValid = false;
      return {
        ...state,
        [action.dayLabel]: { ...state[action.dayLabel], minute: action.val, timeIsValid },
      };
    case 'CHANGE_EXERCISE_NAME':
      if (
        !('exercises' in state[action.dayLabel]) ||
        state[action.dayLabel].exercises.length === 0 ||
        action.exIndex === state[action.dayLabel].exercises.length
      ) {
        return {
          ...state,
          [action.dayLabel]: {
            ...state[action.dayLabel],
            newExercise: { ...state[action.dayLabel].newExercise, name: action.val },
          },
        };
      }
      stateCopy[action.dayLabel].exercises[action.exIndex].name = action.val;
      return stateCopy;
    case 'ADD_NEW_EXERCISE':
      return {
        ...state,
        [action.dayLabel]: {
          ...state[action.dayLabel],
          showNewExercise: true,
          newExercise: { name: '', sets: [] },
        },
      };
    case 'ADD_NEW_SET':
      if (
        !('exercises' in state[action.dayLabel]) ||
        state[action.dayLabel].exercises.length === 0 ||
        action.exIndex === state[action.dayLabel].exercises.length
      ) {
        return {
          ...state,
          [action.dayLabel]: {
            ...state[action.dayLabel],
            newExercise: {
              ...state[action.dayLabel].newExercise,
              showNewSet: true,
              newSet: { reps: 1, weight: 1, rest: 0 },
            },
          },
        };
      }
      stateCopy[action.dayLabel].exercises[action.exIndex] = {
        ...state[action.dayLabel].exercises[action.exIndex],
        showNewSet: true,
        newSet: { reps: 1, weight: 1, rest: 0 },
      };
      return stateCopy;
    case 'CHANGE_REP':
      if (
        !falseIfError('exercises', state[action.dayLabel]) ||
        state[action.dayLabel].exercises.length === 0 ||
        action.exIndex === state[action.dayLabel].exercises.length
      ) {
        if (
          falseIfError('newExercise', state[action.dayLabel]) &&
          (!falseIfError('sets', state[action.dayLabel].newExercise) ||
            state[action.dayLabel].newExercise.sets.length === 0 ||
            action.setIndex === state[action.dayLabel].newExercise.sets.length)
        ) {
          console.log(11);
          stateCopy[action.dayLabel].newExercise.newSet.reps = action.val;
          return stateCopy;
        }
        console.log(12);
        stateCopy[action.dayLabel].newExercise.sets[action.setIndex].reps = action.val;
        return stateCopy;
      }
      if (
        falseIfError('exercises', state[action.dayLabel]) &&
        (!falseIfError('sets', state[action.dayLabel].exercises[action.exIndex]) ||
          state[action.dayLabel].exercises[action.exIndex].sets.length === 0 ||
          action.setIndex === state[action.dayLabel].exercises[action.exIndex].sets.length)
      ) {
        console.log(13);
        stateCopy[action.dayLabel].exercises[action.exIndex].newSet.reps = action.val;
        return stateCopy;
      }
      console.log(14);
      stateCopy[action.dayLabel].exercises[action.exIndex].sets[action.setIndex].reps =
        action.val;
      return stateCopy;
    case 'CHANGE_WEIGHT':
      if (
        !falseIfError('exercises', state[action.dayLabel]) ||
        state[action.dayLabel].exercises.length === 0 ||
        action.exIndex === state[action.dayLabel].exercises.length
      ) {
        if (
          falseIfError('newExercise', state[action.dayLabel]) &&
          (!falseIfError('sets', state[action.dayLabel].newExercise) ||
            state[action.dayLabel].newExercise.sets.length === 0 ||
            action.setIndex === state[action.dayLabel].newExercise.sets.length)
        ) {
          stateCopy[action.dayLabel].newExercise.newSet.weight = action.val;
          return stateCopy;
        }
        stateCopy[action.dayLabel].newExercise.sets[action.setIndex].weight = action.val;
        return stateCopy;
      }
      if (
        falseIfError('exercises', state[action.dayLabel]) &&
        (!falseIfError('sets', state[action.dayLabel].exercises[action.exIndex]) ||
          state[action.dayLabel].exercises[action.exIndex].sets.length === 0 ||
          action.setIndex === state[action.dayLabel].exercises[action.exIndex].sets.length)
      ) {
        stateCopy[action.dayLabel].exercises[action.exIndex].newSet.weight = action.val;
        return stateCopy;
      }
      stateCopy[action.dayLabel].exercises[action.exIndex].sets[action.setIndex].weight =
        action.val;
      return stateCopy;
    case 'CHANGE_REST':
      if (
        !falseIfError('exercises', state[action.dayLabel]) ||
        state[action.dayLabel].exercises.length === 0 ||
        action.exIndex === state[action.dayLabel].exercises.length
      ) {
        if (
          falseIfError('newExercise', state[action.dayLabel]) &&
          (!falseIfError('sets', state[action.dayLabel].newExercise) ||
            state[action.dayLabel].newExercise.sets.length === 0 ||
            action.setIndex === state[action.dayLabel].newExercise.sets.length)
        ) {
          stateCopy[action.dayLabel].newExercise.newSet.rest = action.val;
          return stateCopy;
        }
        stateCopy[action.dayLabel].newExercise.sets[action.setIndex].rest = action.val;
        return stateCopy;
      }
      if (
        falseIfError('exercises', state[action.dayLabel]) &&
        (!falseIfError('sets', state[action.dayLabel].exercises[action.exIndex]) ||
          state[action.dayLabel].exercises[action.exIndex].sets.length === 0 ||
          action.setIndex === state[action.dayLabel].exercises[action.exIndex].sets.length)
      ) {
        stateCopy[action.dayLabel].exercises[action.exIndex].newSet.rest = action.val;
        return stateCopy;
      }
      stateCopy[action.dayLabel].exercises[action.exIndex].sets[action.setIndex].rest =
        action.val;
      return stateCopy;
    case 'CONFIRM_SET':
      console.log(state);
      console.log(action.setIndex);
      if (
        !falseIfError('exercises', state[action.dayLabel]) ||
        state[action.dayLabel].exercises.length === 0 ||
        action.exIndex === state[action.dayLabel].exercises.length
      ) {
        if (
          falseIfError('newExercise', state[action.dayLabel]) &&
          (!falseIfError('sets', state[action.dayLabel].newExercise) ||
            state[action.dayLabel].newExercise.sets.length === 0 ||
            action.setIndex === state[action.dayLabel].newExercise.sets.length)
        ) {
          console.log(15);
          stateCopy[action.dayLabel].newExercise.sets = [
            ...state[action.dayLabel].newExercise.sets,
            state[action.dayLabel].newExercise.newSet,
          ];
          stateCopy[action.dayLabel].newExercise.newSet = { reps: 1, weight: 1, rest: 0 };
          stateCopy[action.dayLabel].newExercise.showNewSet = false;
          if (!('exercises' in stateCopy[action.dayLabel]))
            stateCopy[action.dayLabel].exercises = [];
          stateCopy[action.dayLabel].exercises.push(stateCopy[action.dayLabel].newExercise);
          stateCopy[action.dayLabel].showNewExercise = false;
          stateCopy[action.dayLabel].newExercise = {
            name: '',
            sets: [],
            newSet: { reps: 1, weight: 1, rest: 0 },
            showNewSet: false,
          };
          return stateCopy;
        } else {
          console.log(16);
          // should not happen
          return state;
        }
      }
      if (
        falseIfError('exercises', state[action.dayLabel]) &&
        (!falseIfError('sets', state[action.dayLabel].exercises[action.exIndex]) ||
          state[action.dayLabel].exercises[action.exIndex].sets.length === 0 ||
          action.setIndex === state[action.dayLabel].exercises[action.exIndex].sets.length)
      ) {
        console.log(17);
        stateCopy[action.dayLabel].exercises[action.exIndex].sets = [
          ...state[action.dayLabel].exercises[action.exIndex].sets,
          state[action.dayLabel].exercises[action.exIndex].newSet,
        ];
        stateCopy[action.dayLabel].exercises[action.exIndex].newSet = {
          reps: 1,
          weight: 1,
          rest: 0,
        };
        stateCopy[action.dayLabel].exercises[action.exIndex].showNewSet = false;
        // stateCopy[action.dayLabel].exercises[action.exIndex].showNewExercise = true;
        return stateCopy;
      } else {
        console.log(18);
        // ignore. handled in change reps, weight, rest
        return state;
      }
    case 'SEND_PLAN':
      //api
      //go to view plan
      return state;
    default:
      console.warn('default case hit!');
      console.log(action);
  }
}

// const tplan = {
//   uncheckedName: '',
//   name: '',
//   for: '', //id
//   sat: {},
//   sun: {},
//   mon: {},
//   tue: {},
//   wen: {},
//   thu: {},
// };
// const tday = {
//   hour: -1,
//   min: -1,
//   timeIsValid: false,
//   exercises: [],
//   newExercise: { name: '', sets: [] },
//   showNewExercise: false,
// };
// const texer = {
//   name: '',
//   sets: [],
//   newSet: { reps: 0, weight: 0, rest: -1 },
//   showNewSet: false,
// };
// const tset = {
//   reps: 0,
//   weight: 0,
//   rest: -1,
// };

export default function NewPlan() {
  const [state, dispatch] = useReducer(reducerFn, {
    uncheckedName: '',
    name: '',
    for: '', //id
    sat: {},
    sun: {},
    mon: {},
    tue: {},
    wen: {},
    thu: {},
  });
  function showSendBtn() {
    if (['sat', 'sun', 'mon', 'tue', 'wen', 'thu'].every((day) => !('exercises' in state[day])))
      return false;
    return !['sat', 'sun', 'mon', 'tue', 'wen', 'thu'].some((day) => !showNewExerciseBtn(day));
  }
  function showNewExerciseBtn(day) {
    if (state[day].showNewExercise) return false;
    if (!('exercises' in state[day])) return true;
    return !state[day].exercises.some((element) => element.showNewSet);
  }
  return (
    <>
      <Typography level="h1">برنامه جدید</Typography>
      <Divider sx={{ mt: 2, mb: 3 }} />
      {/*form*/}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography level="body-lg" sx={{ ml: 2 }}>
            نام برنامه
          </Typography>
          <Input
            onChange={(e) => dispatch({ type: 'CHANGE_UNCHECKED_NAME', val: e.target.value })}
            placeholder="نام را وارد کنید..."
            sx={{ maxWidth: '250px' }}
          />
        </Box>
        <Button
          variant="soft"
          endDecorator={<Icon icon="charm:tick" />}
          sx={{ px: 4, fontSize: 'md', '& svg': { ml: -2, mr: 1 } }}
          onClick={() => dispatch({ type: 'CAHNGE_VALID_NAME' })}
        >
          تایید
        </Button>
      </Box>
      {!!state.name && (
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
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography level="body-lg">زمان شروع جلسه</Typography>
                <Input
                  type="number"
                  placeholder="دقیقه"
                  sx={{ width: '100px', mr: 1, ml: 0.7 }}
                  slotProps={{ input: { min: 0, max: 59 } }}
                  onChange={(e) =>
                    dispatch({
                      type: 'CHANGE_MINUTE',
                      val: Number(e.target.value),
                      dayLabel,
                    })
                  }
                />
                :
                <Input
                  type="number"
                  placeholder="ساعت"
                  sx={{ width: '100px', mr: 0.7 }}
                  slotProps={{ input: { min: 0, max: 23 } }}
                  onChange={(e) =>
                    dispatch({
                      type: 'CHANGE_HOUR',
                      val: Number(e.target.value),
                      dayLabel,
                    })
                  }
                />
              </Box>
              {state[dayLabel].timeIsValid && (
                <>
                  {!!state[dayLabel].exercises &&
                    state[dayLabel].exercises.map((ex, exIndex) => (
                      <Exercise
                        key={exIndex}
                        state={state}
                        dayLabel={dayLabel}
                        exObj={ex}
                        exIndex={exIndex}
                        dispatch={(arg) => dispatch(arg)}
                      />
                    ))}
                  {state[dayLabel].showNewExercise && (
                    <Exercise
                      isNewExercise
                      state={state}
                      dayLabel={dayLabel}
                      exObj={state[dayLabel].newExercise}
                      exIndex={
                        'exercises' in state[dayLabel] ? state[dayLabel].exercises.length : 0
                      }
                      dispatch={(arg) => dispatch(arg)}
                    />
                  )}
                  {showNewExerciseBtn(dayLabel) && (
                    <>
                      <Divider
                        sx={{ maxWidth: '350px', bgcolor: 'primary.200', my: 3 }}
                      ></Divider>
                      <Button
                        variant="soft"
                        size="md"
                        endDecorator={<Icon icon="mingcute:add-fill" />}
                        sx={{ '& svg': { ml: -2, mr: 1 } }}
                        onClick={() =>
                          dispatch({
                            type: 'ADD_NEW_EXERCISE',
                            dayLabel,
                          })
                        }
                      >
                        افزودن تمرین
                      </Button>
                    </>
                  )}
                </>
              )}
            </TabPanel>
          ))}
        </Tabs>
      )}
      {showSendBtn() && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            endDecorator={<Icon icon="charm:tick" />}
            sx={{ mt: 3, mb: 1, px: 4, fontSize: 'md', '& svg': { ml: -1.9, mr: 1 } }}
            onClick={() => dispatch({ type: 'SEND_PLAN' })}
          >
            تایید برنامه  
          </Button>
        </Box>
      )}
    </>
  );
}
