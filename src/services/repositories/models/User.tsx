export class User {
  public name: string = '';
  public email: string = '';
  public picture: string = '';

  constructor(data: Partial<User> = {}) {
    Object.assign(this, { ...data });
  }
}
