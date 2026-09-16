import { flushSync } from 'react-dom';

/* Runs a state update inside a View Transition when the browser supports it
   and the visitor has not asked for reduced motion. Otherwise the update
   simply happens. */
export function withViewTransition(update) {
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (!document.startViewTransition || reduce) {
    update();
    return;
  }
  document.startViewTransition(() => flushSync(update));
}
