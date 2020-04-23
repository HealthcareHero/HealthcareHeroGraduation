const profile = "/heroes";
const bulletin = "/thank-you-healthcare-heroes";

export const feedPostThread = `${bulletin}/feedpost`;

export const path = {
  root: "https://healthcare-heroes.web.app",
  home: "/",
  bulletin,
  createNewFeedPost: `${bulletin}/create-a-new-post`,
  feedPostThread: `${feedPostThread}/:feedPostId`,
  profile: {
    bernard: `${profile}/bernard`,
    yanka: `${profile}/yanka`,
    yiksiong: `${profile}/yiksiong`,
  }
}