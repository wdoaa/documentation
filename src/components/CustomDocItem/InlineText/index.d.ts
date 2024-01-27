/// <reference types="react" />
/**
 * This extra component is needed, because <DocPaginator> should remain generic.
 * DocPaginator is used in non-docs contexts too: generated-index pages...
 */
export function InlineDanger({ children }): JSX.Element;
export function InlineWarning({ children }): JSX.Element;
export function InlineInfo({ children }): JSX.Element;
export function InlineSuccess({ children }): JSX.Element;
