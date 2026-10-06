/**
 * Module-scoped flag: true once the preloader has run.
 * Survives client-side navigations, resets on a full page load —
 * so the loader shows once per hard visit, never on SPA navs.
 */
export const loaderState = { done: false };

/** Seconds until the page is revealed; Hero keys its stagger off this. */
export const LOADER_REVEAL = 2.0;
