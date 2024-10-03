import './Table.css'
import { Person } from '../../types/Person.ts'
import Button from '../Button/Button.tsx'

function Table({data}:{data: Person[]}) {
  return (
    <div className='table-wrapper'>
      <table className='Table'>
        <thead className='Table-head'>
          <tr className='Table-row'>
            {
              Object.keys(data[0]).map((key) => (
                <th key={key} className='Table-field'>{key.toUpperCase()}</th>
              ))
            }
            <th className='Table-field'/>
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
                    <Button className='EditButton' aria-label='Editar fila'>Editar</Button>
                    <Button className='DeleteButton' aria-label='Eliminar fila'>Eliminar</Button>
                  </menu>
                </td>
              </tr>
            ))
          }
        </tbody>
        <tfoot className='Table-foot'>
          <tr className='Table-row'>
            <td className='Table-data' colSpan={data.length + 1}>
              <menu className='Table-menu'>
                <Button className='AddButton' aria-label='Agregar fila'>Agregar</Button>
              </menu>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Table
