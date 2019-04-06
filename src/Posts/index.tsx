import { h, FunctionalComponent } from "preact";
import { Post } from "../store/actions";
import { connect } from "preact-redux";
import { RootState } from "../store/state";

import './Posts.scss';

const Posts: FunctionalComponent<{ posts: Post[] }> = ({
  posts,
}) => (
  <section class="post-list">
    <h2>Posts:</h2>
    <div class="post-list__items">
      {posts.map((post) => (<Post post={post} key={post.id}/>))}
    </div>
  </section>
);

const Post: FunctionalComponent<{ post: Post }> = ({
  post,
}) => (
  <div class="post">
    <h4>{post.title}</h4>
    <p>{post.body}</p>
  </div>
);

const mapDispatchToProps = (state: RootState) => ({
  posts: state.posts.slice(0, 9),
});

export default connect(mapDispatchToProps)(Posts);
