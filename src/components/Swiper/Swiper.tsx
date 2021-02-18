import React from 'react'
import { Image, Carousel } from 'antd'

const slide = [
  'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2923679630,1264534690&fm=26&gp=0.jpg',
  'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1705133864,230414792&fm=26&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3810369708,4207256531&fm=26&gp=0.jpg'
]

export const Swiper: React.FC = () => {
  return (
    <Carousel
      style={{ textAlign: 'center', height: 250, overflow: 'hidden' }}
      autoplay
      effect="fade"
    >
      {slide.map(item => (
        <Image key={item} preview={false} width='100%' src={item} />
      ))}
    </Carousel>
  )
}
