import React from 'react'
import'./work-card.css'

function WorkCard({item}) {
  return (
    <div className='work-card'>
        <div className='work-info'>
            <label className='company-name'>{item.company}</label>
            <div className='work-desc'>
                <p>{item.work}</p>
            </div>

        </div>
    </div>
  )
}

export default WorkCard