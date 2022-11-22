import { createSprinkles } from "@vanilla-extract/sprinkles";
import { fontProperties } from "./font-properties.css";
import { boxProperties } from "./box-properties.css";

export const sprinkles = createSprinkles(boxProperties, fontProperties);
