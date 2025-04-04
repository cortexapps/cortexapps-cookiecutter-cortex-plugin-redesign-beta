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
        <div>
          --cortex-plugin-background (Primary background (black/white)):
        </div>
        <div className="swatch swatch--cortex-plugin-background" />
      </div>
      <div className="swatch-container">
        <div>
          --cortex-plugin-foreground (Primary foreground (white/black)):
        </div>
        <div className="swatch swatch--cortex-plugin-foreground" />
      </div>
      <div className="swatch-container">
        <div>
          --cortex-plugin-primary (Text color (contrasts with background)):
        </div>
        <div className="swatch swatch--cortex-plugin-primary" />
      </div>
      <div className="swatch-container">
        <div>
          --cortex-plugin-secondary (Text color (contrasts with background)):
        </div>
        <div className="swatch swatch--cortex-plugin-secondary" />
      </div>
      <div className="swatch-container">
        <div>
          --cortex-plugin-muted (Text color (contrasts with background)):
        </div>
        <div className="swatch swatch--cortex-plugin-muted" />
      </div>
      <div className="swatch-container">
        <div>--cortex-plugin-accent (Brand color (configurable)):</div>
        <div className="swatch swatch--cortex-plugin-accent" />
      </div>
      <div className="swatch-container">
        <div>--cortex-plugin-destructive (Error display background):</div>
        <div className="swatch swatch--cortex-plugin-destructive" />
      </div>
      <div className="swatch-container">
        <div>--cortex-plugin-destructive-foreground (Error display text):</div>
        <div className="swatch swatch--cortex-plugin-destructive-foreground" />
      </div>
      <div className="swatch-container">
        <div>--cortex-plugin-border (Border color):</div>
        <div className="swatch swatch--cortex-plugin-border" />
      </div>
      <div className="swatch-container">
        <div>--cortex-plugin-input (Input background):</div>
        <div className="swatch swatch--cortex-plugin-input" />
      </div>
      <div className="swatch-container">
        <div>--cortex-plugin-ring (Focus ring color):</div>
        <div className="swatch swatch--cortex-plugin-ring" />
      </div>
    </CardContent>
  </Card>
);

export default ColorSwatches;
