import './App.css'
import Table from './components/Table/Table.tsx'
import Input from './components/Input/Input.tsx'
import { Person } from './types/Person.ts'
import Loader from './components/Spinner/Spinner.tsx'
import ProgressBar from './components/ProgressBar/ProgressBar.tsx'
import Button from './components/Button/Button.tsx'

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
      <Button>Botón</Button>
      <Input type='text' id='input01' placeholder='Placeholder' required/>
      <Loader></Loader>
      <ProgressBar></ProgressBar>
    </>
  )
}

export default App
