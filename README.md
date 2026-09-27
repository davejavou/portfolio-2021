# Dave Cutter's Portfolio

This portfolio was made in July 2021, in Melbourne Australia during the fifth lockdown. It is created with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). Additionally supported by [React-Slick](https://react-slick.neostack.com/), and [FontAwesome](https://fontawesome.com/).
 - April 2024: Updated with recent work.

## Learning Jotai

Jotai holds the state for each project carousel. It is useful here for learning how small pieces of state can be defined independently and then subscribed to by React components. See the [Jotai documentation](https://jotai.org/docs) for the complete API.

### Atom configs and values

In `components/use-project-carousel.ts`, `carouselStateFamily` creates an atom config for a carousel id. The id combines the content type and project key, so the photography project numbered `1` cannot collide with the portfolio project numbered `1`. Each atom starts with a selected slide, Embla's snap points, and the set of slides that have been loaded. This hook is the place to start when tracing Jotai state through the carousel.

An atom config is a definition, not the live value. Jotai stores the current value separately. `useAtom` connects a carousel component to its config and returns both the current state and a setter. When the state changes, that carousel rerenders; unrelated carousels don't subscribe to the same atom.

### Following a carousel update

1. The hook attaches Embla to the rendered viewport and exposes previous, next, and direct navigation actions.
2. When Embla becomes ready, its snap list is written to the carousel's atom.
3. When Embla selects a slide, the handler writes the new selected index and creates a new `Set` containing the current and neighboring slide indexes. Copying the `Set` matters: Jotai, like React, needs a new value identity to detect the update.
4. `projects.tsx` uses the hook's returned values to render the active pagination dot and replace placeholders with images for indexes in the loaded set.

The atom family is keyed by stable project ids, and the Jotai store lives at the app root. That means a project's carousel position is retained when navigating away and back during the same app session. The family is a good fit for this finite project list; for unbounded ids, remove old family entries to prevent its cache from growing indefinitely.

### The Provider and Next.js

`pages/_app.tsx` wraps the page tree in Jotai's `Provider`. It supplies the store used by atoms and keeps state scoped to this app tree. A Provider is especially important with Next.js server rendering: it avoids using Jotai's implicit global store across separate requests.

The viewport-width hook remains outside Jotai. It is only used by one page to choose responsive navigation, so it doesn't need shared application state.

Further reading: [atom](https://jotai.org/docs/core/atom), [useAtom](https://jotai.org/docs/core/use-atom), [Provider](https://jotai.org/docs/core/provider), and [atom families](https://jotai.org/docs/utilities/family).

