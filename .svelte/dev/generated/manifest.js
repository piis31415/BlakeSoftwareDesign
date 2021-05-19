const c = [
	() => import("../../../src/routes/$layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/announcements/index.svelte"),
	() => import("../../../src/routes/dashboard/index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/announcements/index.svelte
	[/^\/announcements\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/dashboard/index.svelte
	[/^\/dashboard\/?$/, [c[0], c[4]], [c[1]]]
];

export const fallback = [c[0](), c[1]()];