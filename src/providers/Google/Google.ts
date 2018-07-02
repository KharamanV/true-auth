import Auth from '../../services/Auth';

export default class GoogleAuth extends Auth {
  oAuth2URL = 'https://accounts.google.com/o/oauth2/v2/auth';
  responseType = 'token';

  constructOAuthEndpoint = () =>
    `${this.oAuth2URL}?client_id=${this.clientID}&redirect_uri=${
      this.redirectURI
    }&scope=${this.scope}&response_type=${this.responseType}`;
}
