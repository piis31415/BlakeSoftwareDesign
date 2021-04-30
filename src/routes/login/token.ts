import * as config from 'config';
import { checkUserExists as checkUser } from '../../db/_user'
import { OAuth2Client }  from 'google-auth-library';
import type { ReturnMessage } from '../../_util'

const GOOGLE_CLIENT_ID: string = config.get('googleOauth.clientId');
const GOOGLE_CLIENT_SECRET: string = config.get('googleOauth.clientSecret');
const oAuthClient = new OAuth2Client(GOOGLE_CLIENT_ID);

export async function post(request) {
  console.log('bruhHhHhHh',request);
  const token: string = request.body.token;
  const ticket = await oAuthClient.verifyIdToken({
    idToken: token,
    audience: GOOGLE_CLIENT_ID,
  });
  const payload = ticket.getPayload();
  const msg: ReturnMessage = {
    error: true,
    msg: "A Serverside Error Has Occurred"
  } 
  if (payload.email && payload.email_verified) {
    if (await checkUser(payload.email)) {
      msg.error = false;
      msg.msg = "Successfully Logged In"
    } else {
      msg.error = true;
      msg.msg = "User Email Does Not Exist.\nIf you are in learningworks, please email admin@learningworks.co to add your account.";
    }
  } else {
    msg.error = true;
    msg.msg = "Invalid Email";
  }
  return {
    body: msg,
    headers: {
      "Set-Cookie": [""]
      'Content-Type': 'application/json'
    }
  }
}