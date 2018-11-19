import * as React from 'react';
import { Button } from 'react-bootstrap';
import { FieldGroup } from '../field-group.component';

export class RegistrationForm extends React.Component {
  public render(): JSX.Element {
    return (
      <form>
        <FieldGroup id="formControlsText" type="text" label="Name" placeholder="Enter text" />
        <FieldGroup id="formControlsEmail" type="email" label="Email address" placeholder="Enter email" />
        <FieldGroup id="formControlsPassword" label="Password" type="password" />

        <Button type="submit">Submit</Button>
      </form>
    );
  }
}
