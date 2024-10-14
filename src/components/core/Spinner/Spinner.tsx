import './Spinner.css'

function Spinner() {
  return (
    <svg viewBox="25 25 50 50" className='svg-spinner'>
      <circle className='circle-static' r="20" cy="50" cx="50"></circle>
      <circle className='circle-motion' r="20" cy="50" cx="50"></circle>
    </svg>
  )
}

export default Spinner
