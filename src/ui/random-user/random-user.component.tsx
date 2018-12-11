import * as React from 'react';
import { Button } from './button';
import { RandomUserCard } from './random-user-card.component';
import { User } from './User';

interface RandomUserState {
  user: User;
}

export class RandomUser extends React.Component {
  public state: RandomUserState = {
    user: new User(),
  };

  public handleClick = (): void => {
    this.getRandomUser();
  };

  public componentDidMount(): void {
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
    const { picture, name, email } = this.state.user;

    return (
      <>
        <RandomUserCard name={name} picture={picture} email={email} />
        <Button btnLabel="Generate User" handleClick={this.handleClick} />
      </>
    );
  }
}
