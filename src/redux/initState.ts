import { State } from "../utils/types"

const initState: State = {
  clientId: '_3z7Jj5krcWsmoEexP0f3Q',
  //redirectUri: 'https://cloned-reddit.herokuapp.com/redirected',
  redirectUri: 'https://alex-chemus.github.io/yoomer/#/redirected',
  accessToken: null,
  baseUrl: 'https://oauth.reddit.com',
  isFetchingToken: false,
  accessApi: 'https://reddit-access-api.herokuapp.com/'
  //accessApi: 'https://localhost:4000'
}

export default initState