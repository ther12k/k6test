# k6test
test with k6

based on https://www.youtube.com/watch?v=r-Jte8Y8zag

`sudo docker run -i loadimpact/k6 run - <emis_spiketest.js`
`sudo docker run -i loadimpact/k6 run - <dbtest.js`

    ✗ reached request rate
      ↳  82% — ✓ 30172 / ✗ 6260
    
    checks.........................: 82.81% ✓ 30172     ✗ 6260 
    data_received..................: 11 MB  6.1 kB/s
    data_sent......................: 5.2 MB 2.8 kB/s
    http_req_blocked...............: avg=134.8µs min=1.27µs   med=6.89µs   max=210.18ms p(90)=559.55µs p(95)=705.61µs
    http_req_connecting............: avg=96.67µs min=0s       med=0s       max=20.93ms  p(90)=461.22µs p(95)=581.86µs
    ✗ http_req_duration..............: avg=10.2s   min=280.31µs med=746.81µs max=1m0s     p(90)=1m0s     p(95)=1m0s    
    { expected_response:true }...: avg=30.92s  min=2.96s    med=31.24s   max=59.37s   p(90)=53.47s   p(95)=56.4s   
    ✗ http_req_failed................: 99.92% ✓ 36403     ✗ 29   
    http_req_receiving.............: avg=77.81µs min=0s       med=73.77µs  max=8.4ms    p(90)=133.84µs p(95)=161.38µs
    http_req_sending...............: avg=54.85µs min=6.98µs   med=31.9µs   max=3.66ms   p(90)=111.28µs p(95)=157.16µs
    http_req_tls_handshaking.......: avg=0s      min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
    http_req_waiting...............: avg=10.2s   min=249.57µs med=605.42µs max=1m0s     p(90)=1m0s     p(95)=1m0s    
    http_reqs......................: 36432  19.299132/s
    iteration_duration.............: avg=11.86s  min=1.99s    med=2s       max=1m0s     p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 36432  19.299132/s
     vus............................: 1      min=1       max=400
     vus_max........................: 400    min=400     max=400

