import React from "react";
import '@blueprintjs/core/lib/css/blueprint.css';

import { Button, FormGroup, InputGroup, Intent } from "@blueprintjs/core";

interface Props {}
interface State { name: string }

export default class ProfileForm extends React.Component<Props, State> {
  intent: Intent = Intent.PRIMARY;

  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { name: '' };
  }

  handleClick() {
    console.log(this.state.name)
  }
  
  handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({name: e.target.value})
  }

  render() {
    return (
      <div>
        <FormGroup>
          <InputGroup id="text-input" placeholder="なまえ" onChange={this.handleChange}/>
          <Button onClick={this.handleClick}>つくる</Button>
        </FormGroup>
      </div>
    );
  }
}