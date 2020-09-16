import React from "react";
import html2canvas from 'html2canvas';
import '@blueprintjs/core/lib/css/blueprint.css';

import { Colors, Intent } from "@blueprintjs/core";
import { Button, FormGroup, InputGroup, Card } from "@blueprintjs/core";

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
    const element = document.getElementById('card')
    html2canvas(element!).then(function(canvas) {
      document.body.appendChild(canvas);
    });
  }
  
  handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({name: e.target.value})
  }

  render() {
    return (
      <div>
        <Card id="card" style={{ color: Colors.ROSE5, background: Colors.ROSE1 }}>
          <h1>わたしのなまえは<u>{this.state.name}</u>です。</h1>
        </Card>
        <FormGroup>
          <InputGroup id="text-input" placeholder="なまえ" onChange={this.handleChange}/>
          <Button onClick={this.handleClick}>つくる</Button>
        </FormGroup>
      </div>
    );
  }
}