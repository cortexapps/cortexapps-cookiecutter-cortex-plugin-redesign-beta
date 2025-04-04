import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@cortexapps/react-plugin-ui";
import type React from "react";

export const ColorSwatches: React.FC = () => (
  <Card>
    <CardHeader>
      <CardTitle>Theme variable swatches</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-1">
      <div className="swatch-container">
        <div>--cortex-plugin-background:</div>
        <div className="swatch swatch--cortex-plugin-background" />
      </div>
      <div className="swatch-container">
        <div>--cortex-plugin-foreground:</div>
        <div className="swatch swatch--cortex-plugin-foreground" />
      </div>
      <div className="swatch-container">
        <div>--cortex-plugin-primary:</div>
        <div className="swatch swatch--cortex-plugin-primary" />
      </div>
      <div className="swatch-container">
        <div>--cortex-plugin-secondary:</div>
        <div className="swatch swatch--cortex-plugin-secondary" />
      </div>
      <div className="swatch-container">
        <div>--cortex-plugin-muted:</div>
        <div className="swatch swatch--cortex-plugin-muted" />
      </div>
      <div className="swatch-container">
        <div>--cortex-plugin-accent:</div>
        <div className="swatch swatch--cortex-plugin-accent" />
      </div>
      <div className="swatch-container">
        <div>--cortex-plugin-accent:</div>
        <div className="swatch swatch--cortex-plugin-accent" />
      </div>
      <div className="swatch-container">
        <div>--cortex-plugin-destructive:</div>
        <div className="swatch swatch--cortex-plugin-destructive" />
      </div>
      <div className="swatch-container">
        <div>--cortex-plugin-destructive-foreground:</div>
        <div className="swatch swatch--cortex-plugin-destructive-foreground" />
      </div>
      <div className="swatch-container">
        <div>--cortex-plugin-border:</div>
        <div className="swatch swatch--cortex-plugin-border" />
      </div>
      <div className="swatch-container">
        <div>--cortex-plugin-input:</div>
        <div className="swatch swatch--cortex-plugin-input" />
      </div>
      <div className="swatch-container">
        <div>--cortex-plugin-ring:</div>
        <div className="swatch swatch--cortex-plugin-ring" />
      </div>
    </CardContent>
  </Card>
);

export default ColorSwatches;
