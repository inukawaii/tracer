import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont } from '@fortawesome/free-solid-svg-icons';
import '@blueprintjs/core/lib/css/blueprint.css';

import { Button, MenuItem } from "@blueprintjs/core";
import { Select, ItemRenderer } from "@blueprintjs/select";

const FilmSelect = Select.ofType<IFontFamily>();
interface IFontFamily {
  displayName: string;
  value: string;
}
const fontFamilys: IFontFamily[] = [
  { displayName: "M PLUS Rounded 1c", value: "'M PLUS Rounded 1c', sans-serif" }
]
const fontFamilySelectProps = {
  items: fontFamilys,
};

interface Props { }
interface State {
  items: IFontFamily[]
}

const renderFontMenu: ItemRenderer<IFontFamily> = (font, { handleClick, modifiers }) => {
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

const renderFontIcon: JSX.Element = <FontAwesomeIcon icon={faFont} />

export default class PreferenceSetting extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.changeFontFamily = this.changeFontFamily.bind(this);
    this.state = {
      items: fontFamilySelectProps.items,
    };
  }

  handleValueChange = (fontFamily: IFontFamily) => {
    this.changeFontFamily(fontFamily);
  }

  changeFontFamily(fontFamily: IFontFamily) {
    // NOTE: フォントの読み込みをフォントの変更時に行うべき？
    document.getElementById("card")!.style.fontFamily = fontFamily.value;
  }

  render() {
    const { ...flags } = this.state;

    return (
      <FilmSelect
        {...fontFamilySelectProps}
        {...flags}
        items={this.state.items}
        filterable={false}
        itemRenderer={renderFontMenu}
        onItemSelect={this.handleValueChange}
      >
        <Button
          icon={renderFontIcon}
          rightIcon="caret-down"
          text="フォントを選ぶ"
        />
      </FilmSelect>
    );
  }
}