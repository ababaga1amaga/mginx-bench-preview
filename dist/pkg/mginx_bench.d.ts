/* tslint:disable */
/* eslint-disable */

export function cascade_meta(spec: string): string;

/**
 * WASM/JS API for multi-worker cascades: each worker loads its own module instance and sums a stop[0] range.
 */
export function cascade_range(spec: string, lo: number, hi: number): number;

export function solve(spec: string): string;

/**
 * Generic range API for splittable kernels (cascade: reel-1 stops; waysDp/megaways: reel-1 stops). Returns the partial EV numerator / its own scale.
 */
export function solve_range(spec: string, lo: number, hi: number): number;

/**
 * {"n0": number of reel-1 stops} for splittable kinds, {"n0":0} otherwise.
 */
export function split_meta(spec: string): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly cascade_meta: (a: number, b: number) => [number, number];
    readonly cascade_range: (a: number, b: number, c: number, d: number) => number;
    readonly solve: (a: number, b: number) => [number, number];
    readonly solve_range: (a: number, b: number, c: number, d: number) => number;
    readonly split_meta: (a: number, b: number) => [number, number];
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
