import React from "react";
import { ItemRenderer } from "@blueprintjs/select";
import { MenuItem } from "@blueprintjs/core";

export interface IFontFamily {
  displayName: string;
  value: string;
}

export const fontFamilies: IFontFamily[] = [
  { displayName: "M PLUS Rounded 1c", value: "'M PLUS Rounded 1c', sans-serif" }
]

export const renderFontMenu: ItemRenderer<IFontFamily> = (font, { handleClick, modifiers }) => {
  if (!modifiers.matchesPredicate) {
    return null;
  }
  return (
    <MenuItem
      active={modifiers.active}
      disabled={modifiers.disabled}
      key={font.displayName}
      onClick={handleClick}
      text={font.displayName}
    />
  );
};