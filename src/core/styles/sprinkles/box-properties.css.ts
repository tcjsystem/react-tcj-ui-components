import { defineProperties } from "@vanilla-extract/sprinkles";

const space = {
  "0": "0rem",
  "0.125": "0.125rem",
  "0.25": "0.25rem",
  "0.375": "0.375rem",
  "0.5": "0.5rem",
  "0.625": "0.625rem",
  "0.75": "0.75rem",
  "0.875": "0.875rem",
  "1": "1rem",
  "1.25": "1.25rem",
  "1.5": "1.5rem",
  "1.75": "1.75rem",
  "2": "2rem",
  "2.25": "2.25rem",
  "2.5": "2.5rem",
  "2.75": "2.75rem",
  "3": "3rem",
};

export const boxProperties = defineProperties({
  properties: {
    display: ["none", "flex", "block", "inline", "inline-flex"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    gap: space,
    borderRadius: space,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["justifyContent", "alignItems"],
  },
});
