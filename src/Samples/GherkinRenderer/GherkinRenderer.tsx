import "./GherkinRenderer.scss";

import * as React from "react";
import * as SDK from "azure-devops-extension-sdk";
import { GherkinDocument } from "@cucumber/messages";
import { Header } from "azure-devops-ui/Header";
import { Page } from "azure-devops-ui/Page";

import { showRootComponent } from "../../Common";
import { readGherkin } from "./readers/gherkinReader";
import { Feature } from "./components/Feature";

class GherkinRendererContent extends React.Component<{rawContent:GherkinDocument}, {}> {    
    public componentDidMount() {               
        SDK.notifyLoadSucceeded();
    }

    public render(): JSX.Element {        
        return (
            <Page className="sample-hub flex-grow">                
                <div className="page-content">
                    <Feature parsedFeature={this.props.rawContent}/>
                </div>
            </Page>
        );
    }
}

const gherkinRenderer = (function () {
    "use strict"
    return {
        renderContent: async function (rawContent: any, options: any) {

            try {                
                const gherkin = readGherkin(rawContent);
                console.log(gherkin);
                showRootComponent(<GherkinRendererContent rawContent={gherkin}/>);
            }
            catch (err) {
                console.log(err);
            }
        }
    }
}());

SDK.init();
SDK.register("showRenderer", function(context:any){
    return gherkinRenderer;
});

