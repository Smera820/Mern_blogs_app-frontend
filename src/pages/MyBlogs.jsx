import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader'
import HomePost from '../components/HomePost'


function MyBlogs() {
  const { search } = useLocation()
  const [posts, setPosts] = useState([])
  const [noResults, setNoResults] = useState(false)
  const [loader, setLoader] = useState(false)
  const { user } = useContext(UserContext)

  const featchPosts = async () => {
    setLoader(true)
    try {
      const res = await axios.get(URL + "/api/posts/user/" + user._id)
      setPosts(res.data)
      if (res.data.length === 0) {
        setNoResults(true)
      }
      else {
        setNoResults(false)
      }
    }
    catch (err) {
      console.log(err);
      setLoader(true)


    }
  }

  useEffect(() => {
    featchPosts()
  }, [search])

  return (
    <div>
      <Navbar />
      <div className='px-8 md:px-[200px] min-h-[80vh]'>
        {loader ?
          <div className='h-[40vh] flex justify-center items-center'><Loader /></div>
          : !noResults ?
            posts.map((posts) => (
              <div className='w-[40vh] mt-5'>
                <Link to={user ? '/posts/post/${post._id}' : "/login"}>
                  <HomePost key={posts._id} post={posts} />
                </Link>
              </div>
            )) :
            <h3 className='text-center font-bold mt-16'>
              No posts available
            </h3>
        }
      </div>
    </div>
  )
}

export default MyBlogs