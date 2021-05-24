export interface Profile {
  name: string,
  avatar: string,
  pageComponent?: () => JSX.Element,
  pagePathSuffix: string,
  pageTitle: string,
  pageDescription: string
}
