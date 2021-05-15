export interface Routes {
  home: RouteMeta,
  profiles: ProfilesRouteMeta
}

interface RouteMeta {
  path: string,
  navTabTitle?: string,
  pageTitle?: string,
  pageDescription?: string | null
}

interface ProfilesRouteMeta extends RouteMeta{
  bernard: RouteMeta,
  jeanie: RouteMeta,
  yanka: RouteMeta,
  yikSiong: RouteMeta
}
