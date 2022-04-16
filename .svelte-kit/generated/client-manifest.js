export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/buddhasahassanamavali/pastCode_storage.svelte"),
	() => import("../../src/routes/buddhasahassanamavali/SearchInput.svelte"),
	() => import("../../src/routes/buddhasahassanamavali/ModalVocab.svelte"),
	() => import("../../src/routes/buddhasahassanamavali/VerseInput.svelte"),
	() => import("../../src/routes/buddhasahassanamavali/[slug].svelte"),
	() => import("../../src/routes/addcontent/index.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"buddhasahassanamavali/pastCode_storage": [[0, 3], [1]],
	"buddhasahassanamavali/SearchInput": [[0, 4], [1]],
	"buddhasahassanamavali/ModalVocab": [[0, 5], [1]],
	"buddhasahassanamavali/VerseInput": [[0, 6], [1]],
	"buddhasahassanamavali/[slug]": [[0, 7], [1], 1],
	"addcontent": [[0, 8], [1]]
};