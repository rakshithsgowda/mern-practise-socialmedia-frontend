import renderHTML from 'react-render-html'
import moment from 'moment'
import { Avatar } from 'antd'
import PostImage from '../images/PostImage'

import { HeartOutlined, HeartFilled, CommentOutlined } from '@ant-design/icons'

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
              {post.image && <PostImage url={post.image.url} />}
              <div className='d-flex'>
                <HeartOutlined className='text-danger pt-2 h5' />
                <div className='pt-2 ps-3'>like unlike</div>

                <CommentOutlined className='text-danger pt-2 h5 ps-5' />
                <div className='pt-2 ps-3 '>2 comments</div>
              </div>
            </div>
          </div>
        ))}
    </>
  )
}

export default PostList
