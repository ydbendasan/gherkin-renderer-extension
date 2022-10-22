import React, { useState } from "react";
import { Background, Examples, Scenario as cucumberScenario } from "@cucumber/messages";
import { Description } from "./Description";
import { StepDefinition } from "./StepDefinition";
import { ExampleList } from "./ExampleList";
import { OutlineValues } from "../models/outlineValues";
import { Card } from "azure-devops-ui/Card";
import { ScrollableList, IListItemDetails, ListSelection, ListItem } from "azure-devops-ui/List";
import { Step } from "@cucumber/messages";
import { ArrayItemProvider } from "azure-devops-ui/Utilities/Provider";

export interface ScenarioProps {
  scenario: cucumberScenario | undefined;
  background: Background|undefined;
}

let placeHolders: OutlineValues | undefined;

const getVariables = (
  examples: readonly Examples[] | undefined
): OutlineValues | undefined => {
  if (!examples || examples.length === 0) {
    return;
  }

  let result: { [key: string]: string[] } = {};
  examples.forEach((ex: Examples) => {
    ex.tableHeader?.cells.forEach((th, i) => {
      result[th.value] = ex.tableBody.map((tr) => tr.cells[i].value);
    });
  });

  return result;
};

const renderRow = (
  index: number,
  item: Step,
  details: IListItemDetails<Step>,
  key?: string,  
  currentExample: any = {}
): JSX.Element => {
  const stepProps = {
    step: item,
    placeHolders,    
    currentExample
  };

  return (
    <ListItem key={key || "list-item" + index} index={index} details={details}>
      <StepDefinition {...stepProps} key={item.id} />
    </ListItem>
  );
};

const renderSteps=(scenario: cucumberScenario|Background|undefined, selection:ListSelection, currentExample:any): JSX.Element =>{
  console.log(scenario);
  if(!scenario){
    return <></>;
  }

  return (
    <>
    <Description value={scenario.description?.trim()} />
    <ScrollableList
      itemProvider={new ArrayItemProvider(scenario.steps as Array<Step>)}
      renderRow={(index: number, item: Step, details: IListItemDetails<Step>, key?: string,) => renderRow(index, item, details, key, currentExample)}
      selection={selection}
      width="100%"
    />
    </>
  );
}


export const Scenario: React.FC<ScenarioProps> = (props): JSX.Element => {
  placeHolders = getVariables(props?.scenario?.examples);  
  const [currentExample, setCurrentExample] = useState();

  const selection = new ListSelection(true);
  const setCurrent = (data: any) => {
    setCurrentExample(data);    
  };

  const scenario = props?.background||props?.scenario;

  const examples =props.scenario?.examples;
  if (!scenario) {
    return <></>;
  }

  return (

    <Card className="flex-grow"
      key={scenario.id}
      titleProps={{ text: `${scenario.keyword}: ${scenario.name}` }}
    >
      <div className="flex-column">        
        {renderSteps(scenario, selection, currentExample)}

        <ExampleList
          examples={examples}
          onSelectionChanged={setCurrent}
        />
      </div>
    </Card>
  );
};
