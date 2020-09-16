import React, { Component } from "react";
import '@blueprintjs/core/lib/css/blueprint.css';

import { Button, FormGroup, InputGroup, Intent } from "@blueprintjs/core";

export default class ProfileForm extends Component {
  intent: Intent = Intent.PRIMARY;
  render() {
    return (
      <FormGroup>
        <InputGroup id="text-input" placeholder="なまえ" />
        <Button>つくる</Button>
      </FormGroup>
    );
  }
}