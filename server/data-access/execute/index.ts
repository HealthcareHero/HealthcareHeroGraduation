import { ENV_PRD } from "server/constants";

export const execute = <Response>(
  executeService: () => void,
  executeMockService: () => void
): Response => {
  if (process.env.NODE_ENV === ENV_PRD) {
    return executeService() as unknown as Response;
  }
  else {
    return executeMockService() as unknown as Response;
  }
}
