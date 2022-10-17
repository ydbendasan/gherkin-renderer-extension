import React from "react";
import { Examples } from "@cucumber/messages";
import { Description } from "./Description";
import { ArrayItemProvider } from "azure-devops-ui/Utilities/Provider";
import { renderSimpleCell, Table } from "azure-devops-ui/Table";
import { ObservableValue } from "azure-devops-ui/Core/Observable";
import { ListSelection } from "azure-devops-ui/List";
import { Header, TitleSize } from "azure-devops-ui/Header";

export interface ExamplesProps {
  example: Examples;
  onSelectionChanged: (data: any) => void;
}

const getExampleColumns = (ex: Examples) => {
  if (!ex.tableHeader) {
    return [];
  }

  const columns = ex.tableHeader.cells.map((th) => {
    return {
      id: th.value,
      name: th.value,
      renderCell: renderSimpleCell,
      readonly: true,
      width: new ObservableValue(-40),
    };
  });
  return columns;
};

const getExampleItems = (columns: any, ex: Examples): any[] => {
  return ex.tableBody.map((tr) => {
    let row: { [key: string]: any } = {};
    row.key = tr.id;
    tr.cells.forEach((tc, i) => {
      const fieldName = columns[i].name;
      if (fieldName) {
        row[fieldName] = tc.value;
      }
    });
    return row;
  });
};


export const Example: React.FC<ExamplesProps> = (props): JSX.Element => {
  if (!props?.example) {
    return <></>;
  }

  const selection = new ListSelection({
    selectOnFocus: true,
    multiSelect: false
  });
  const ex = props.example;

  const columns = getExampleColumns(ex);
  const items = new ArrayItemProvider(getExampleItems(columns, ex));

  return (
    <div className="flex-column">
      <Header title={`${ex.keyword}: ${ex.name}`} titleSize={TitleSize.Medium} />
      <Description value={ex.description} />

      <Table
        columns={columns}
        containerClassName="h-scroll-auto"
        itemProvider={items}
        selection={selection}
        role="table"
        onSelect={(event, data) => props.onSelectionChanged && props.onSelectionChanged(data.data)}        
      />
    </div>
  );
};
