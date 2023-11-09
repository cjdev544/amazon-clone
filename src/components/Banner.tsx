'use client'
/* eslint-disable @next/next/no-img-element */
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function Banner() {
  return (
    <section className='relative'>
      <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        interval={4000}
      >
        <div>
          <img src='/img1.jpg' alt='img1' />
        </div>
        <div>
          <img src='/img2.jpg' alt='img2' />
        </div>
        <div>
          <img src='/img3.jpg' alt='img3' />
        </div>
        <div>
          <img src='/img4.jpg' alt='img4' />
        </div>
      </Carousel>
    </section>
  )
}
