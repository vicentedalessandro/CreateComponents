import './Input.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

function Input({ className, ...props }: InputProps) {
  return(
    <div className='Input-container'>
      <input className={`Input${className ? ` ${className}` : ''}`} {...props} placeholder='' />
      <label htmlFor={`${props?.id}`} className='Input-label'>{props?.placeholder}</label>
    </div>
  )
}

export default Input
