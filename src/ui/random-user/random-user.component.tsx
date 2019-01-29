import * as React from 'react';
import { Button } from './button';
import { RandomUserCard } from './random-user-card.component';
import { randomUserRepository } from '../../services/repositories/random-user-repository';
import { User } from '../../services/repositories/models/User';

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
    const user = await randomUserRepository.getRandomUser();

    this.setState({ user });
  }
  public render(): JSX.Element {
    const { picture, name, email } = this.state.user;

    return (
      <div>
        <RandomUserCard name={name} picture={picture} email={email} />
        <RandomUserCard name={name} picture={picture} email={email} />
        <RandomUserCard name={name} picture={picture} email={email} />
        <RandomUserCard name={name} picture={picture} email={email} />
        <Button btnLabel="Generate User" handleClick={this.handleClick} />
      </div>
    );
  }
}
