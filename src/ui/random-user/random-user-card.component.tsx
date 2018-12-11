import * as React from 'react';
import { Grid, Panel, Row } from 'react-bootstrap';

interface RandomUserCardProps {
  picture: string;
  name: string;
  email: string;
}

export class RandomUserCard extends React.Component<RandomUserCardProps> {
  public render(): JSX.Element {
    const { picture, name, email } = this.props;

    return (
      <Panel>
        <Panel.Body>
          <Grid>
            <Row>
              <img src={picture} />
            </Row>
            <Row>
              <strong>Name: </strong> {name}
            </Row>
            <Row>
              <strong>Email: </strong> {email}
            </Row>
          </Grid>
        </Panel.Body>
      </Panel>
    );
  }
}
