const PostList = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.map((post) => (
          <div key={post._id} className='card mb-5'>
            {post.content}
            <div className='card-header'>image/name/date</div>
            <div className='card-body'>content....</div>
            <div className='card-footer'>like / unlike</div>
          </div>
        ))}
    </>
  )
}

export default PostList
