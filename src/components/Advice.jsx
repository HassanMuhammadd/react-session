import React from 'react'

export default function Advice({isLoading, advice}) {
  return (
	<div className='advice'>{isLoading? "Loading Content": advice}</div>
	)
}
