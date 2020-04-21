const profile = "/profile";
const bulletin = "/congratulate-a-friend";

export const feedPostThread = `${bulletin}/feedpost`;

export const path = {
  root: "https://healthcare-heroes-graduation.web.app",
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