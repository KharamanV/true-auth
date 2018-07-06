[**WARNING**]: README file is currently in process of rewrite and will be released soon.

# true-auth

**vue-authenticate** it's a service that provides Social login using Google, Facebook, GitHub, and other OAuth providers.

## Supported OAuth providers and configurations

1.  Google (https://github.com/KharamanV/true-auth/blob/master/src/providers/Google/Google.ts)

## Will support in future

1.  Facebook
2.  Github
3.  Instagram
4.  Twitter
5.  Bitbucket
6.  LinkedIn
7.  Microsoft Live

## Installation

```bash
npm install true-auth
```

or

```bash
yarn add true-auth
```

## Usage

```javascript
import { Google } from 'true-auth';

const provider = new Google({
  clientID: 'GOOGLE_CLIENT_ID',
  scope: 'profile',
  responseType: 'token',
});

// Redirects to the oAuth provider site via window.location.href
provider.redirectToOAuthProvider();
```

### Get provider access token from the URL

```javascript
// Extracts access token from the url (www.example.com/#access_token=token)
Google.getProviderTokenFromURL('access_token'),
```

## License

The MIT License (MIT)

Copyright (c) 2018

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
