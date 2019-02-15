import * as React from 'react';
import { Button } from './button';
import { RandomUserCard } from './random-user-card.component';
import { randomUserRepository } from '../../services/repositories/random-user-repository';
import { User } from '../../services/repositories/models/User';

interface RandomUsersState {
  users: User[];
}

export class RandomUsers extends React.Component<{}, RandomUsersState> {
  public state: RandomUsersState = {
    users: [],
  };

  public handleClick = (): void => {
    this.getRandomUsers();
  };

  public componentDidMount(): void {
    this.getRandomUsers();
  }

  public async getRandomUsers(): Promise<void> {
    const users = await randomUserRepository.getRandomUsers();

    this.setState({ users });
  }
  public render(): JSX.Element {
    const { users } = this.state;

    const userCards = users.map((user: User) => {
      const { picture, name, email } = user;

      return <RandomUserCard key={email} name={name} picture={picture} email={email} />;
    });

    return (
      <div>
        {userCards}
        <Button btnLabel="Generate User" handleClick={this.handleClick} />
      </div>
    );
  }
}
