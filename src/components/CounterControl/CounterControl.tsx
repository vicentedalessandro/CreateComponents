import { lazy, useState } from 'react'
import { Icon } from '../../types/Icon.ts'
import './CounterControl.css'
import Button from '../Button/Button'
import Input from '../Input/Input'

const IconContainer = lazy(() => import('../IconContainer/IconContainer.tsx'))

const plusIcon: Icon = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512",
  paths: ["M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]
}

const minusIcon: Icon = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512",
  paths: ["M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]
}



function CounterControl() {
  const [value, setValue] = useState(0)
  const min = 0
  const max = 10

  const handleIncrement = () => {
    setValue(value + 1)
  }

  const handleDecrement = () => {
    setValue(value - 1)
  }

  return (
    <div className='CounterControl'>
      <Input type='number' className='Input--counterControl' value={value} min={min} max={max} readOnly/>
      <menu className='CounterControl-menu'>
        <Button className='Button--decrement' onClick={handleDecrement} disabled={value !== 0 ? false : true}>
          <IconContainer icon={minusIcon} />
        </Button>
        <Button className='Button--increment' onClick={handleIncrement} disabled={value !== 10 ? false : true}>
          <IconContainer icon={plusIcon} />
        </Button>
      </menu>
    </div>
  )
}

export default CounterControl
