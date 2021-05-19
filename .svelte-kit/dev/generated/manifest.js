const c = [
	() => import("../components/layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/schedules-links/index.svelte"),
	() => import("../../../src/routes/announcements/index.svelte"),
	() => import("../../../src/routes/win-skittles/index.svelte"),
	() => import("../../../src/routes/extra-info/index.svelte"),
	() => import("../../../src/routes/dashboard/index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/schedules-links/index.svelte
	[/^\/schedules-links\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/announcements/index.svelte
	[/^\/announcements\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/win-skittles/index.svelte
	[/^\/win-skittles\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/extra-info/index.svelte
	[/^\/extra-info\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/dashboard/index.svelte
	[/^\/dashboard\/?$/, [c[0], c[7]], [c[1]]]
];

export const fallback = [c[0](), c[1]()];