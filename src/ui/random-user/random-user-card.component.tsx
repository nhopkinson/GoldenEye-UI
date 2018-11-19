import * as React from 'react';
import { Grid, Panel, Row } from 'react-bootstrap';

interface RandomUserCardProps {
  image?: string;
  name: string;
  email: string;
}

export const RandomUserCard = (props: RandomUserCardProps): JSX.Element => {
  return (
    <Panel>
      <Panel.Body>
        <Grid>
          <Row>
            <strong>Name: </strong> {props.name}
          </Row>
          <Row>
            <strong>Email: </strong> {props.email}
          </Row>
        </Grid>
      </Panel.Body>
    </Panel>
  );
};
