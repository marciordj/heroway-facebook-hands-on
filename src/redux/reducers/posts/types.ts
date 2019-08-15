import { ITodo } from '../../models/todo';

/**
 * Actions
 */
export enum EActions {
  HTTP_GET_POSTS = "@todos/HTTP_GET_POSTS",
  HTTP_GET_POSTS_SUCCESS = "@todos/HTTP_GET_POSTS_SUCCESS",
  HTTP_GET_POSTS_FAIL = "@todos/HTTP_GET_POSTS_FAIL"
}

/**
 * State
 */
export interface IState {
  readonly isFetching: boolean;
  readonly hasErrors: boolean;
  readonly posts: ITodo[];
}

/**
 * Action Creators
 */
