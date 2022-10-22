import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {StepKeywordType } from "@cucumber/messages";
import { Scenario } from '../Samples/GherkinRenderer/components/Scenario';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Scenario',
  component: Scenario,
} as ComponentMeta<typeof Scenario>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Scenario> = (args) => <Scenario {...args} />;

export const SimpleScenario = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimpleScenario.args = {
  
  background: {
    "id": "c363f474-3b2c-4102-8a22-abcca430b1cd",
    "location": {
        "line": 3,
        "column": 1
    },
    "keyword": "Background",
    "name": "There is a background",
    "description": "",
    "steps": [
        {
            "id": "4f75f595-f204-4bc7-9c26-7468d49fa69c",
            "location": {
                "line": 4,
                "column": 5
            },
            "keyword": "Given ",
            "keywordType": StepKeywordType.CONTEXT,
            "text": "I have a background"
        }
    ]
}
};

export const MultiScenario = Template.bind({});
MultiScenario.args = {
  
};