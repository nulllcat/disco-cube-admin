import * as React from "react";
import { VerticalSpacer } from "gls/lib";
import { PageHeader, Button } from "antd";
import { Segment } from "../../../../components/segment/Segment";

interface Props {
  onBack: () => any;
  onStart: (options: {}) => any;
  onStop: () => any;
  isRunning: boolean;
  isCommand: boolean;
}

export const DebugApp: React.FC<Props> = ({ onBack, isRunning, isCommand, onStart, onStop }) => {
  return (
    <Segment spacing={10} width="100%" maxWidth={500} height={"100%"}>
      <PageHeader ghost={false} onBack={onBack} title="Apps" subTitle="Debug"></PageHeader>
      <VerticalSpacer space={10} />
      {!isRunning && (
        <Button type="primary" disabled={isCommand} onClick={() => onStart({})}>
          Start
        </Button>
      )}
      {isRunning && (
        <Button type="danger" onClick={onStop}>
          Stop
        </Button>
      )}
    </Segment>
  );
};
