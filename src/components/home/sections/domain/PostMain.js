import React from "react";
import { TypeContent } from "./data";
import PostCard from "./Domainpost";

const PostMain = () => {
  return (
    <div>
      {TypeContent.map((user) => (
        <div key={user.id}>
          <PostCard id={user.id} />
        </div>
      ))}
    </div>
  );
};

export default PostMain;
