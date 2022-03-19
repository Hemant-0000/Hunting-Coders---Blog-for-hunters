import React from 'react'

const Dummy = () => {
  return (
      <>
      {/* This is styled-jsx and by putting global u can use its classes wherever it is imported */}
      <style jsx global>
          {`
          .dummy{
              background-color: yellow;
          }
          `}
      </style>
    <div className='dummy'>Dummy</div>
    </>
  )
}

export default Dummy