import { Post } from "./actions";

export interface RootState {
  counter: number;
  posts: Post[];
  isInit: boolean;
}

export const initialState: RootState = {
  counter: 0,
  posts: [],
  isInit: false,
};

export default () => {
  const stateTag = document.getElementById('app-state');
  if (stateTag) {
    try {
      return JSON.parse(stateTag.innerHTML);
    } catch (e) {
      return initialState;
    }
  }
  return initialState;
};
