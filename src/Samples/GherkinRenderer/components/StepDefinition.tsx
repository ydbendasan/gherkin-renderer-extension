import { Step } from "@cucumber/messages";
import React from "react";
import { OutlineValues } from "../models/outlineValues";

const decomposeText = (
  text: string,
  placeHolders: OutlineValues | undefined,  
  currentExample: any
) => {
  if (!placeHolders) {
    return <span>{text}</span>;
  }
  
  Object.entries(placeHolders)
    .filter(([key, value]) => key !== undefined)
    .forEach(([key, value]) => {
      const val =  currentExample[key]?? key;
      text = text.replaceAll(
        `<${key}>` as string,
        `<span class="placeholder">${val}</span>`
      );
    });

  return <span dangerouslySetInnerHTML={{ __html: text }} />;
};

export interface StepProps {
  step: Step;
  placeHolders: OutlineValues | undefined;  
  currentExample:any;
}

export const StepDefinition: React.FC<StepProps> = (props): JSX.Element => {
  return (
    <>
      <span className="keyword">{props.step.keyword}</span>
      {decomposeText(props.step.text, props.placeHolders, props.currentExample)}
    </>
  );
};
