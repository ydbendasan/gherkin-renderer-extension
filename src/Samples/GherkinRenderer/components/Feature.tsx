import { GherkinDocument, Background } from "@cucumber/messages";
import React from "react";
import { Description } from "./Description";
import { Rule } from "./Rule";

export interface IFeatureProps {
    parsedFeature: GherkinDocument | undefined;
};

export const Feature: React.FC<IFeatureProps> = (props: IFeatureProps): JSX.Element => {
    const background = props
        .parsedFeature?.feature?.children?.find(c => !!c.background)?.background;
    console.log(background);
    return (
        <>
            <h1 className="feature-header">{props.parsedFeature?.feature?.name}</h1>
            <Description value={props.parsedFeature?.feature?.description} />
            {props.parsedFeature?.feature?.children.map((fc, i) => {
                return <Rule fc={fc} background={background} key={`rule-${i}`} />;
            })}

        </>
    );
}