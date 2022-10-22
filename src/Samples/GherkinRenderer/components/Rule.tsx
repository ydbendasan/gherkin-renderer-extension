import { FeatureChild, JavaStackTraceElement } from "@cucumber/messages";
import { Card } from "azure-devops-ui/Card";

import React from "react";
import { Description } from "./Description";
import { Scenario } from "./Scenario";

export const Rule: React.FC<FeatureChild> = (fc): JSX.Element => {
  return (
    <>
      {!fc.rule ? (
        <></>
      ) : (
        <div className="rule container">
          <h2 className="rule-header">{`Rule : ${fc.rule.name}`}</h2>
          <Description value={fc.rule.description} />
          <div className="ruleChildren">
            {fc.rule.children.map((scenario)=>{
                return <Scenario scenario={scenario.scenario} background={fc.background} key={scenario.scenario?.id} />
            })}
          </div>
        </div>
      )}
      <Scenario scenario={fc.scenario} background={fc.background} key={fc.scenario?.id}/>
    </>
  );
};
