import React, { Component } from "react";
import '@blueprintjs/core/lib/css/blueprint.css';

import { Button, FormGroup, InputGroup, Intent } from "@blueprintjs/core";

interface Props {}

export default class ProfileForm extends Component {
  intent: Intent = Intent.PRIMARY;

  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // TODO
  }

  render() {
    return (
      <FormGroup>
        <InputGroup id="text-input" placeholder="なまえ" />
        <Button onClick={this.handleClick}>つくる</Button>
      </FormGroup>
    );
  }
}