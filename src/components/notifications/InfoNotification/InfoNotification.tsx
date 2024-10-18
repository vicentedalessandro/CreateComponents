import './InfoNotification.css'
import { Icon } from '../../../types/Icon'
import Button from '../../core/Button/Button.tsx'
import IconContainer from '../../core/IconContainer/IconContainer'

const infoCircleIcon: Icon = {
  xmlns:"http://www.w3.org/2000/svg",
  viewBox: "0 -960 960 960",
  paths: ["M480-280q17 0 28.5-11.5T520-320v-160q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480v160q0 17 11.5 28.5T480-280Zm0-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"]
}

const cancelIcon: Icon = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 -960 960 960",
  paths: ["M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"]
}

function InfoNotification({ message }: { message: string }) {
  return (
    <dialog className='InfoNotification' open>
      <div className='InfoNotification-container'>
        <div className='InfoNotification-subcontainer'>
          <IconContainer icon={infoCircleIcon} />
          <p className='InfoNotification-message'>{message}</p>
        </div>
        <menu>
          <Button className='InfoNotification-cancel'><IconContainer icon={cancelIcon} /></Button>
        </menu>
      </div>
    </dialog>
  )
}

export default InfoNotification
