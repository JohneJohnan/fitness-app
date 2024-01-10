import axios from 'axios';
const Axios = axios.create({
  baseURL: 'http://127.0.0.1:5000/api/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  },
});

export function login(body) {
  return Axios.post('signin-control', body).then(({ data }) => data);
}

export function signup(body) {
  return Axios.post('signup-control', body).then(({ data }) => data);
}

export function editSignup(body) {
  // return Axios.post('signup-control', body).then(({ data }) => data);
}

export function exercises(body) {
  return Axios.post('exercises/all', body).then(({ data }) => data);
}

export function newExercise(body) {
  // return Axios.post('signup-control', body).then(({ data }) => data);
}

export function editExercise(body) {
  // return Axios.post('signup-control', body).then(({ data }) => data);
}

export function deleteExercise(body) {
  // return Axios.post('signup-control', body).then(({ data }) => data);
}

export function plans(body) {
  // return Axios.post('signup-control', body).then(({ data }) => data);
}

export function newPlan(body) {
  // return Axios.post('signup-control', body).then(({ data }) => data);
}

export function editPlan(body) {
  // return Axios.post('signup-control', body).then(({ data }) => data);
}

export function deletePlan(body) {
  // return Axios.post('signup-control', body).then(({ data }) => data);
}

export function coaches(body) {
  // return Axios.post('signup-control', body).then(({ data }) => data);
}

//////////////
export function newCoach(body) {
  // return Axios.post('signup-control', body).then(({ data }) => data);
}

export function rateCoach(body) {
  // return Axios.post('signup-control', body).then(({ data }) => data);
}