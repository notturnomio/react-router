import PostsList from "./postsList";
import Post from "./post";
// import query from "query-string";
// import _ from "lodash";
import { useParams } from "react-router-dom";

const Posts = ({ match, location }) => {
  const params = useParams();
  const posts = [
    { id: 1, label: "post 1" },
    { id: 2, label: "post 2" },
    { id: 3, label: "post 3" },
  ];

  // const search = query.parse(location.search);
  const { postId } = params;
  // const postId = match.params.postId;

  // console.log(search);
  // const cropPosts = search
  //   ? _(posts).slice(0).take(search.count).value()
  //   : posts;
  return (
    <>
      {postId ? (
        <Post posts={posts} id={postId} />
      ) : (
        <PostsList posts={posts} />
      )}
    </>
  );
};

export default Posts;
