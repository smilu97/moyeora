import { create } from 'apisauce';

async function createDummy(data) {
  return {
    ok: true,
    status: 200,
    data: {
      success: true,
      ...data,
    },
  };
}

const sauce = create({
  baseURL: 'http://localhost:8080/',
  headers: {
    Accept: 'application/json',
  },
});

export function getHome() {
  return createDummy({ msg: 'Hello, World!' });
}

export function registerUserGroup() {
  return createDummy({ msg: 'Registered' });
}

export default sauce;
