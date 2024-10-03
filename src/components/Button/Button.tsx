import './Button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

function Button ({ className, ...props }: ButtonProps) {
  return (
    <button className={`Button ${className || ''}`} {...props}/>
  )
}

export default Button;

