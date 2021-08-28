import http from 'k6/http';
import { sleep,check } from 'k6';
export let options = {
  vus: 500,
  duration : '30s'
};
export default function () {
  const before = new Date().getTime();
  const T = 5;
  //http.get('http://siapbelajar.kemenag.go.id/api/test');
  http.get('http://siapbelajar.kemenag.go.id/api/v1/sso/siswa-info-nik/3101016311160001');
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

