import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import { URL } from '../url'


function Profile() {
  const param = useParams().id
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()
  const [posts,setPosts]=useState([])
  const [updated, setUpdated] = useState(false)

  const fetchProfile = async () => {
    try {
      const res = await axios.get(URL+"/api/user" + user._id)
      setUsername(res.data.username)
      setEmail(res.data.email)
      setPassword(res.data.password)

    }
    catch (err) {
      console.log(err);


    }
  }

  const handleUserUpdated = async () => {
    setUpdated(false)
    try {
      const response = await fetch('/api/users/${user._id}', {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ username, email, password })
      })
      console.log(response.data);
      setUpdated(true)

    }
    catch (err) {
      console.log(err);
      setUpdated(false)
    }

  }
  const handleUserDelete = async () => {
    try {
      const res = await axios.delete("/api/users/" + user._id, {
        withCredentials: true,
      })
      setUser(null)
      navigate("/")
      console.log(res.data);

    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [param])


  return (
    <div>
      <Navbar />
      <div className='border p-3 text-center align-middle justify-center w-[50%] shadow-2xl h-screen shadow-gray-500 md:w-[30%]'>
        <div className='flexflex-col space-y-4 justify-center text-center '>
          <h1 className="text-xl justify-center font-bold mb-4">Profile
          </h1>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
            className='outline-none justify-center flex py-2 text-gray-500'
            placeholder='Your username' />

          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}
            className='outline-none justify-center flex py-2 text-gray-500'
            placeholder='Your email' />

          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
            className='outline-none justify-center flex py-2 text-gray-500'
            placeholder='Your password' />


          <div className='flex items-center space-x-6 mt-8'>
            <button onClick={handleUserUpdated} className='text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400'>
              Update
            </button>
            <button onClick={handleUserDelete} className='text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400'>
              Delete
            </button>
          </div>

          {
            updated && (

              <h3 className='text-green-600 text-sm text-center mt-4'>
                User data updated successfully!
              </h3>

            )
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile