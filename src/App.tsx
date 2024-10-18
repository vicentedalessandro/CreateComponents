import './App.css'
import { Person } from './types/Person.ts'
import { Icon } from './types/Icon.ts'
import IconContainer from './components/core/IconContainer/IconContainer.tsx'
import ProgressBar from './components/core/ProgressBar/ProgressBar.tsx'
import Loader from './components/core/Spinner/Spinner.tsx'
import Button from './components/core/Button/Button.tsx'
import Input from './components/core/Input/Input.tsx'
import Password from './components/core/Password/Password.tsx'
import Checkbox from './components/core/Checkbox/Checkbox.tsx'
import CounterControl from './components/core/CounterControl/CounterControl.tsx'
import Select from './components/core/Select/Select.tsx'
import Popup from './components/core/Popup/Popup.tsx'
import Table from './components/core/Table/Table.tsx'
import SuccesNotification from './components/notifications/SuccesNotification/SuccesNotification.tsx'
import ErrorNotification from './components/notifications/ErrorNotification/ErrorNotification.tsx'
import InfoNotification from './components/notifications/InfoNotification/InfoNotification.tsx'
import WarningNotification from './components/notifications/WarningNotification/WarningNotification.tsx'

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
      <CounterControl min={1} max={9} />
      <br />
      <br />
      <Popup><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, fugiat nisi ab sit odio in odit optio soluta veniam.</p></Popup>
      <br />
      <br />
      {/* <ErrorNotification message='Error al intentar realizar la compra' /> */}
      {/* <InfoNotification message='Da click en la cruz para cerrar' /> */}
      {/* <SuccesNotification message='Compra realizada con éxito!' /> */}
      <WarningNotification message='Si usted elimina esto perdera lo otro' />
    </>
  )
}

export default App
