import { performance } from 'node:perf_hooks';
import { compile } from 'svelte/compiler';
import { proxy } from './src/internal/client/proxy.js';
import { minify } from 'terser';

async function compile_test() {
	// compile
	let compiledCode = compile(
		`<script>
			const inner = $state({
				count: 0
			})

			const object = $state({
				outer: {
					inner
				}
			});
		</script>

		<button onclick={() => inner.count += 1}>
			clicks: {object.outer.inner.count}
		</button>
		`,
		{
			generate: 'client',
			runes: true,
			dev: false
		}
	);
	debugger;
	const minified = await minify(compiledCode);
}

const res = await compile_test();
console.log(res);

// Example object to proxy
const object = { a: 1, b: { c: 2 }, d: [1, 2, 3, 4, 5] };

function benchmark(total_iterations) {
	const start = performance.now();
	const results = [];
	const interval = Math.ceil(total_iterations / 10); // Calculate the interval for logging every 1/10th of total iterations

	for (let i = 1; i <= total_iterations; i++) {
		proxy(object); // Call your proxy function here

		if (i % interval === 0 || i === total_iterations) {
			const current_time = performance.now();
			// console.log(`${i} calls: ${(currentTime - start).toFixed(2)}ms`);
			// results.push({ iteration: i, time: currentTime - start });
			results.push(current_time - start);
		}
	}

	const end = performance.now();
	const last_result = results[results.length - 1];
	console.log(`${total_iterations} calls: ${last_result.toFixed(2)}ms`);
	return results;
}

// Set a fixed number of iterations
// const totalIterations = 10000000; // Example: 10,000 iterations
// const measurements = benchmark(totalIterations);
// console.log('Measurements:', measurements);
