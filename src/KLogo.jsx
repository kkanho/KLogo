import React, { useState, useEffect } from 'react'
import './KLogo.css'

export default function KLogo() {

  const [extraClass, setExtraClass] = useState('firstLoad')
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      setExtraClass('no-load')
    }
  }, [count])


  const KLogoTemplate = ({ duplicate = '' }) => (
    <div
      className={`container ${extraClass ? extraClass : 'slide'} ${duplicate}`}
      onClick={() => {
        setExtraClass('slide')
      }}
    >
      <div className="row">
        <div className="cell size-5"></div>
        <div className="cell size-3"></div>
        <div className="cell size-8"></div>
        <div className="cell size-5"></div>
        <div className="cell size-12"></div>
        <div className="cell size-5"></div>
      </div>
      <div className="row">
        <div className="cell size-2"></div>
        <div className="cell size-6"></div>
        <div className="cell size-6 blue"></div>
        <div className="cell size-4"></div>
        <div className="cell size-6"></div>
        <div className="cell size-2 red"></div>
        <div className="cell size-3 blue"></div>
        <div className="cell size-2"></div>
        <div className="cell size-7"></div>
      </div>
      <div className="row">
        <div className="cell size-9"></div>
        <div className="cell size-7"></div>
        <div className="cell size-3 red"></div>
        <div className="cell size-5 blue"></div>
        <div className="cell size-5"></div>
        <div className="cell size-2"></div>
        <div className="cell size-8 green"></div>
        <div className="cell size-8"></div>
        <div className="cell size-10"></div>
      </div>
      <div className="row">
        <div className="cell size-5"></div>
        <div className="cell size-10"></div>
        <div className="cell size-5 green"></div>
        <div className="cell size-3 yellow"></div>
        <div className="cell size-7"></div>
        <div className="cell size-2 blue"></div>
        <div className="cell size-6 yellow"></div>
        <div className="cell size-3"></div>
        <div className="cell size-4"></div>
        <div className="cell size-9"></div>
      </div>
      <div className="row">
        <div className="cell size-14"></div>
        <div className="cell size-4"></div>
        <div className="cell size-9 blue"></div>
        <div className="cell size-2"></div>
        <div className="cell size-3"></div>
        <div className="cell size-6 blue"></div>
        <div className="cell size-2 blue"></div>
        <div className="cell size-8"></div>
        <div className="cell size-4"></div>
        <div className="cell size-8"></div>
      </div>
      <div className="row">
        <div className="cell size-11"></div>
        <div className="cell size-10"></div>
        <div className="cell size-3 red"></div>
        <div className="cell size-5 green"></div>
        <div className="cell size-4"></div>
        <div className="cell size-8 red"></div>
        <div className="cell size-4"></div>
        <div className="cell size-14"></div>
        <div className="cell size-3"></div>
        <div className="cell size-4"></div>
      </div>
      <div className="row">
        <div className="cell size-2"></div>
        <div className="cell size-8"></div>
        <div className="cell size-3"></div>
        <div className="cell size-7 yellow"></div>
        <div className="cell blue"></div>
        <div className="cell size-2"></div>
        <div className="cell size-5 green"></div>
        <div className="cell size-2 blue"></div>
        <div className="cell size-3"></div>
        <div className="cell size-10"></div>
        <div className="cell size-8"></div>
      </div>
      <div className="row">
        <div className="cell size-10"></div>
        <div className="cell size-6"></div>
        <div className="cell size-3 green"></div>
        <div className="cell size-11 yellow"></div>
        <div className="cell size-4 blue"></div>
        <div className="cell size-5"></div>
        <div className="cell size-7"></div>
        <div className="cell size-12"></div>
      </div>
      <div className="row">
        <div className="cell size-3"></div>
        <div className="cell size-2"></div>
        <div className="cell size-13"></div>
        <div className="cell size-4 blue"></div>
        <div className="cell size-12 red"></div>
        <div className="cell size-10"></div>
        <div className="cell size-8"></div>
        <div className="cell size-12"></div>
      </div>
      <div className="row">
        <div className="cell size-4"></div>
        <div className="cell size-7"></div>
        <div className="cell size-5"></div>
        <div className="cell size-14 green"></div>
        <div className="cell size-3 blue"></div>
        <div className="cell size-8"></div>
        <div className="cell size-12"></div>
        <div className="cell size-7"></div>
      </div>
      <div className="row">
        <div className="cell size-2"></div>
        <div className="cell size-8"></div>
        <div className="cell size-3"></div>
        <div className="cell size-5 yellow"></div>
        <div className="cell size-3 blue"></div>
        <div className="cell size-2"></div>
        <div className="cell size-8 blue"></div>
        <div className="cell size-3"></div>
        <div className="cell size-10"></div>
        <div className="cell size-8"></div>
      </div>
      <div className="row">
        <div className="cell size-6"></div>
        <div className="cell size-12"></div>
        <div className="cell size-5"></div>
        <div className="cell size-3 blue"></div>
        <div className="cell size-5 yellow"></div>
        <div className="cell size-3"></div>
        <div className="cell size-8 red"></div>
        <div className="cell size-4"></div>
        <div className="cell size-3"></div>
        <div className="cell size-14"></div>
        <div className="cell size-8"></div>
      </div>
      <div className="row">
        <div className="cell size-10"></div>
        <div className="cell size-4"></div>
        <div className="cell size-9 green"></div>
        <div className="cell size-2"></div>
        <div className="cell size-3"></div>
        <div className="cell size-4 blue"></div>
        <div className="cell size-4 red"></div>
        <div className="cell size-4"></div>
        <div className="cell size-4"></div>
        <div className="cell size-8"></div>
      </div>
      <div className="row">
        <div className="cell size-5"></div>
        <div className="cell size-10"></div>
        <div className="cell size-3 blue"></div>
        <div className="cell size-5 yellow"></div>
        <div className="cell size-5"></div>
        <div className="cell"></div>
        <div className="cell size-9 green"></div>
        <div className="cell size-3"></div>
        <div className="cell size-4"></div>
        <div className="cell size-9"></div>
      </div>
      <div className="row">
        <div className="cell size-9"></div>
        <div className="cell size-7"></div>
        <div className="cell size-4 red"></div>
        <div className="cell size-4 blue"></div>
        <div className="cell size-2"></div>
        <div className="cell size-5"></div>
        <div className="cell size-3 yellow"></div>
        <div className="cell size-4 blue"></div>
        <div className="cell size-8"></div>
        <div className="cell size-10"></div>
      </div>
      <div className="row">
        <div className="cell size-6"></div>
        <div className="cell size-3"></div>
        <div className="cell size-4"></div>
        <div className="cell size-6 blue"></div>
        <div className="cell size-3"></div>
        <div className="cell size-7"></div>
        <div className="cell size-6 red"></div>
        <div className="cell"></div>
        <div className="cell size-14"></div>
      </div>
      <div className="row"
        onAnimationEnd={() => {
          if (count > 0) {
            setExtraClass('no-load')
          }
          setCount(1)
        }}
      >
        <div className="cell size-14"></div>
        <div className="cell size-5"></div>
        <div className="cell size-14"></div>
        <div className="cell size-6"></div>
        <div className="cell size-10"></div>
      </div>
    </div>
  )

  const DuplicatedKLogo = ({ duplicate }) => KLogoTemplate({ duplicate })

  return (
    <div className='bc'>
      <KLogoTemplate />
      <DuplicatedKLogo duplicate={'duplicated'} />
    </div>
  )
}

