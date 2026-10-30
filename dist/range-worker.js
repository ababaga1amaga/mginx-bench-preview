// One of N pool workers: own WASM instance; sums reel-1 stops handed out by the page (dynamic queue).
import init, { solve_range } from "./pkg/mginx_bench.js";
let spec;const ready=init({module_or_path:new URL("./pkg/mginx_bench_bg.wasm",self.location.href)});
self.onmessage=async e=>{await ready;if(e.data.spec){spec=e.data.spec;self.postMessage({ready:true});return;}const i=e.data.i;self.postMessage({v:solve_range(spec,i,i+1)});};
