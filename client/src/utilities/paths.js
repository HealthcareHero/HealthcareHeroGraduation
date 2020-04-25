const bulletin = "/thank-you-healthcare-heroes";
const profile = "/hero";
export const feedPostThread = `${bulletin}/feedpost`;

export const path = {
  root: "https://healthcare-heroes.web.app",
  home: "/",
  bulletin,
  createNewFeedPost: `${bulletin}/create-a-new-post`,
  feedPostThread: `${feedPostThread}/:feedPostId`,
  profileRoot: profile,
  profilePattern: `${profile}/:name`,
  profile: {
    bernard: `${profile}/bernard`,
    yanka: `${profile}/yanka`,
    yiksiong: `${profile}/yik-siong`
  }
}