import http from 'k6/http';
import { sleep,check } from 'k6';
export let options = {
  stages: [
    { duration: '2m', target: 100 }, //below normal
    { duration: '5m', target: 100 },
    { duration: '2m', target: 200 }, //normal load
    { duration: '5m', target: 200 },
    { duration: '2m', target: 300 }, //around breaking point
    { duration: '5m', target: 300 },
    { duration: '2m', target: 400 }, //beyond breaking point
    { duration: '5m', target: 400 },
    { duration: '3m', target: 0 }, //scale down, recovery stage
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'],   // http errors should be less than 1% 
    http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
  }, 
};
export default function () {
  const before = new Date().getTime();
  const T = 2; //time in seconds
  //http.get('http://siapbelajar.kemenag.go.id/api/test');
  http.get('http://siapbelajar.kemenag.go.id/api/v1/madrasah/kesiapan-siswa/summary/121231710007');
  const after = new Date().getTime();
  const diff = (after - before) / 1000;
  const remainder = T - diff;
  check(remainder, { 'reached request rate': remainder > 0 });
  if (remainder > 0) {
    sleep(remainder);
  } else {
    console.warn(`Timer exhausted! The execution time of the test took longer than ${T} seconds`);
  }
}

