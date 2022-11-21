import React from "react";
import { Examples } from "@cucumber/messages";
import { Description } from "./Description";
import { ArrayItemProvider } from "azure-devops-ui/Utilities/Provider";
import { Table } from "azure-devops-ui/Table";
import { IListSelection } from "azure-devops-ui/List";
import { Header, TitleSize } from "azure-devops-ui/Header";
import { getExampleColumns, getExampleItems } from "../helpers/tableHelpers";

export interface ExamplesProps {
  example: Examples;
  onSelectionChanged: (data: any) => void;
  selection: IListSelection;
}

export const Example: React.FC<ExamplesProps> = (props): JSX.Element => {
  if (!props?.example) {
    return <></>;
  }
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
        selection={props.selection}
        role="table"
        onSelect={(event, data) => {          
          props.onSelectionChanged && props.onSelectionChanged(data.data);
        }}

      />
    </div>
  );
};
