import type { Context, ContextType } from "@lit/context";
import type { Connection, UnsubscribeFunc } from "home-assistant-js-websocket";
import type { ReactiveElement } from "lit";
type SubscribeFn<T> = (connection: Connection, setValue: (value: T) => void) => UnsubscribeFunc | Promise<UnsubscribeFunc>;
/**
 * A context provider that defers its data subscription until the first
 * consumer requests the context. This avoids unnecessary WebSocket
 * subscriptions for data that may never be needed.
 *
 * Consumers that request the context before data has loaded will have
 * their callbacks buffered and flushed once the first value arrives.
 *
 * When all subscribing consumers disconnect, the WebSocket subscription
 * is torn down after a grace period (5 s) so that transient disconnects
 * (e.g. navigating between views) don't cause unnecessary re-subscriptions.
 * If a new consumer appears within the grace period, the teardown is cancelled.
 */
export declare class LazyContextProvider<C extends Context<unknown, unknown>, T extends ContextType<C> = ContextType<C>> {
    private _host;
    private _provider;
    private _context;
    private _loaded;
    private _subscribing;
    private _connection?;
    private _unsubscribe?;
    private _subscribeFn;
    /** Number of currently active subscribing consumers. */
    private _subscriberCount;
    /** Timer handle for the idle teardown grace period. */
    private _teardownTimer?;
    private _pendingCallbacks;
    constructor(_host: ReactiveElement, options: {
        context: C;
        initialValue?: T;
        subscribeFn: SubscribeFn<T>;
    });
    /**
     * Set the connection reference. Called from hassConnected().
     * Does not start subscribing -- that only happens when a consumer
     * requests the context.
     */
    setConnection(connection: Connection): void;
    /**
     * Clean up the subscription and all internal state.
     */
    unsubscribe(): void;
    private _onContextRequest;
    /**
     * Wrap a subscribing consumer's callback to track subscribe/unsubscribe.
     * When the inner provider calls `callback(value, disposer)`, we replace
     * the disposer with one that decrements our count and schedules teardown.
     */
    private _wrapCallback;
    /**
     * Schedule tearing down the WebSocket subscription after the grace period.
     */
    private _scheduleTeardown;
    private _clearTeardownTimer;
    /**
     * Tear down the WebSocket subscription and reset to the unloaded state.
     * The next consumer request will trigger a fresh subscription.
     */
    private _teardownSubscription;
    private _startSubscription;
    private _flushPendingCallbacks;
}
export {};
