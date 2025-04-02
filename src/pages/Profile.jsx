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
    if(!user||!user._id){
      console.log("User is not logged in");
      return
    }
    try {
      const res = await axios.get(URL+`/api/user/${user._id}`)
      setUsername(res.data.username)
      setEmail(res.data.email)
      setPassword(res.data.password)

    }
    catch (err) {
      console.log(err);


    }
    console.log("User from context:", user);

  }

  const handleUserUpdate = async () => {
    setUpdated(false)

    const token = localStorage.getItem("token");
  if (!token) {
    console.log("No token found in localStorage.");
    return;
  }

    try {
      const res = await axios(URL+`/api/user/${user._id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify({ username, email, password }),
      })
      console.log(res.data);
      setUpdated(true)
      setUser(res.data)

    }
    catch (error) {
      console.log(error);
      setUpdated(false)
    }

  }
  const handleUserDelete = async () => {
    setUpdated(false)
    const authData = localStorage.getItem("authData");
    const token = authData ? JSON.parse(authData).token : null;
    if (!token) {
      console.log("No token found in localStorage.");
      return;
    }
    try {
      const res = await axios.delete(URL+`/api/user/ ${user._id}`, {
        headers:{
          'Authorization': `Bearer ${token}`,
        },
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
    if(user?._id){

      fetchProfile()
    }
  }, [user?._id])


  return (
    <div>
      <Navbar />
      <div className='border p-3 text-center align-middle justify-center w-[50%] shadow-2xl h-screen shadow-gray-500 md:w-[30%]'>
        <div className='flexflex-col space-y-4 justify-center text-center '>
          <h1 className="text-xl justify-center font-bold mb-4">Profile
          </h1>
          <input type="text"  onChange={(e) => setUsername(e.target.value)} value={username}
            className='outline-none justify-center flex py-2 text-gray-500'
            placeholder='Your username' />

          <input type="text"  onChange={(e) => setEmail(e.target.value)} value={email}
            className='outline-none justify-center flex py-2 text-gray-500'
            placeholder='Your email' />

          <input type="password"  onChange={(e) => setPassword(e.target.value)} value={password}
            className='outline-none justify-center flex py-2 text-gray-500'
            placeholder='Your password' />


          <div className='flex items-center space-x-6 mt-8'>
            <button onClick={handleUserUpdate} className='text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400'>
              Update
            </button>
            <button onClick={handleUserDelete} className='text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400'>
              Delete
            </button>
          </div>

          {updated && (

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