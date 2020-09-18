import React from "react";
import html2canvas from 'html2canvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont } from '@fortawesome/free-solid-svg-icons';
import '@blueprintjs/core/lib/css/blueprint.css';

import { Colors, Intent } from "@blueprintjs/core";
import { Button, FormGroup, InputGroup, Card } from "@blueprintjs/core";

import PreferenceSetting from "./PreferenceSetting";

interface Props {}
interface State { 
  name: string,
  fontFamily: string
}

export default class ProfileForm extends React.Component<Props, State> {
  intent: Intent = Intent.PRIMARY;

  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.downloadImage = this.downloadImage.bind(this);
    this.state = { name: '', fontFamily: '' };
  }

  handleClick() {
    const element = document.getElementById('card')
    html2canvas(element!).then((canvas: HTMLCanvasElement)　=> {
      document.body.appendChild(canvas);
      this.downloadImage(canvas);
    });
  }
  
  handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({name: e.target.value})
  }

  downloadImage (canvas: HTMLCanvasElement) {
    canvas!.toBlob((image) => {
      const url = URL.createObjectURL(image);
      const anchor = document.createElement("a");
      document.getElementById('profile-image')!.appendChild(anchor);
      anchor.download = 'プロフィール画像.png';
      anchor.href = url;
      anchor.click();
      anchor.remove();
      setTimeout(() => {
          URL.revokeObjectURL(url);
      }, 1E4);
    }, 'image/png');
  }

  render() {
    return (
      <div>
        <PreferenceSetting />
        <Card id="card" style={{ color: Colors.ROSE5, background: Colors.ROSE1 }}>
          <h1>わたしのなまえは<u>{this.state.name}</u>です。</h1>
        </Card>
        <FormGroup>
          <InputGroup id="text-input" placeholder="なまえ" onChange={this.handleChange}/>
          <Button onClick={this.handleClick}>つくる</Button>
        </FormGroup>
        <div id="profile-image"></div>
      </div>
    );
  }
}