import { memo } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

interface ParamsProps {
  id: string
}

interface RouteProps {
  route?: any
}

const Detail: React.FC<RouteProps> = memo(({ route }) => {
  const params = useParams<ParamsProps>()
  console.log('parent render')
  return (
    <div>
      <Link to="/detail/signIn">详情页面: {params.id}</Link>
      {route && renderRoutes(route.routes)}
    </div>
  )
})

export default Detail
