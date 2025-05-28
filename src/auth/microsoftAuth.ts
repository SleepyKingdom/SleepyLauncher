// auth/microsoft.ts
import express from 'express';
import open from 'open';
import axios from 'axios';
import { randomBytes, createHash } from 'crypto';

const CLIENT_ID = '<your-client-id>';
const REDIRECT_URI = 'http://localhost:3000/auth/callback';

export async function loginWithMicrosoft(): Promise<any> {
  const state = randomBytes(16).toString('hex');
  const codeVerifier = randomBytes(32).toString('hex');
  const codeChallenge = createHash('sha256').update(codeVerifier).digest('base64url');

  const app = express();

  return new Promise((resolve, reject) => {
    const server = app.listen(3000);

    app.get('/auth/callback', async (req, res) => {
      const code = req.query.code as string;

      if (!code) return res.status(400).send('No code in request.');

      // Respond to user
      res.send('Login successful. You can now close this window.');

      // Exchange code for token
      try {
        const tokenRes = await axios.post(
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

        server.close();
        resolve(tokenRes.data);
      } catch (err) {
        server.close();
        reject(err);
      }
    });

    const authUrl = `https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_mode=query&scope=XboxLive.signin%20offline_access&state=${state}&code_challenge=${codeChallenge}&code_challenge_method=S256`;

    open(authUrl);
  });
}
