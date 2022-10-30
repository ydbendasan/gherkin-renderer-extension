import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GherkinRendererHarness from '../Samples/GherkinRenderer/GherkinRendererHarness';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/GherkinRendererHarness',
  component: GherkinRendererHarness,
} as ComponentMeta<typeof GherkinRendererHarness>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GherkinRendererHarness> = (args) => <GherkinRendererHarness {...args} />;

export const SimpleScenario = Template.bind({});
SimpleScenario.args = {
  gherkin: `
  Feature: Single Scenario Feature

  Scenario: I should see a card
  This scenario describes a single card view
  
  Given I have a single scenario
  When I view the Preview
  Then I should see a single card    
  `
};


export const MultiScenario = Template.bind({});
MultiScenario.args = {
  gherkin: `
  Feature: Multi Scenario

  Scenario: First Scenario
      This is the first scenario description
  
      Given I have a scenario
      When I view the Preview
      Then I should see a card
  
  Scenario: Second Scenario
      This is the second scenario description
  
      Given I have a second Scenario
      When I view the Preview
      Then I should see a second Scenario card
  
  Scenario: Third Scenario without description    
  
      Given I have a third Scenario
      And there is no description
      When I view the Preview
      Then I should see a third Scenario card    
      And I shouldn't see a description

  `
};

export const MultiScenarioWithBackground = Template.bind({});
MultiScenarioWithBackground.args = {
  gherkin: `
  Feature: Multi Scenario
  
  Background: I have a library with books
    Given I have a library
    And I have books in the library
  
  Scenario: First Scenario
      This is the first scenario description
  
      Given I have a scenario
      When I view the Preview
      Then I should see a card
  
  Scenario: Second Scenario
      This is the second scenario description
  
      Given I have a second Scenario
      When I view the Preview
      Then I should see a second Scenario card
  
  Scenario: Third Scenario without description    
  
      Given I have a third Scenario
      And there is no description
      When I view the Preview
      Then I should see a third Scenario card    
      And I shouldn't see a description

  `
};

export const ScenarioOutline = Template.bind({});
ScenarioOutline.args = {
  gherkin: `
  Feature: Read Scenario Outline Feature

  Background: I have a library with books
    Given I have a library
    And I have books in the library

  Scenario Outline: Read Scenario Outline Scenario
    This is the scenario description
    
    Given the title is <title>
    And the description is <description>
    When the author is <author>
    Then the price is <price>
    And the book is <title> <author> <title> <price>

    Examples: Books
    This is the description for Books Examples.
      | title              | description                       | author          | price     |
      | Monstrous Regiment | First Book I read from Discworld  | Terry Prathcett | priceless |
      | The Watch          | Second Book I read from Discworld | Terry Prathcett | priceless |
      | Lord of the Rings  | Second book I read from Tolkien   | J.R.R. Tolkien  | priceless |

    Examples: Summaries
      | heading | synopsis | author | title |
      | h1      | s1       | Terry  | Jingo |
      | h2      | s2       | Dan    | Donut |
      | h3      | s3       | Jerry  | Ring  |

  `
};