import './WarningNotification.css'

import { Icon } from '../../../types/Icon'
import Button from '../../core/Button/Button.tsx'
import IconContainer from '../../core/IconContainer/IconContainer'

const warningIcon: Icon = {
  xmlns:"http://www.w3.org/2000/svg",
  viewBox: "0 -960 960 960",
  paths: ["M109-120q-11 0-20-5.5T75-140q-5-9-5.5-19.5T75-180l370-640q6-10 15.5-15t19.5-5q10 0 19.5 5t15.5 15l370 640q6 10 5.5 20.5T885-140q-5 9-14 14.5t-20 5.5H109Zm69-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm0-120q17 0 28.5-11.5T520-400v-120q0-17-11.5-28.5T480-560q-17 0-28.5 11.5T440-520v120q0 17 11.5 28.5T480-360Zm0-100Z"]
}

const cancelIcon: Icon = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 -960 960 960",
  paths: ["M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"]
}

function WarningNotification({ message }: { message: string }) {
  return (
    <dialog className='WarningNotification' open>
      <div className='WarningNotification-container'>
        <div className='WarningNotification-subcontainer'>
          <IconContainer icon={warningIcon} />
          <p className='WarningNotification-message'>{message}</p>
        </div>
        <menu>
          <Button className='WarningNotification-cancel'><IconContainer icon={cancelIcon} /></Button>
        </menu>
      </div>
    </dialog>
  )
}

export default WarningNotification
