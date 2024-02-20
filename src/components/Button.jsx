import React from 'react'

export default function Button({handlerFunction, text}) {
  return (
	<>
		<button
		className='btn'
		onClick={handlerFunction}
		>{text}</button>
	</>
  )
}
