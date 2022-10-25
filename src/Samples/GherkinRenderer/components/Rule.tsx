import { FeatureChild, Background } from "@cucumber/messages";
import { Card } from "azure-devops-ui/Card";

import React from "react";
import { Description } from "./Description";
import { Scenario } from "./Scenario";

export interface RuleProps{
  fc:FeatureChild;
  background:Background|undefined;
};

export const Rule: React.FC<RuleProps> = (props): JSX.Element => {  
  return (
    <>
      {!props?.fc?.rule ? (
        <></>
      ) : (
        <div className="rule container">
          <h2 className="rule-header">{`Rule : ${props.fc.rule.name}`}</h2>
          <Description value={props.fc.rule.description} />
          <div className="ruleChildren">
            {props.fc.rule.children.map((scenario)=>{
                return <Scenario scenario={scenario.scenario} background={props.fc.background} key={scenario.scenario?.id} />
            })}
          </div>
        </div>
      )}
      <Scenario scenario={props.fc.scenario} background={props.background} key={props.fc.scenario?.id}/>
    </>
  );
};
