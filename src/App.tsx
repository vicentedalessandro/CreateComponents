import './App.css'
import Table from './components/Table/Table.tsx'
import Input from './components/Input/Input.tsx'
import { Person } from './types/Person.ts'
import Loader from './components/Spinner/Spinner.tsx'
import ProgressBar from './components/ProgressBar/ProgressBar.tsx'
import Button from './components/Button/Button.tsx'
import Checkbox from './components/Checkbox/Checkbox.tsx'
import IconContainer from './components/IconContainer/IconContainer.tsx'
import { Icon } from './types/Icon.ts'
import Password from './components/Password/Password.tsx'
import CounterControl from './components/CounterControl/CounterControl.tsx'
import Select from './components/Select/Select.tsx'

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

const circleXMarkIcon: Icon = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  paths: ["M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"]
}

const options = ['miguel', 'california', 'pepper']

function App() {

  return (
    <>
      <Table data={persons}></Table>
      <br />
      <br />
      <Button>Botón</Button>
      <Input type='text' id='input01' placeholder='Placeholder' required />
      <Password id='input02' placeholder='Password' required />
      <Select id='select01' options={options} required >Selection</Select>
      <Checkbox id='checkbox01'>Checkbox</Checkbox>
      <br />
      <br />
      <Loader></Loader>
      <ProgressBar></ProgressBar>
      <br />
      <br />
      <IconContainer icon={circleXMarkIcon} className='Icon-circleXMark' />
      <br />
      <br />
      <CounterControl></CounterControl>
      <br />
      <br />
    </>
  )
}

export default App
