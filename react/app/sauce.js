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
  baseURL: 'http://localhost:3001/',
  headers: {
    Accept: 'application/json',
  },
});

export function getHome() {
  return createDummy({ msg: 'Hello, World!' });
}

export function registerUserGroup(username, groupname) {
  return sauce.post('/register/usergroup', { username, groupname });
}

export function getOffers(page, pageSize) { // eslint-disable-line
  return sauce.get(`/offers/${page}`);
}

export function getOffer(offerId) {
  return sauce.get(`/offer/${offerId}`);
}

export function postOffer(username, itemname) {
  return sauce.post('/offer', { username, itemname });
}

export function postRequest(username, cost) {
  return sauce.post('/offer/:offerId/request', { username, cost });
}

export function getRequests(offerId) {
  return sauce.get(`/offer/${offerId}/requests`);
}

export default sauce;
