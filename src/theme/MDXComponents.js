import React from "react";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import DocCardList from "@theme/DocCardList";
import {
  InlineDanger,
  InlineWarning,
  InlineInfo,
  InlineSuccess,
} from "../components/CustomDocItem/InlineText";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Add globally available components
  Tabs,
  TabItem,
  DocCardList,
  InlineDanger,
  InlineWarning,
  InlineInfo,
  InlineSuccess,
};
