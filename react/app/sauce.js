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

const api = {
  sauce,
  getHome: () => createDummy({ msg: 'Hello, World!' }),
};

export default api;
