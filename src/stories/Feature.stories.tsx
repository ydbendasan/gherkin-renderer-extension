import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {StepKeywordType } from "@cucumber/messages";
import { Feature } from '../Samples/GherkinRenderer/components/Feature';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Feature',
  component: Feature,
} as ComponentMeta<typeof Feature>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Feature> = (args) => <Feature {...args} />;

export const SingleScenario = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SingleScenario.args = {
  
  parsedFeature: {
    "feature": {
        "tags": [],
        "location": {
            "line": 1,
            "column": 1
        },
        "language": "en",
        "keyword": "Feature",
        "name": "Single Scenario Feature",
        "description": "",
        "children": [
            {
                "scenario": {
                    "id": "fa3fdc92-2cdb-4b77-9874-4cb55e2f7412",
                    "tags": [],
                    "location": {
                        "line": 3,
                        "column": 1
                    },
                    "keyword": "Scenario",
                    "name": "I should see a card",
                    "description": "This scenario describes a single card view",
                    "steps": [
                        {
                            "id": "8c1252ad-ccbc-45db-9660-e4312e9b2aa4",
                            "location": {
                                "line": 6,
                                "column": 1
                            },
                            "keyword": "Given ",
                            "keywordType": StepKeywordType.CONTEXT,
                            "text": "I have a single scenario"
                        },
                        {
                            "id": "0f3a14db-e911-40db-9ef9-eec6c4a14452",
                            "location": {
                                "line": 7,
                                "column": 1
                            },
                            "keyword": "When ",
                            "keywordType": StepKeywordType.ACTION,
                            "text": "I view the Preview"
                        },
                        {
                            "id": "b7fccca1-b4e7-4ca1-8017-007e4b447c2c",
                            "location": {
                                "line": 8,
                                "column": 1
                            },
                            "keyword": "Then ",
                            "keywordType": StepKeywordType.OUTCOME,
                            "text": "I should see a single card"
                        }
                    ],
                    "examples": []
                }
            }
        ]
    },
    "comments": []
}
};

