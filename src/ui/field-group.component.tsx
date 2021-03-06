import * as React from 'react';
import { ControlLabel, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';

interface FieldGroupProps {
  id: string;
  type: string;
  label: string;
  help?: string;
  placeholder?: string;
}

export function FieldGroup({ id, label, help, ...props }: FieldGroupProps): JSX.Element {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
