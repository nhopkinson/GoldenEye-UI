import * as React from 'react';
import { Button } from 'react-bootstrap';
import { FieldGroup } from './field-group.component';

export class FileUpload extends React.Component {
  public render(): JSX.Element {
    return (
      <form>
        <FieldGroup id="formControlsFile" type="file" label="File" help="Example block-level help text here." />

        <Button type="submit">Submit</Button>
      </form>
    );
  }
}
