import './Select.css'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string
  options: string[]
}

function Select({ options, className, ...props }: SelectProps) {
  return (
    <div className={`Select${className ? ` ${className}` : ''}`}>
      <select className='Select-field' {...props}>
        <option className='Select-defaultOption' value='' selected >Selecciona una opción</option>
        {options.map((option)=>(<option className='Select-option' value={option} key={option} >{option}</option>))}
      </select>
      <label className='Select-label' htmlFor={props?.id}>{props.children}</label>
    </div>
  )
}

export default Select
