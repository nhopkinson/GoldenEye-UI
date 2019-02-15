import { ApiClient } from './utils/ApiClient';
import { User } from './models/User';

const apiUrl = 'https://randomuser.me/api/';

export class RandomUserRepository {
  private apiClient: ApiClient;

  constructor(apiClient?: ApiClient) {
    this.apiClient = apiClient || new ApiClient();
  }

  public async getRandomUser(): Promise<User> {
    const response = await this.apiClient.get(apiUrl);
    const data = await response.json();

    const apiUser = data.results[0];
    const { name, email, picture } = apiUser;

    return new User({
      email,
      name: name.first,
      picture: picture.medium,
    });
  }

  public async getRandomUsers(): Promise<User[]> {
    const response = await this.apiClient.get(apiUrl + '?results=5');
    const data = await response.json();

    return data.results.map((apiUser: any) => {
      const { name, email, picture } = apiUser;

      return new User({
        email,
        name: name.first,
        picture: picture.medium,
      });
    });
  }
}

export const randomUserRepository = new RandomUserRepository();
