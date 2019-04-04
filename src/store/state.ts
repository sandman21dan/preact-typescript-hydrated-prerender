import { Post } from "./actions";

export interface RootState {
  counter: number;
  posts: Post[];
}

export const initialState: RootState = {
  counter: 0,
  posts: [],
};

function hydrateState() {

}

export default () => {
  const stateTag = document.getElementById('app-state');
  if (stateTag) {
    return JSON.parse(stateTag.innerHTML);
  }
  return initialState;
};