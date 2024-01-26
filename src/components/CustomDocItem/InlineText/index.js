import React from "react";

/**
 * This extra component is needed, because <DocDangerText> should remain generic.
 * DocPaginator is used in non-docs contexts too: generated-index pages...
 */
export const InlineDanger = ({ children }) => (
  <span
    style={{
      backgroundColor: "var(--ifm-color-danger-contrast-background)",
      borderRadius: "3px",
      color: "var(--ifm-color-danger-contrast-foreground)",
      padding: "0.2rem",
    }}
  >
    {children}
  </span>
);

export const InlineWarning = ({ children }) => (
  <span
    style={{
      backgroundColor: "var(--ifm-color-warning-contrast-background)",
      borderRadius: "3px",
      color: "var(--ifm-color-warning-contrast-foreground)",
      padding: "0.2rem",
    }}
  >
    {children}
  </span>
);

export const InlineInfo = ({ children }) => (
  <span
    style={{
      backgroundColor: "var(--ifm-color-info-contrast-background)",
      borderRadius: "3px",
      color: "var(--ifm-color-info-contrast-foreground)",
      padding: "0.2rem",
    }}
  >
    {children}
  </span>
);
export const InlineSuccess = ({ children }) => (
  <span
    style={{
      backgroundColor: "var(--ifm-color-success-contrast-background)",
      borderRadius: "3px",
      color: "var(--ifm-color-success-contrast-foreground)",
      padding: "0.2rem",
    }}
  >
    {children}
  </span>
);
