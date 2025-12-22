import { generatePath } from 'react-router';

export enum RoutePaths {
  HOME = '/',
  POSTS = '/posts',
  POST_DETAILS = '/posts/:postId',
  EDIT_POST = '/posts/:postId/edit',
}

export const getHomePath = () => RoutePaths.HOME;
export const getPostsPath = () => RoutePaths.POSTS;
export const getPostDetailsPath = (postId: string) =>
  generatePath(RoutePaths.POST_DETAILS, {
    postId,
  });
export const getEditPostPath = (postId: string) =>
  generatePath(RoutePaths.EDIT_POST, {
    postId,
  });
