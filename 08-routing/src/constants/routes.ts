import { generatePath } from 'react-router';

export enum RoutePaths {
  HOME = '/',
  ABOUT = '/про-нас',
  POST_DETAILS = '/posts/:postId',
  TEST = '/test',
  TEST_NEW = 'new',
  TEST1_NEW = '/test1/new',
}

export const getHomePath = () => RoutePaths.HOME;
export const getAboutPath = () => RoutePaths.ABOUT;
export const getPostDetailsPath = (postId: string) =>
  generatePath(RoutePaths.POST_DETAILS, {
    postId,
  });
export const getTestPath = () => RoutePaths.TEST;
export const getTestNewPath = () => `${RoutePaths.TEST}/${RoutePaths.TEST_NEW}`;
export const getTest1NewPath = () => RoutePaths.TEST1_NEW;
