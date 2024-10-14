import './IconContainer.css'
import { Icon } from '../../../types/Icon.ts'

interface IconContainerProps extends React.SVGAttributes<HTMLOrSVGElement> {
  icon: Icon
  className?: string
}

function IconContainer({ icon, className, ...props }: IconContainerProps) {
  return (
    <svg 
      xmlns={icon.xmlns}
      viewBox={icon.viewBox}
      className={`IconContainer${className ? ` ${className}` : ''}`}
      {...props}
    >
      {
        icon.paths.map(d => (<path d={d} key={crypto.randomUUID()}/>))
      }
    </svg>
  )
}

export default IconContainer
