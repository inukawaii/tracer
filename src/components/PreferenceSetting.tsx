import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont } from '@fortawesome/free-solid-svg-icons';
import '@blueprintjs/core/lib/css/blueprint.css';

import { Button } from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";

import * as font from "./FontFamily";

const FontFamilySelect = Select.ofType<font.IFontFamily>();

const fontFamilySelectProps = {
  items: font.fontFamilies,
};

interface Props { }
interface State {
  items: font.IFontFamily[]
}

const renderFontIcon: JSX.Element = <FontAwesomeIcon icon={faFont} />

export default class PreferenceSetting extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.changeFontFamily = this.changeFontFamily.bind(this);
    this.state = {
      items: fontFamilySelectProps.items,
    };
  }

  handleValueChange = (fontFamily: font.IFontFamily) => {
    this.changeFontFamily(fontFamily);
  }

  changeFontFamily(fontFamily: font.IFontFamily) {
    // NOTE: フォントの読み込みをフォントの変更時に行うべき？
    document.getElementById("card")!.style.fontFamily = fontFamily.value;
  }

  render() {
    const { ...flags } = this.state;

    return (
      <FontFamilySelect
        {...fontFamilySelectProps}
        {...flags}
        items={this.state.items}
        filterable={false}
        itemRenderer={font.renderFontMenu}
        onItemSelect={this.handleValueChange}
      >
        <Button
          icon={renderFontIcon}
          rightIcon="caret-down"
          text="フォントを選ぶ"
        />
      </FontFamilySelect>
    );
  }
}