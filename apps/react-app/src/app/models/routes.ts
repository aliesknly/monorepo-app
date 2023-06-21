export enum routesName {
 
}

export enum publicRoutes {
  LOGIN = 'login',
  HOME = '/',
}

export enum privateRoutes {
  DASHBOARD = 'dashboard',
  USER = 'user',
}

export const RoutesList = [
  { name: 'home', url: publicRoutes.HOME },
  { name: 'login', url: publicRoutes.HOME },
];
