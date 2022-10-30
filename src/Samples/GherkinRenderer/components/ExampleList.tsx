import React from "react";
import { Examples } from "@cucumber/messages";
import { Example } from "./Example";
import { IListSelection } from "azure-devops-ui/List";

export interface ExampleListProps {
  examples: readonly Examples[] | undefined;
  onSelectionChanged: (data: any) => void;
  selections:IListSelection[];
}

export const ExampleList: React.FC<ExampleListProps> = (props): JSX.Element => {
  if (!props?.examples || props.examples.length === 0) {
    return <></>;
  }

  return (
    <>
      {props.examples.map((ex,index) => {
        return (
          <Example example={ex} key={ex.id} selection ={props.selections[index]} onSelectionChanged={props.onSelectionChanged} />
        );
      })}
    </>
  );
};
