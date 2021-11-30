import React from "react";

import { TopToolbar } from "react-admin";

import { ImportButton } from "react-admin-import-csv";
import { CreateButton, ExportButton } from "ra-ui-materialui";

export const ListActions = (props) => {
  const {
    className,
    basePath,
    total,
    resource,
    currentSort,
    filterValues,
    exporter,
  } = props;
  return (
    <TopToolbar className={className}>
      <CreateButton basePath={basePath} />
    </TopToolbar>
  );
};
