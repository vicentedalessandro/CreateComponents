import './Popup.css'
import { lazy, useEffect, useRef } from 'react'
import { Icon } from '../../../types/Icon.ts'
import Button from '../Button/Button.tsx'

const IconContainer = lazy(() => import('../IconContainer/IconContainer.tsx'))

const cancelIcon: Icon = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 -960 960 960",
  paths: ["M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"]
}

interface PopupProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
  className?: string
}

function Popup({className,...props}: PopupProps) {
  const popupRef = useRef<HTMLDialogElement|null>(null)

  useEffect(() => {
    popupRef.current?.show()
  }, [])

  return (
    <dialog ref={popupRef} className={`Popup${className ? ` ${className}` : ''}`} {...props}>
      <div className='Popup-container'>
        <menu>
          <Button className='Popup-cancel' onClick={() => popupRef.current?.close()}><IconContainer icon={cancelIcon} /></Button>
        </menu>
        {props?.children}
      </div>
    </dialog>
  )
}

export default Popup
