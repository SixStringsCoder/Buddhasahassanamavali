export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/buddhasahassanamavali/pastCode_storage.svelte"),
	() => import("../../src/routes/buddhasahassanamavali/[slug].svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"buddhasahassanamavali/pastCode_storage": [[0, 3], [1]],
	"buddhasahassanamavali/[slug]": [[0, 4], [1]]
};