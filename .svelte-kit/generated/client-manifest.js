export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/buddhasahassanamavali/pastCode_storage.svelte"),
	() => import("../../src/routes/buddhasahassanamavali/SearchVerses.svelte"),
	() => import("../../src/routes/buddhasahassanamavali/ModalVocab.svelte"),
	() => import("../../src/routes/buddhasahassanamavali/VerseInput.svelte"),
	() => import("../../src/routes/buddhasahassanamavali/test.svelte"),
	() => import("../../src/routes/buddhasahassanamavali/[slug].svelte"),
	() => import("../../src/routes/addcontent/index.svelte"),
	() => import("../../src/routes/addcontent/Test.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"buddhasahassanamavali/pastCode_storage": [[0, 3], [1]],
	"buddhasahassanamavali/SearchVerses": [[0, 4], [1]],
	"buddhasahassanamavali/ModalVocab": [[0, 5], [1]],
	"buddhasahassanamavali/VerseInput": [[0, 6], [1]],
	"buddhasahassanamavali/test": [[0, 7], [1]],
	"buddhasahassanamavali/[slug]": [[0, 8], [1], 1],
	"addcontent": [[0, 9], [1]],
	"addcontent/Test": [[0, 10], [1]]
};