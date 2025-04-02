import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader'
import HomePost from '../components/HomePost'
import Footer from '../components/Footer'
import { URL } from '../url'


function MyBlogs() {
  const { search } = useLocation()
  const [posts, setPosts] = useState([])
  const [noResults, setNoResults] = useState(false)
  const [loader, setLoader] = useState(false)
  const { user } = useContext(UserContext)


  const fetchPosts = async () => {
    setLoader(true)
    const token=localStorage.getItem("token")
    try {
      const res = await axios.get(URL+`/api/post/user/${user._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true
        }
      )
      setPosts(res.data)
      if (res.data.length === 0) {
        setNoResults(true)
      }
      else {
        setNoResults(false)
      }
      setLoader(false)
    }
    catch(err) {
      console.log(err);
      setLoader(true)


    }
    console.log("User from context:", user);

  }

  useEffect(() => {
    if(user?._id)
    fetchPosts()
  }, [user._id])

  return (
    <div>
      <Navbar />
      <div className='px-8 md:px-[200px] min-h-[80vh]'>
        {loader?<div className='h-[40vh] flex justify-center items-center'><Loader /></div>:!noResults ?
            posts.map((post) => (
              <>
                <Link to={user?`/posts/post/${post._id}`:"/login"}>
                  <HomePost key={post._id} post={post} />
                </Link>
              </>
             

            )) :
            <h3 className='text-center font-bold mt-16'>
              No posts available
            </h3>
        }
      </div>
      <Footer/>
    </div>
  )
}

export default MyBlogs