/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  /** Formspree form endpoint for transfer requests, e.g. https://formspree.io/f/<id>. Public by design. See docs/formspree-integration.md. */
  readonly PUBLIC_FORMSPREE_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
