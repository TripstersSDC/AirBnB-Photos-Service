/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {

  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 1000,
      timeUnit: '1s',
      duration: '1m',
      preAllocatedVUs: 140,
      maxVUs: 140,
    },
  },
  // vus: 100,
  // duration: '1m',
};
export default function () {
  const random = Math.floor(Math.random() * 10000000);
  const url = `http://localhost:3003/?propertyId=${random}`;
  http.get(url);
  sleep(0.05);
}
