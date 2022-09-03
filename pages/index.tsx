import type { NextPage } from 'next'
import { useState } from 'react'
import Search from '../components/Search'
import User from "../components/User"

const Home: NextPage = () => {
  const [username, setUsername] = useState<string>()
  
  
  return (
    <div className='bg-slate-800 min-h-screen'>
      <div className='flex justify-center pt-5'>
        <Search setUsername={setUsername}/>
      </div>
      {username ? <User username={username} /> : <h1 className='text-center mt-8 text-white text-lg opacity-50'>Search dev with Github username...</h1>}
    </div>
  )
}

export default Home
