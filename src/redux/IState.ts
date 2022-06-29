export default interface IState {
  clientId: string,
  redirectUri: string,
  accessToken: null | string,
  baseUrl: string,
  isFetchingToken: boolean,
  accessApi: string
}