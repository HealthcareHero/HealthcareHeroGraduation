import { ENV_PRD } from "server/constants";

export const execute = (executeService, executeMock) => {
  if (process.env.NODE_ENV === ENV_PRD) {
    return executeService;
  }
  else {
    return executeMock;
  }
}