export const MultiScenario = Template.bind({});
MultiScenario.args = {
  parsedFeature:{
    "feature": {
        "tags": [],
        "location": {
            "line": 1,
            "column": 1
        },
        "language": "en",
        "keyword": "Feature",
        "name": "Multi Scenario",
        "description": "",
        "children": [
            {
                "scenario": {
                    "id": "4f504243-098f-4c29-99a3-5a8776ca61d1",
                    "tags": [],
                    "location": {
                        "line": 3,
                        "column": 1
                    },
                    "keyword": "Scenario",
                    "name": "First Scenario",
                    "description": "    This is the first scenario description",
                    "steps": [
                        {
                            "id": "b4fc9785-a42f-4bc1-b1c6-2cc4ded0bf48",
                            "location": {
                                "line": 6,
                                "column": 5
                            },
                            "keyword": "Given ",
                            "keywordType": StepKeywordType.CONTEXT,
                            "text": "I have a scenario"
                        },
                        {
                            "id": "2816ec86-0100-4cd3-ac99-24679ca9a372",
                            "location": {
                                "line": 7,
                                "column": 5
                            },
                            "keyword": "When ",
                            "keywordType": StepKeywordType.ACTION,
                            "text": "I view the Preview"
                        },
                        {
                            "id": "a2668623-78cb-497b-a3aa-93fe39da1ad5",
                            "location": {
                                "line": 8,
                                "column": 5
                            },
                            "keyword": "Then ",
                            "keywordType": StepKeywordType.OUTCOME,
                            "text": "I should see a card"
                        }
                    ],
                    "examples": []
                }
            },
            {
                "scenario": {
                    "id": "62831c8e-9946-4f93-97ab-e3912591c77d",
                    "tags": [],
                    "location": {
                        "line": 10,
                        "column": 1
                    },
                    "keyword": "Scenario",
                    "name": "Second Scenario",
                    "description": "    This is the second scenario description",
                    "steps": [
                        {
                            "id": "5323c88c-31e5-4946-99b2-367b53e93414",
                            "location": {
                                "line": 13,
                                "column": 5
                            },
                            "keyword": "Given ",
                            "keywordType": StepKeywordType.CONTEXT,
                            "text": "I have a second Scenario"
                        },
                        {
                            "id": "6e84032d-7627-426b-8c99-9d7e72de3c8d",
                            "location": {
                                "line": 14,
                                "column": 5
                            },
                            "keyword": "When ",
                            "keywordType": StepKeywordType.ACTION,
                            "text": "I view the Preview"
                        },
                        {
                            "id": "5a725db4-a1de-4de2-8de0-b47eaabbe6eb",
                            "location": {
                                "line": 15,
                                "column": 5
                            },
                            "keyword": "Then ",
                            "keywordType": StepKeywordType.OUTCOME,
                            "text": "I should see a second Scenario card"
                        }
                    ],
                    "examples": []
                }
            },
            {
                "scenario": {
                    "id": "d92dee04-1b02-480c-af96-44aab266579b",
                    "tags": [],
                    "location": {
                        "line": 17,
                        "column": 1
                    },
                    "keyword": "Scenario",
                    "name": "Third Scenario without description",
                    "description": "",
                    "steps": [
                        {
                            "id": "c2fc530d-70a4-42d9-9d07-58045d9de1e5",
                            "location": {
                                "line": 19,
                                "column": 5
                            },
                            "keyword": "Given ",
                            "keywordType": StepKeywordType.CONTEXT,
                            "text": "I have a third Scenario"
                        },
                        {
                            "id": "c0343d73-d067-437f-82eb-b37fc339c3ca",
                            "location": {
                                "line": 20,
                                "column": 5
                            },
                            "keyword": "And ",
                            "keywordType": StepKeywordType.CONJUNCTION,
                            "text": "there is no description"
                        },
                        {
                            "id": "3a9befc9-494e-450f-8f6e-f07b10cade20",
                            "location": {
                                "line": 21,
                                "column": 5
                            },
                            "keyword": "When ",
                            "keywordType": StepKeywordType.ACTION,
                            "text": "I view the Preview"
                        },
                        {
                            "id": "f086e86e-c63c-43ca-a8bd-fe70501131d6",
                            "location": {
                                "line": 22,
                                "column": 5
                            },
                            "keyword": "Then ",
                            "keywordType": StepKeywordType.OUTCOME,
                            "text": "I should see a third Scenario card"
                        },
                        {
                            "id": "3fb48315-98aa-4800-b2eb-041d5c5139cd",
                            "location": {
                                "line": 23,
                                "column": 5
                            },
                            "keyword": "And ",
                            "keywordType": StepKeywordType.CONJUNCTION,
                            "text": "I shouldn't see a description"
                        }
                    ],
                    "examples": []
                }
            }
        ]
    },
    "comments": []
}
};

