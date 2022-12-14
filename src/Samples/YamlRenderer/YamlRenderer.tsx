import "./YamlRenderer.scss";
import * as React from "react";
import * as SDK from "azure-devops-extension-sdk";
import { Card } from "azure-devops-ui/Card";
import { showRootComponent } from "../../Common";


class YamlRendererContent extends React.Component<{}, {}> {    
    public componentDidMount() {               
        SDK.init();
        SDK.notifyLoadSucceeded();
    }

    public render(): JSX.Element {        
        return (
            <Card className="flex-grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </Card>
        );
    }
}

showRootComponent(<YamlRendererContent/>);