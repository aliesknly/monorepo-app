export enum publicRoutes {
  LOGIN = 'login',
  HOME = '/',
}

export enum privateRoutes {
  DASHBOARD = 'dashboard',
  USER = 'user',
}

export const routesHeaderList = [
  { name: 'home', url: publicRoutes.HOME, labeId: 'home' },
  { name: 'login', url: publicRoutes.HOME, labeId: 'login' },
];

export type RouterHeaderListType = typeof routesHeaderList[0];
