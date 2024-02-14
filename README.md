# what I did
What's this fork for:
- `feat-custom-classes-patch-reactivity `: hack (to be used with pnpm patch) to allow any custom class to gain reactivity

- `chore-proxy branch`: tried to refactor the proxy function for readability, but performance not exactly as good as original. since rich doesnt want to use any build step/terser, it has to stay as ugly. (https://github.com/sveltejs/svelte/pull/10423)

- `benchmark branch`: Also tried adding a benchmakr that would build the source and test different versions of the proxy function.

-----

[![license](https://img.shields.io/npm/l/svelte.svg)](LICENSE.md) [![Chat](https://img.shields.io/discord/457912077277855764?label=chat&logo=discord)](https://svelte.dev/chat)

## What is Svelte?

Svelte is a new way to build web applications. It's a compiler that takes your declarative components and converts them into efficient JavaScript that surgically updates the DOM.

Learn more at the [Svelte website](https://svelte.dev), or stop by the [Discord chatroom](https://svelte.dev/chat).

## Supporting Svelte

Svelte is an MIT-licensed open source project with its ongoing development made possible entirely by fantastic volunteers. If you'd like to support their efforts, please consider:

- [Becoming a backer on Open Collective](https://opencollective.com/svelte).

Funds donated via Open Collective will be used for compensating expenses related to Svelte's development such as hosting costs. If sufficient donations are received, funds may also be used to support Svelte's development more directly.

## Roadmap

You may view [our roadmap](https://svelte.dev/roadmap) if you'd like to see what we're currently working on.

## Contributing

Please see the [Contributing Guide](CONTRIBUTING.md) and the [`svelte`](packages/svelte) package for information on contributing to Svelte.

### svelte.dev

The source code for https://svelte.dev lives in the [sites](https://github.com/sveltejs/svelte/tree/master/sites/svelte.dev) folder, with all the documentation right [here](https://github.com/sveltejs/svelte/tree/master/documentation). The site is built with [SvelteKit](https://kit.svelte.dev).

## Is svelte.dev down?

Probably not, but it's possible. If you can't seem to access any `.dev` sites, check out [this SuperUser question and answer](https://superuser.com/q/1413402).

## License

[MIT](LICENSE.md)
