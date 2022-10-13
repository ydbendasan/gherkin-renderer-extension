import * as React from "react";
import * as SDK from "azure-devops-extension-sdk";

import { Header } from "azure-devops-ui/Header";
import { Page } from "azure-devops-ui/Page";

import { showRootComponent } from "../../Common";

class GherkinRendererContent extends React.Component<{rawContent:string}, {}> {    
    public componentDidMount() {               
        SDK.notifyLoadSucceeded();
    }

    public render(): JSX.Element {        
        return (
            <Page className="sample-hub flex-grow">
                <Header title="Gherkin Renderer" />
                <div className="page-content">
                    <p>{this.props.rawContent}</p>
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
                console.log("Gherkin Renderer initialising", rawContent);                
                showRootComponent(<GherkinRendererContent rawContent={rawContent}/>);
                //const gherkin = await readGherkin(rawContent);
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

