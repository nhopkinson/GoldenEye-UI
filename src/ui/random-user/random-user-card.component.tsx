import * as React from 'react';
import { Grid, Panel, Row } from 'react-bootstrap';
import { Button } from './button';
/*import { any } from 'prop-types';*/

interface RandomUserCardState {
  user: User;
}

class User {
  public name: string = '';
  public email: string = '';
  public picture: string = '';
}

// tslint:disable-next-line:max-classes-per-file
export class RandomUserCard extends React.Component<{}, RandomUserCardState> {
  constructor(props: any) {
    super(props);

    this.state = {
      user: new User(),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick(): void {
    this.getRandomUser();
  }

  public async componentDidMount(): Promise<void> {
    this.getRandomUser();
  }

  public async getRandomUser(): Promise<void> {
    const apiUrl = 'https://randomuser.me/api/';

    const response = await fetch(apiUrl);
    const data = await response.json();

    const user = data.results[0];
    const { name, picture } = user;

    this.setState({ user: { name: name.first, email: user.email, picture: picture.medium } });
  }

  public render(): JSX.Element {
    return (
      <Panel>
        <Panel.Body>
          <Grid>
            <Row>
              <img src={this.state.user.picture} />
            </Row>
            <Row>
              <strong>Name: </strong> {this.state.user.name}
            </Row>
            <Row>
              <strong>Email: </strong> {this.state.user.email}
            </Row>
            <Row>
              <Button btnLabel="Generate User" handleClick={this.handleClick} />
            </Row>
          </Grid>
        </Panel.Body>
      </Panel>
    );
  }
}
