import renderHTML from 'react-render-html'
import moment from 'moment'
import { Avatar } from 'antd'
import PostImage from '../images/PostImage'
import { useContext } from 'react'

import {
  HeartOutlined,
  HeartFilled,
  CommentOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons'

import { UserContext } from '../../context/index'
import { useRouter } from 'next/dist/client/router'

const PostList = ({ posts }) => {
  const [state] = useContext(UserContext)
  const router = useRouter()
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
              <div className='d-flex pt-2'>
                <HeartOutlined className='text-danger pt-2 h5 px-2' />
                <div className='pt-2 px-2'>like unlike</div>

                <CommentOutlined className='text-danger pt-2 h5 px-2' />
                <div className='pt-2 px-2'>2 comments</div>
                {state?.user?._id === post?.postedBy?._id && (
                  <>
                    <EditOutlined
                      onClick={() => router.push(`/user/post/${post._id}`)}
                      className='text-danger pt-2 h5 px-2 ms-auto'
                    />
                    <DeleteOutlined className='text-danger pt-2 h5 px-2 ms-auto' />
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
    </>
  )
}

export default PostList
