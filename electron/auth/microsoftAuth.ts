import express from 'express';
import open from 'open';
import axios from 'axios';
import { randomBytes, createHash } from 'crypto';

const CLIENT_ID = '<your-client-id>';
const REDIRECT_URI = 'http://localhost:3000/auth/callback';

// Explicitly typed token response
export interface MicrosoftTokenResponse {
  token_type: string;
  scope: string;
  expires_in: number;
  ext_expires_in: number;
  access_token: string;
  refresh_token: string;
  id_token?: string;
}

export async function loginWithMicrosoft(): Promise<MicrosoftTokenResponse> {
  const state = randomBytes(16).toString('hex');
  const codeVerifier = randomBytes(32).toString('hex');

  const codeChallenge = createHash('sha256')
    .update(codeVerifier)
    .digest('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  const app = express();

  return new Promise((resolve, reject) => {
    const server = app.listen(3000);
    const timeout = setTimeout(() => {
      server.close();
      reject(new Error('Authentication timeout'));
    }, 120000); // 2 min timeout

    app.get('/auth/callback', async (req, res) => {
      const code = req.query.code as string;

      if (!code) {
        res.status(400).send('No code in request.');
        clearTimeout(timeout);
        server.close();
        return reject(new Error('No code received'));
      }

      res.send('Login successful. You can now close this window.');

      try {
        const tokenRes = await axios.post<MicrosoftTokenResponse>(
          'https://login.microsoftonline.com/consumers/oauth2/v2.0/token',
          new URLSearchParams({
            client_id: CLIENT_ID,
            grant_type: 'authorization_code',
            code,
            redirect_uri: REDIRECT_URI,
            code_verifier: codeVerifier,
          }),
          { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );

        clearTimeout(timeout);
        server.close();
        resolve(tokenRes.data);
      } catch (err) {
        clearTimeout(timeout);
        server.close();
        reject(err);
      }
    });

    const authUrl = `https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&response_mode=query&scope=XboxLive.signin%20offline_access&state=${state}&code_challenge=${codeChallenge}&code_challenge_method=S256`;

    open(authUrl);
  });
}
