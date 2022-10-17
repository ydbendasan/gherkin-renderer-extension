import React from "react";
import { Examples } from "@cucumber/messages";
import { Example } from "./Example";

export interface ExampleListProps {
  examples: readonly Examples[];  
  onSelectionChanged:(data:any)=>void;
}

export const ExampleList: React.FC<ExampleListProps> = (props): JSX.Element => {
  if (!props?.examples || props.examples.length === 0) {
    return <></>;
  }
  
  return (
    <>
      {props.examples.map((ex) => {                
        return (
          <Example example={ex} key={ex.id} onSelectionChanged={props.onSelectionChanged} />
        );
      })}
    </>
  );
};
