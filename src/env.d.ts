/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "@swup/fade-theme";

declare interface Window {
  twikoo: {
    init: (options: { envId: string; el: string; lang: string }) => void;
  };
}
