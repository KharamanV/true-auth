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
    constructor({ clientID, redirectURI, scope, }: AuthOptions);
    abstract constructOAuthEndpoint: () => string;
    static getProviderTokenFromURL(key: string): string | undefined;
    redirectToOAuthProvider(): void;
}
export {};
