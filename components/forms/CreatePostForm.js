export default function CreatePostForm() {
  return (
    <div className='card'>
      <div className='card-body pb-3'>
        <form action='' className='form-group'>
          <textarea
            className='form-control'
            placeholder='Write Something'
            name=''
            id=''
            cols='30'
            rows='10'
          ></textarea>
        </form>
      </div>
      <div className='card-footer'>
        <button className='btn btn-primary btn-sm mt-1'>Post</button>
      </div>
    </div>
  )
}
