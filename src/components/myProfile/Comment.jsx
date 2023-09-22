import CommentBox from "./Commentbox";

const Comment = () => {
  return (
    <div className="grid grid-cols-2 gap-2 justify-center py-3">
      <CommentBox/>
      <CommentBox/>
      <CommentBox/>
      <CommentBox/>
    </div>
  );
};

export default Comment;
