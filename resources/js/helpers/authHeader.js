export default function authHeader() {
  // return authorization header
  return {
    "x-rapidapi-host": process.env.MIX_APP_API_HOST,
    "x-rapidapi-key": process.env.MIX_APP_API_KEY
  };
}