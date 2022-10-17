import { Card } from "azure-devops-ui/Card";
import React from "react";
import ReactMarkdown from "react-markdown";

export interface NullableString {
  value: string | undefined
};

export const Description: React.FC<NullableString> = (value): JSX.Element => {
  if (!value?.value) {
    return <></>;
  }

  return (
    <div className="bolt-default-horizontal-spacing">
      <ReactMarkdown children={value.value} />
    </div>
  );
};
