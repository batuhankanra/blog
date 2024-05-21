import React from 'react'
import Text from './text'
import Photo from './photo'
import Social from './social'

export default function Home() {
  return (
    <div className='flex items-center justify-between gap-x-5'>
      <Text />
      <div>
        <Photo/>
        <Social />
      </div>
    </div>
  )
}
