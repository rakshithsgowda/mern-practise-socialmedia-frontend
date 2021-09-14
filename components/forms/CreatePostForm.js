export default function CreatePostForm({ content, setContent, postSubmit }) {
  return (
    <div className='card'>
      <div className='card-body pb-3'>
        <form action='' className='form-group'>
          <textarea
            className='form-control'
            placeholder='Write Something'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </form>
      </div>
      <div className='card-footer'>
        <button onClick={postSubmit} className='btn btn-primary btn-sm mt-1'>
          Post
        </button>
      </div>
    </div>
  )
}
