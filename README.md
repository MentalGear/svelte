# What is it?

This allows all custom classes to have reactivity by adding a `_customReactiveClasses` property with the class names one wants to be reactive, to the $state( ). Define a custom Class, and have :

```js
class Task {
		constructor(text, reactive = false) {
			if (reactive) {
				this._customReactiveClasses = 'Task'
			}
			this.done = false
			this.text = text
		}
}
```

# How it works?

Run from `packages/svelte/` @ pnpm dev

and run from `svelte-5-preview` @ pnpm dev

# Example
http://localhost:5173/#H4sIAAAAAAAAE71Ye4_buBH_KhOnhe2rbeUefxRe2Ysgd0GDXotDk8OhWC0KShxbPNOkII7Waxj-7sWQlCw_Nk1aoLtAVhxyZn7z5DCHwUppdIP5w2FgxBYH88HbqhpMBrSveOGeUBMOJgNnm7pgCgCkrqhVRcvMZKSRgKy0DhbwB0eCcPTwOL7LDG9mxP8WWjgHn4TbwCFQC2sc1U1Bth4RPtMEahQFqSeEBayEdjhuj2akVjBqt3vkjKhUbvavonFkt_-IB96xLmQwQ1Y4bE8f2w_PJK3pNJ1tMBhYAP85pwu3YaEPYHAHH5uchY_G8BhOHVtzya7XGn-0BkfXUKPWV93i7oJ7zb5kTT-jWVN5LqJGamoDJzj3M-2PXQgxuPvY5CN4ErpBuEbheWdV40oYnRkzPgmKgcvIIbX7nxf48OZxVtW2Ysf_RQGVNQ5vyIvhF1p_8p76G1JpZd_QJAFp0RmCna039-dR6Hn3hnCJyPo7UZZKrN83pqBzT3L2WY0zbdejobRgLAHVar3GejjuEmbSpTBj6nB0EOYwGsNi-aJgRjyc-HiNLz12ZcdNbp8jUYT_fukwe8pB3hCEcm2rifbRl7fNijBUjQXp_ZfYc_-CQS9l9v_NrC6_2oyI5RD_hA4UM_lWE-rlx3_oKlHI8Ox4m_muybkagDvp8AxIKG5X2kZLQ--E1n2dZ2a3h4DLZDi-sicamyQgHAhYCbZgDytOdGVN3GuXsBUb9AXMTS3qTBLgn9hS-iT-8R050lr3Sp_xvmFOLo9f9bzepj_wcor0Th6vVCJW805gF-cbZX22_QX1fXY-6O159bQV6_6M9kID-ByEy05wcfZmS7iG-AKQW9X7lWC-PFY9SBeU_vrYHg_ZajLqkrHGrVBGmfXIzwzjfi12EGsshC4aLUiZ9XAce0l7_zHfbKU0Ye2FsNWv-CP0kngp3vWqv9MupPxkpR3hExrqdPN84SmzDe7h1WIBw58Mca7EAumGmSSJ6vn2HPlRwFdW4CZRr5Fm4Zr8E2Q8KT34zvGYDcYwbieE_0IAtI3oMRtMgOoGO3k3MHUVD5-R-z60jffRN4_ZAIJML_UG4wKGw55XfWTT5DQJmrT8btkCVbSHla2hbZxpUn4XD32_hN9KQaAIlN_4fpmZtFrG6ZGJhahErhHsqq1bZdawUgan61oog_I0LzaVFIQOdiUa8BOAzX_HghwUpTBrnMCep6oSu44oNKNTDnJtiw1KD7QIQGdpUkU4n0qPxIDQzoJGIYEsYF1bg7Zx8OsHQI1bNORAGAm72po1SEEClKkamnB7Zr3BfcqB4qwyQut9RC395cbtSSpXabFHCcp4pl8_zGBUlFhs_HLYFc4Q2E2NG18grQQVJQit7c7B3jYMtnHYGgb5HiSuvAiWqGp_SQFXBYTLDshWoPEJNfB9hjXtZxC0xLj91didgZ_VVpFgT3bhyyht9DKkTqrV8p-2YdcNwx3mBW_9pOdgVdstCNB2h3XQNoPfyj174R5-sc4pjryzumENc2-D8GkdLnEOFoqi7HiV1pxLxPH3IyN8WHm1PmfqaBdZyC2R3U7AWLYv17hl87S6ibtzHShTYq0ITYEwaoxGF_zLVeZj45o8FCkHsstLTomYvL25JVif2yccz2C0K1VRejAi15ySrDlHR1DVzFGwmH1pd95qAZwCJJTxxRFml6bGRNRFqQj9AqYBut1W1vlzZ7vKOEIhxz45XVMhjz47diE-F4gStuKZE6zYdJ5JEx9anwA_PYttpbELe_xNfcKDNfMN7qXdmcUhttojJDF9fljCdDpd-n7nQOOK5nC4vA6OpwsiTcofAiuxGR4KpFSikMvM8FWVUh2_-Ltc_l1sMU2oPCMqx3fq_RX9Y5N7KFcb76yh2uoePU2iIqa16lPKrdzHE4fXPiPDM5irXrjNBBSM-GOm5Ph40nDCzCvZWwGkr6ZTiM7MlZFz3zoWBy-GpzJ2J0yny97YS73dnuTkTPSVoqCD3_iLbODbTG6fs0HQ6tcoo16-VY_coDgMMlleKTmBCWpO0OKs7OZwCM65nz2ox_tZ740Lxz7DqYtkdOnYPm_IXi-c_Xwmo63lS1pGrw_qOIdDZPRD-zVn0mP1EBKG8CLKs98eW5o3RNZwTRRaFZvFIcxn3qXxiT4-Lt9K2T5L0iSwnAfqc2L6j_PxcfmRHxhh_fDm0ffwnsw-zMsA0s3Ny5z5HJT--Hpchrd9d4uAjEPq15t4_T8FxyU_niCq8P3UqVz5bh_OfL0WHhtum_AjDxSs8H8TGu2_FBzo8Ev0Uz9aL1YytwjOmq2tuc3rZmsc2BoCq68MgyhRhj7RCWn7TpfPnhqbWJp0Tdakjvb-E8ATeUxmxp2SVM7h2zdv_ngXKLmtJdbTwmotKodzaL_8fhy-qWznbP-unAqt1mbuL4A7SL6Bt_L3xpF_d5wS5mTEN8np2cuIZAunElIqs57Dn6vnMzxz-LZ65gFCSXgtpWzBpEkwbDAZbK1UK4VyMOdR-vh4_DeJP9H3BhUAAA==


[![Cybernetically enhanced web apps: Svelte](https://sveltejs.github.io/assets/banner.png)](https://svelte.dev)

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
