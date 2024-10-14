import './Input.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  type?: 'email' | 'number' | 'tel' | 'text'
}

function Input({ className, ...props }: InputProps) {
  return(
    <div className={`Input${className ? ` ${className}` : ''}`}>
      <input className='Input-field' {...props} placeholder='' />
      <label htmlFor={`${props?.id}`} className='Input-label'>{props?.placeholder}</label>
    </div>
  )
}

export default Input
