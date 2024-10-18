import './CounterControl.css'
import { lazy, useState } from 'react'
import { Icon } from '../../../types/Icon.ts'
import Button from '../Button/Button.tsx'
import Input from '../Input/Input.tsx'

const IconContainer = lazy(() => import('../IconContainer/IconContainer.tsx'))

const plusIcon: Icon = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 -960 960 960",
  paths: ["M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z"]
}

const minusIcon: Icon = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 -960 960 960",
  paths: ["M240-440q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h480q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H240Z"]
}

function CounterControl({min,max}: {min: number, max: number}) {
  const [value, setValue] = useState(min)
  
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
        <Button className='Button--decrement' onClick={handleDecrement} disabled={value !== min ? false : true}>
          <IconContainer icon={minusIcon} />
        </Button>
        <Button className='Button--increment' onClick={handleIncrement} disabled={value !== max ? false : true}>
          <IconContainer icon={plusIcon} />
        </Button>
      </menu>
    </div>
  )
}

export default CounterControl
