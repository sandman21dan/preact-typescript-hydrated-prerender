import { Post } from "./actions";

export interface RootState {
  counter: number;
  posts: Post[];
}

const initialState: RootState = {
  counter: 0,
  posts: [],
};

export default initialState;