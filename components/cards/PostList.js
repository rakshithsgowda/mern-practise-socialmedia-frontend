import renderHTML from 'react-render-html'
import moment from 'moment'
import { Avatar } from 'antd'

const PostList = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.map((post) => (
          <div key={post._id} className='card mb-5'>
            {/* {post.content} */}
            <div className='card-header'>
              <Avatar size={40}>{post.postedBy.name[0]}</Avatar>
              <span className='pt-2 ms-2'>{post.postedBy.name}</span>
              <span className='pt-2 ms-2'>
                {moment(post.createdAt).fromNow()}
              </span>
            </div>
            <div className='card-body'>{renderHTML(post.content)} </div>
            <div className='card-footer'>
              <img
                src={post.image && post.image.url}
                alt={post.postedBy.name}
              />
              <div className='pt-3'>like unlike</div>
            </div>
          </div>
        ))}
    </>
  )
}

export default PostList
