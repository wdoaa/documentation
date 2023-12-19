import React from "react";
import clsx from "clsx";
import { useLocation } from "@docusaurus/router";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/theme-common/internal";
import LastUpdated from "@theme/LastUpdated";
import EditThisPage from "@theme/EditThisPage";
import TagsListInline from "@theme/TagsListInline";
import styles from "./styles.module.css";
import Translate from "@docusaurus/Translate";
const contributorsData = require("@site/static/contributors.json");

function TagsRow(props) {
  return (
    <div
      className={clsx(
        ThemeClassNames.docs.docFooterTagsRow,
        "row margin-bottom--sm",
      )}
    >
      <div className="col">
        <TagsListInline {...props} />
      </div>
    </div>
  );
}
function EditMetaRow({
  editUrl,
  lastUpdatedAt,
  lastUpdatedBy,
  formattedLastUpdatedAt,
}) {
  return (
    <div className={clsx(ThemeClassNames.docs.docFooterEditMetaRow, "row")}>
      <div className="col">{editUrl && <EditThisPage editUrl={editUrl} />}</div>
      <div className={clsx("col", styles.lastUpdated)}>
        {(lastUpdatedAt || lastUpdatedBy) && (
          <LastUpdated
            lastUpdatedAt={lastUpdatedAt}
            formattedLastUpdatedAt={formattedLastUpdatedAt}
            lastUpdatedBy={lastUpdatedBy}
          />
        )}
      </div>
    </div>
  );
}
export default function DocItemFooter() {
  let { pathname } = useLocation();
  pathname = pathname.replace("/en", "");
  const filename = "docs" + pathname + ".md";

  const { metadata } = useDoc();
  const {
    editUrl,
    lastUpdatedAt,
    formattedLastUpdatedAt,
    lastUpdatedBy,
    tags,
  } = metadata;
  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;
  if (!canDisplayFooter) {
    return null;
  }
  return (
    <>
      <footer
        className={clsx(ThemeClassNames.docs.docFooter, "docusaurus-mt-lg")}
      >
        {canDisplayTagsRow && <TagsRow tags={tags} />}
        {canDisplayEditMetaRow && (
          <EditMetaRow
            editUrl={editUrl}
            lastUpdatedAt={lastUpdatedAt}
            lastUpdatedBy={lastUpdatedBy}
            formattedLastUpdatedAt={formattedLastUpdatedAt}
          />
        )}
      </footer>
      {contributorsData[filename] && (
        <h3
          className={clsx(ThemeClassNames.docs.docFooter, "docusaurus-mt-lg")}
        >
          <Translate id="docs.contributors" />
        </h3>
      )}
      <ul className={styles.dedicateUl}>
        {contributorsData[filename] &&
          contributorsData[filename].map((item, key) => {
            if (item.name !== "web-flow") {
              return (
                <li key={key}>
                  <a href={item.html_url} target="_black">
                    <img
                      src={item.avatar_url}
                      alt={item.name}
                      title={item.name}
                    />
                  </a>
                </li>
              );
            }
          })}
      </ul>
    </>
  );
}
