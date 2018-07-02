import Auth from '../../services/Auth';
export default class GoogleAuth extends Auth {
    oAuth2URL: string;
    responseType: string;
    constructOAuthEndpoint: () => string;
}
