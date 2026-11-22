import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => cleanup());

// jsdom has no IntersectionObserver; the app falls back gracefully, but stub it to exercise the observer path.
class MockIntersectionObserver {
    constructor(private cb: IntersectionObserverCallback) {}
    observe(el: Element) {
        this.cb(
            [
                {
                    isIntersecting: true,
                    target: el,
                    boundingClientRect: el.getBoundingClientRect(),
                } as IntersectionObserverEntry,
            ],
            this as unknown as IntersectionObserver
        );
    }
    unobserve() {}
    disconnect() {}
    takeRecords() {
        return [];
    }
}
globalThis.IntersectionObserver =
    MockIntersectionObserver as unknown as typeof IntersectionObserver;
