//import "./GherkinRenderer.scss";

import * as React from "react";
import { Page } from "azure-devops-ui/Page";

import { readGherkin } from "./readers/gherkinReader";
import { Feature } from "./components/Feature";

export default class GherkinRendererContent extends React.Component<{ gherkin: string }, {}> {

    public render(): JSX.Element {
        const parsed = readGherkin(this.props.gherkin);        

        return (
            <Page className="sample-hub flex-grow">
                <div className="page-content">
                    <Feature parsedFeature={parsed} />
                </div>
            </Page>
        );
    }
}

