import { html } from 'lit-html';

export const line = html`<p class="skeleton-text" />`;
export const lineShort = html`<p class="skeleton-text text-short" />`;
export const lineShortSpan = html`<span class="skeleton-text text-short" />`;
export const lineShortXL = html`<p class="skeleton-text text-short-xl" />`;
export const lineShortXXL = html`<p class="skeleton-text text-short-xxl" />`;
export const lineSlot = html`<p class="skeleton-text skeleton-slot" />`;
export const lineSlotStart = html`<p
    class="skeleton-text skeleton-slot-start"
/>`;
export const lines = html`${[...Array(3)].map((_) => line)}`;
