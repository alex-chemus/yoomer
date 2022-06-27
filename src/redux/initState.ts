import { State } from "../utils/types"

const initState: State = {
  clientId: '_3z7Jj5krcWsmoEexP0f3Q',
  //clientSecret: 'Q4MvDxIU9q77HINPVKbTL6IDUn_C6Q',
  redirectUri: 'https://cloned-reddit.herokuapp.com/redirected',
  accessToken: null,
  baseUrl: 'https://oauth.reddit.com',
  isFetchingToken: false,
}

export default initState