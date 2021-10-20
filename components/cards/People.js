import { Avatar, List } from 'antd'
import moment from 'moment'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { UserContext } from '../../context'

const People = ({ people }) => {
  const [state] = useContext(UserContext)
  const router = useRouter()
  return (
    <>
      <List
        itemLayout='horizontal'
        dataSource={people}
        renderItem={(person) => (
          <List.Item>
            <List.Item.Meta
              title={
                <div className='d-flex justify-content-between'>
                  {person.name} <span className='text-primary'>Follow</span>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </>
  )
}
export default People
