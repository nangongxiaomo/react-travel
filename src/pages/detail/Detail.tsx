import { memo } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

interface ParamsProps {
  id: string
}

const Detail: React.FC = memo(() => {
  const params = useParams<ParamsProps>()
  return (
    <div>
      <Link to="/detail/signIn">详情页面: {params.id}</Link>
    </div>
  )
})

export default Detail
