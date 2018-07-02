interface AuthOptions {
  clientID: string;
  redirectURI?: string;
  scope?: string;
}

export default abstract class Auth {
  abstract oAuth2URL: string;
  abstract responseType: string;
  redirectURI: string;
  clientID: string;
  scope: string;

  constructor({
    clientID,
    redirectURI = window.location.origin,
    scope = 'profile',
  }: AuthOptions) {
    this.clientID = clientID;
    this.redirectURI = redirectURI;
    this.scope = scope;
  }

  abstract constructOAuthEndpoint: () => string;

  static getProviderTokenFromURL(key: string) {
    const tokenRegex = new RegExp(`${key}=([^&]*)`);
    const matched = window.location.hash.match(tokenRegex);

    if (!matched) {
      throw new Error(`Token with #${key} key, was not found in the URL`);
    }

    return matched.pop();
  }

  redirectToOAuthProvider() {
    window.location.href = this.constructOAuthEndpoint();
  }
}
