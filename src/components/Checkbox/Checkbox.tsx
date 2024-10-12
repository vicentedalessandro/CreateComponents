import { useState } from 'react'
import './Checkbox.css'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  type?: 'checkbox'
}

function Checkbox({ className, children, ...props }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false)

  const handleChecked = () => {
    setIsChecked(!isChecked)
  }

  return(
    <div className={`Checkbox${className ? ` ${className}` : ''}`} >
      <input type='checkbox' className='Checkbox-field' {...props} checked={isChecked} onChange={e => e.target.checked = isChecked} />
      <span className='Checkbox-checkmark' onClick={handleChecked} />
      <label htmlFor={`${props?.id}`} className='Checkbox-label'>{children}</label>
    </div>
  )
}

export default Checkbox
