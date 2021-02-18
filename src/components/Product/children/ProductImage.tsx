import { Image, Typography } from 'antd'
import { Link } from 'react-router-dom'

interface Props {
  size: 'large' | 'small'
  src: string
  price: number | string
  title: string
  id?: number | string
}

export const ProductImage: React.FC<Props> = ({
  id,
  size,
  src,
  price,
  title
}) => {
  return (
    <Link to={`/detail/${id}`}>
      {size === 'large' ? (
        <Image preview={false} src={src} width={528} height={285} />
      ) : (
        <Image preview={false} src={src} width={240} height={120} />
      )}
      <div>
        <Typography.Text>{title.slice(0, 10)}...</Typography.Text>
        <Typography.Text type={'danger'} strong>
          ¥ {price} 起
        </Typography.Text>
      </div>
    </Link>
  )
}
