import { parseEnvJson, parseEnvBase64Json } from './helpers'
import { ENV_KEY_FIREBASE_CONFIG, ENV_KEY_FIREBASE_SERVICE_ACCOUNT } from './constants'

export const getFirebaseConfig = () => {
  return parseEnvJson(ENV_KEY_FIREBASE_CONFIG);
}

export const getFirebaseServiceAccount = () => {
  return parseEnvBase64Json(ENV_KEY_FIREBASE_SERVICE_ACCOUNT);
}
