import { create } from 'apisauce';

const DUMMY_OFFERS = [
  {
    key: 1,
    name: '콘푸로스트-200kg',
    reqNum: 30,
  },
  {
    key: 2,
    name: '쌀-1000kg',
    reqNum: 25,
  },
  {
    key: 3,
    name: '김치-30000kg',
    reqNum: 3,
  },
  {
    key: 4,
    name: '과제대신해주는로봇',
    reqNum: 65,
  },
  {
    key: 5,
    name: '호랑이기운',
    reqNum: 12,
  },
];

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

export function getOffers(page, pageSize) { // eslint-disable-line
  return createDummy({ offers: DUMMY_OFFERS, offerNum: 30 });
}

export function getOffer(offerId) {
  return createDummy({ offer: DUMMY_OFFERS[offerId - 1] });
}

export function postOffer(offer) {
  return createDummy({ offer });
}

export default sauce;
