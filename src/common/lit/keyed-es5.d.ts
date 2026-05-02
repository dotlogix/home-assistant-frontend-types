/**
 * ES5-compatible implementation of the keyed directive.
 * Based on lit-html's keyed directive but written to avoid ES5 minification issues.
 *
 * This implementation avoids parameter destructuring in the update() method,
 * which causes Terser with ecma: 5 to generate invalid references like `_k`.
 *
 * Used only for ES5 builds (legacy browsers). Modern builds use the original
 * lit-html keyed directive.
 *
 * @see https://github.com/home-assistant/frontend/issues/28732
 */
import { Directive } from "lit-html/directive.js";
declare class KeyedES5 extends Directive {
    private _key;
    render(k: unknown, v: unknown): unknown;
    update(part: unknown, args: [unknown, unknown]): unknown;
}
/**
 * Associates a renderable value with a unique key. When the key changes, the
 * previous DOM is removed and disposed before rendering the next value, even
 * if the value - such as a template - is the same.
 *
 * This is useful for forcing re-renders of stateful components, or working
 * with code that expects new data to generate new HTML elements, such as some
 * animation techniques.
 */
export declare const keyed: (k: unknown, v: unknown) => import("lit-html/directive.js").DirectiveResult<typeof KeyedES5>;
export {};
