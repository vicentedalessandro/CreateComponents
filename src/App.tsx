import './App.css'
import Table from './components/Table/Table.tsx'
import { Person } from './types/Person.ts'

const persons: Person[] = [
  {
    id: 1,
    nombre: 'Vicente',
    email: 'vicente@gmail.com',
    tel: '2314-141414'
  },
  {
    id: 2,
    nombre: 'Manuel',
    email: 'manuel@gmail.com',
    tel: '2364-131313'
  },
  {
    id: 3,
    nombre: 'Julian',
    email: 'julian@gmail.com',
    tel: '2364-121212'
  },
  {
    id: 4,
    nombre: 'Agustín',
    email: 'agustín@gmail.com',
    tel: '2364-454545'
  },
  {
    id: 5,
    nombre: 'David',
    email: 'david@gmail.com',
    tel: '2364-797979'
  }
]

function App() {

  return (
    <>
      <Table data={persons}></Table>
    </>
  )
}

export default App
