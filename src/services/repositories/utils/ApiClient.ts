export class ApiClient {
  public async get(url: string): Promise<Response> {
    return await fetch(url);
  }
}
