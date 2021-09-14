import dynamic from 'next/dynamic'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
// import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function CreatePostForm({ content, setContent, postSubmit }) {
  return (
    <div className='card'>
      <div className='card-body pb-3'>
        <form action='' className='form-group'>
          <ReactQuill
            theme='snow'
            className='form-control'
            placeholder='Write Something'
            value={content}
            onChange={(e) => setContent(e)}
          />
        </form>
      </div>
      <div className='card-footer'>
        <button
          disabled={!content}
          onClick={postSubmit}
          className='btn btn-primary btn-sm mt-1'
        >
          Post
        </button>
      </div>
    </div>
  )
}
