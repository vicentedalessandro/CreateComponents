import './Table.css'
import { lazy } from 'react'
import { Icon } from '../../../types/Icon.ts'
import { Person } from '../../../types/Person.ts'
import Button from '../Button/Button.tsx'

const IconContainer = lazy(() => import('../IconContainer/IconContainer.tsx'))

const plusIcon: Icon = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 -960 960 960",
  paths: ["M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z"]
}

const editIcon: Icon = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 -960 960 960",
  paths: ["M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h261q20 0 30 12.5t10 27.5q0 15-10.5 27.5T460-760H200v560h560v-261q0-20 12.5-30t27.5-10q15 0 27.5 10t12.5 30v261q0 33-23.5 56.5T760-120H200Zm280-360Zm-120 80v-97q0-16 6-30.5t17-25.5l344-344q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L553-384q-11 11-25.5 17.5T497-360h-97q-17 0-28.5-11.5T360-400Zm481-384-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"]
}

const trashIcon: Icon = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 -960 960 960",
  paths: ["M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM400-280q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640q-17 0-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280Zm160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640q-17 0-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280ZM280-720v520-520Z"]
}

function Table({ data }: { data: Person[] }) {
  return (
    <div className='table-wrapper'>
      <menu className='Menu'>
        <Button className='AddButton' aria-label='Agregar fila'><IconContainer icon={plusIcon} /><span>Agregar</span></Button>
      </menu>
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
                    <Button className='EditButton' aria-label='Editar fila'><IconContainer icon={editIcon} /></Button>
                    <Button className='DeleteButton' aria-label='Eliminar fila'><IconContainer icon={trashIcon} /></Button>
                  </menu>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table
