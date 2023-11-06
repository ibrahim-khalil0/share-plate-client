import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'flowbite-react';
import { Helmet } from 'react-helmet';
import BasicTable from './table';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Helmet>
                <meta charSet="utf-8" />
                <title>home - tittle</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
     

     <Button.Group>
      <Button color="gray">Profile</Button>
      <Button color="gray">Settings</Button>
      <Button color="gray">Messages</Button>
    </Button.Group>

    <div className="flex flex-wrap gap-2">
      <Button.Group>
        <Button color="info">Profile</Button>
        <Button color="info">Settings</Button>
        <Button color="info">Messages</Button>
      </Button.Group>
      <Button.Group>
        <Button gradientMonochrome="info">Profile</Button>
        <Button gradientMonochrome="info">Settings</Button>
        <Button gradientMonochrome="info">Messages</Button>
      </Button.Group>
      <Button.Group>
        <Button gradientDuoTone="greenToBlue">Profile</Button>
        <Button gradientDuoTone="greenToBlue">Settings</Button>
        <Button gradientDuoTone="greenToBlue">Messages</Button>
      </Button.Group>
    </div>
      <h1 className='text-center'>hello world</h1>
      


      <BasicTable></BasicTable>
    </>
  )
}

export default App