export const ScenarioOutline = Template.bind({});
ScenarioOutline.args = {
  parsedFeature:{
    "feature": {
        "tags": [],
        "location": {
            "line": 1,
            "column": 1
        },
        "language": "en",
        "keyword": "Feature",
        "name": "Read Scenario Outline Feature",
        "description": "",
        "children": [
            {
                "background": {
                    "id": "ca8ec258-9b0e-4a23-bd88-8ccfec631c4e",
                    "location": {
                        "line": 3,
                        "column": 3
                    },
                    "keyword": "Background",
                    "name": "I have a library with books",
                    "description": "",
                    "steps": [
                        {
                            "id": "4db20ee0-7566-41d0-9492-7bfb70c9c917",
                            "location": {
                                "line": 4,
                                "column": 5
                            },
                            "keyword": "Given ",
                            "keywordType": StepKeywordType.CONTEXT,
                            "text": "I have a library"
                        },
                        {
                            "id": "27868806-dddd-497e-8512-2ceca4814c0a",
                            "location": {
                                "line": 5,
                                "column": 5
                            },
                            "keyword": "And ",
                            "keywordType": StepKeywordType.CONJUNCTION,
                            "text": "I have books in the library"
                        }
                    ]
                }
            },
            {
                "scenario": {
                    "id": "e9e4719c-c48f-43e4-b89e-e2afe581c214",
                    "tags": [],
                    "location": {
                        "line": 7,
                        "column": 3
                    },
                    "keyword": "Scenario Outline",
                    "name": "Read Scenario Outline Scenario",
                    "description": "    This is the scenario description",
                    "steps": [
                        {
                            "id": "1ceefa61-84bd-496b-a29d-907616a93a2b",
                            "location": {
                                "line": 10,
                                "column": 5
                            },
                            "keyword": "Given ",
                            "keywordType": StepKeywordType.CONTEXT,
                            "text": "the title is <title>"
                        },
                        {
                            "id": "1232ec8d-925f-4d48-a1c2-dde2470f0ff9",
                            "location": {
                                "line": 11,
                                "column": 5
                            },
                            "keyword": "And ",
                            "keywordType": StepKeywordType.CONJUNCTION,
                            "text": "the description is <description>"
                        },
                        {
                            "id": "2d2be4ff-7012-4069-bae0-cb6b7f6247a6",
                            "location": {
                                "line": 12,
                                "column": 5
                            },
                            "keyword": "When ",
                            "keywordType": StepKeywordType.ACTION,
                            "text": "the author is <author>"
                        },
                        {
                            "id": "3dcceb3b-3d22-46b6-8be0-6d25f837d4cb",
                            "location": {
                                "line": 13,
                                "column": 5
                            },
                            "keyword": "Then ",
                            "keywordType": StepKeywordType.OUTCOME,
                            "text": "the price is <price>"
                        },
                        {
                            "id": "33b53cb7-555d-4bc8-b816-f643f9a3e015",
                            "location": {
                                "line": 14,
                                "column": 5
                            },
                            "keyword": "And ",
                            "keywordType": StepKeywordType.CONJUNCTION,
                            "text": "the book is <title> <author> <title> <price>"
                        }
                    ],
                    "examples": [
                        {
                            "id": "47fdcc51-a562-4101-b7dd-07ff16bffb93",
                            "tags": [],
                            "location": {
                                "line": 16,
                                "column": 5
                            },
                            "keyword": "Examples",
                            "name": "Books",
                            "description": "    This is the description for Books Examples.",
                            "tableHeader": {
                                "id": "c6cf11e6-4f3f-4d76-8139-884892b45545",
                                "location": {
                                    "line": 18,
                                    "column": 7
                                },
                                "cells": [
                                    {
                                        "location": {
                                            "line": 18,
                                            "column": 9
                                        },
                                        "value": "title"
                                    },
                                    {
                                        "location": {
                                            "line": 18,
                                            "column": 30
                                        },
                                        "value": "description"
                                    },
                                    {
                                        "location": {
                                            "line": 18,
                                            "column": 66
                                        },
                                        "value": "author"
                                    },
                                    {
                                        "location": {
                                            "line": 18,
                                            "column": 84
                                        },
                                        "value": "price"
                                    }
                                ]
                            },
                            "tableBody": [
                                {
                                    "id": "2a1f9287-a66b-4631-83e3-ace003d19c82",
                                    "location": {
                                        "line": 19,
                                        "column": 7
                                    },
                                    "cells": [
                                        {
                                            "location": {
                                                "line": 19,
                                                "column": 9
                                            },
                                            "value": "Monstrous Regiment"
                                        },
                                        {
                                            "location": {
                                                "line": 19,
                                                "column": 30
                                            },
                                            "value": "First Book I read from Discworld"
                                        },
                                        {
                                            "location": {
                                                "line": 19,
                                                "column": 66
                                            },
                                            "value": "Terry Prathcett"
                                        },
                                        {
                                            "location": {
                                                "line": 19,
                                                "column": 84
                                            },
                                            "value": "priceless"
                                        }
                                    ]
                                },
                                {
                                    "id": "e21f0a25-b289-4be1-868e-d5fa2f9afb4b",
                                    "location": {
                                        "line": 20,
                                        "column": 7
                                    },
                                    "cells": [
                                        {
                                            "location": {
                                                "line": 20,
                                                "column": 9
                                            },
                                            "value": "The Watch"
                                        },
                                        {
                                            "location": {
                                                "line": 20,
                                                "column": 30
                                            },
                                            "value": "Second Book I read from Discworld"
                                        },
                                        {
                                            "location": {
                                                "line": 20,
                                                "column": 66
                                            },
                                            "value": "Terry Prathcett"
                                        },
                                        {
                                            "location": {
                                                "line": 20,
                                                "column": 84
                                            },
                                            "value": "priceless"
                                        }
                                    ]
                                },
                                {
                                    "id": "2ce1e7f5-b42a-4a7b-bfef-fd8ec391a5b2",
                                    "location": {
                                        "line": 21,
                                        "column": 7
                                    },
                                    "cells": [
                                        {
                                            "location": {
                                                "line": 21,
                                                "column": 9
                                            },
                                            "value": "Lord of the Rings"
                                        },
                                        {
                                            "location": {
                                                "line": 21,
                                                "column": 30
                                            },
                                            "value": "Second book I read from Tolkien"
                                        },
                                        {
                                            "location": {
                                                "line": 21,
                                                "column": 66
                                            },
                                            "value": "J.R.R. Tolkien"
                                        },
                                        {
                                            "location": {
                                                "line": 21,
                                                "column": 84
                                            },
                                            "value": "priceless"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "c3d4c18c-5787-4db1-ac2f-a39842853e2b",
                            "tags": [],
                            "location": {
                                "line": 23,
                                "column": 5
                            },
                            "keyword": "Examples",
                            "name": "Summaries",
                            "description": "",
                            "tableHeader": {
                                "id": "1354ed0c-d350-4779-b6f1-180871d972bc",
                                "location": {
                                    "line": 24,
                                    "column": 7
                                },
                                "cells": [
                                    {
                                        "location": {
                                            "line": 24,
                                            "column": 9
                                        },
                                        "value": "heading"
                                    },
                                    {
                                        "location": {
                                            "line": 24,
                                            "column": 19
                                        },
                                        "value": "synopsis"
                                    },
                                    {
                                        "location": {
                                            "line": 24,
                                            "column": 30
                                        },
                                        "value": "author"
                                    },
                                    {
                                        "location": {
                                            "line": 24,
                                            "column": 39
                                        },
                                        "value": "title"
                                    }
                                ]
                            },
                            "tableBody": [
                                {
                                    "id": "1a105996-45fc-4037-b09f-259df66d8b0c",
                                    "location": {
                                        "line": 25,
                                        "column": 7
                                    },
                                    "cells": [
                                        {
                                            "location": {
                                                "line": 25,
                                                "column": 9
                                            },
                                            "value": "h1"
                                        },
                                        {
                                            "location": {
                                                "line": 25,
                                                "column": 19
                                            },
                                            "value": "s1"
                                        },
                                        {
                                            "location": {
                                                "line": 25,
                                                "column": 30
                                            },
                                            "value": "Terry"
                                        },
                                        {
                                            "location": {
                                                "line": 25,
                                                "column": 39
                                            },
                                            "value": "Jingo"
                                        }
                                    ]
                                },
                                {
                                    "id": "cd62bbc7-87e5-434c-b7a3-f99fa00725a4",
                                    "location": {
                                        "line": 26,
                                        "column": 7
                                    },
                                    "cells": [
                                        {
                                            "location": {
                                                "line": 26,
                                                "column": 9
                                            },
                                            "value": "h2"
                                        },
                                        {
                                            "location": {
                                                "line": 26,
                                                "column": 19
                                            },
                                            "value": "s2"
                                        },
                                        {
                                            "location": {
                                                "line": 26,
                                                "column": 30
                                            },
                                            "value": "Dan"
                                        },
                                        {
                                            "location": {
                                                "line": 26,
                                                "column": 39
                                            },
                                            "value": "Donut"
                                        }
                                    ]
                                },
                                {
                                    "id": "3a152a02-6de8-4739-a396-4cf3321efe0a",
                                    "location": {
                                        "line": 27,
                                        "column": 7
                                    },
                                    "cells": [
                                        {
                                            "location": {
                                                "line": 27,
                                                "column": 9
                                            },
                                            "value": "h3"
                                        },
                                        {
                                            "location": {
                                                "line": 27,
                                                "column": 19
                                            },
                                            "value": "s3"
                                        },
                                        {
                                            "location": {
                                                "line": 27,
                                                "column": 30
                                            },
                                            "value": "Jerry"
                                        },
                                        {
                                            "location": {
                                                "line": 27,
                                                "column": 39
                                            },
                                            "value": "Ring"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        ]
    },
    "comments": []
}
};