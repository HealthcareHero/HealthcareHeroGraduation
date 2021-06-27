import { ENV_PRD } from "server/constants";

export const execute = async <Response>(
  executeService: () => Promise<any>,
  executeMockService: () => Promise<any>
): Promise<Response> => {
  if (process.env.NODE_ENV === ENV_PRD) {
    return await executeService() as unknown as Response;
  }
  else {
    return await executeMockService() as unknown as Response;
  }
}
