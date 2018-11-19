import * as React from 'react';
import { RandomUserCard } from './random-user-card.component';

export class RandomUser extends React.Component {
  public componentDidMount(): void {
    // do fetching here.
  }

  public render(): JSX.Element {
    return <RandomUserCard name={'John'} email={'john@gmail.com'} />;
  }
}
