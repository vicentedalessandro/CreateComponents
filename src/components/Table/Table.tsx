import './Table.css'
import { Person } from '../../types/Person.ts'

function Table({data}:{data: Person[]}) {
  return (
    <table className='Table'>
      <thead className='Table-head'>
        <tr className='Table-row'>
          {
            Object.keys(data[0]).map((key) => (
              <th key={key} className='Table-field'>{key.toLocaleUpperCase()}</th>
            ))
          }
        </tr>
      </thead>
      <tbody className='Table-body'>
        {
          data.map((i) => (
            <tr key={i.id} className='Table-row'>
              {Object.values(i).map((value, index) => {
                return index === 0 ? <th key={`${value}-${index}`} className='Table-index'>{value}</th> : <td key={`${value}-${index}`} className='Table-data'>{value}</td>
              })}
              <td className='Table-data'>
                <menu className='Table-menu'>
                  <button>Editar</button>
                  <button>Eliminar</button>
                </menu>
              </td>
            </tr>
          ))
        }
      </tbody>
      <tfoot className='Table-foot'>
        <tr className='Table-row'>
          <td className='Table-data'>
            <menu className='Table-menu'>
              <button>Agregar</button>
            </menu>
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

export default Table
