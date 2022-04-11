import React from 'react'

function FaqElement({question, answer}) {
  return (
    <div className='text-left max-w-[100%] text-[0.28rem] mt-1 break-words  ' >
        <h4 className='text-[#FFD500]' >{`Q: ${question}`}</h4>
        <h4 className='text-white' >{answer}</h4>
    </div>
  )
}

export default FaqElement