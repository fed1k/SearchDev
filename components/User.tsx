import Image from "next/image"
import { useEffect } from "react"
import { useQuery } from "react-query"

type Props = {
    username: string
}

const User = ({ username }: Props) => {
  const { data, status, refetch } = useQuery(["users"], ()=>
  fetch(`https://api.github.com/users/${username}`).then(res =>{
    return res.json()
  }))

  useEffect(()=>{
    refetch()
  }, [username])

  return (
      <>
          {status === 'success' && data.message === 'Not Found' && <h1 className="text-white text-center mt-7 text-lg">No user with this username😢</h1>}
          {status === 'success' && !data.message && (
          <div className="bg-slate-700 shadow-lg mx-10 my-5 py-5 px-5 rounded-md fade">
            <Image src={data.avatar_url} alt="Profile photo" width={140} height={140} className="rounded-full"/>
            <h1 className="text-lg text-white">{data.name}</h1>
            <h1 className="text-white opacity-20">{data.login}</h1>
            <>
              <span className="flw">Following: {data.following}</span>
              <span className="mt-1 sm:ml-1 flw">Followers: {data.followers}</span>
            </>
          </div>
      )}
          {status === 'error' && <h1 className="text-white" >OOPS Something went wrong</h1>}
          {status === 'loading' && <h1 className="text-white">Loading...</h1>}
      </>
  )
}

export default User;