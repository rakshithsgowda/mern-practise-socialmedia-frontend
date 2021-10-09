import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const EditPost = () => {
  const [post, setPost] = useState({})

  const router = useRouter()
  // console.log('router =>', router)
  const _id = router?.query?._id

  console.log(_id)

  useEffect(() => {
    if (_id) fetchPost()
  }, [_id])

  const fetchPost = async () => {
    try {
      const { data } = await axios.get(`/user-post/${_id}`)
      console.log(`data =>`, data)
      setPost(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <pre>{JSON.stringify(post, null, 4)}</pre>
    </>
  )
}

export default EditPost
