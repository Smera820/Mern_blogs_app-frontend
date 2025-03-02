import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/userContext'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { ImCross } from 'react-icons/im'

function EditPost() {
  const postId = useParams().id
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState(null)
  const [cat, setCat] = useState("a")
  const [cats, setCats] = useState([])

  const fetchPost = async () => {
    try {
      const res = await axios.get("/api/posts/" + postId)
      setTitle(res.data.title)
      setDesc(res.data.desc)
      setFile(res.data.photo)
      setCats(res.data.categories)
    }
    catch (err) {
      console.log(err);

    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    const post = {
      title,
      desc,
      username: user.username, 
      userId: user.userId, 
      categories: cats,
      file: res.data.photo
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("img", fileName);
      data.append("file", file);
      post.photo = fileName;

      try {
        await axios.post("/api/upload", data);
      } catch (err) {
        console.log(err);
        return;
      }

    }
    try {
      const res = await axios.put("/api/posts/", postId, post, { withCredentials: true });
      navigate("/posts/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchPost()
  }, [postId])

  const addCate = () => {
    let updatedCats = [...cats]
    updatedCats.push(cat)
    setCat(" ")
    setCats(updatedCats)
  }

  const deleteCategory = (i) => {
    let updatedCats = [...cats]
    updatedCats.splice(i, 1)
    setCats(updatedCats)
  }

  return (
    <div>
      <Navbar />

      <div classNames=' flex justify-center' >

        <div className='p-4 border w-[70%] flex flex-col justify-center px-6 md:px-[200px] mt-8 '>

          <h1 className='font-hold flex justify-center md:text-2x1 text-xl '>Update Your Post </h1>
          <form classNames=' w-full flex flex-col space-y-4 md space-y-8 at-4'>

            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} 
                placeholder='Enter post title'
              className='px-4 py-2 outline-none' />
            <input type="file" className='px-4' onChange={(e) => setFile(e.target.files[0])} value={file} />

            <div className='flex flex-col'>
              <div className='flex items-center space-x-4 md:space-x-8'>

                <input type="text" value={cat} onChange={(e) => setCat(e.target.value)}
                  placeholder='Enter post category'
                  className='px-4 py-2 outline-none' />
                <div onClick={addCate} className='bg-black text-white px-4 py-3 font-semibold cursor-pointer'>
                  ADD
                </div>
                <div className='flex px-4 mt-3'>
                  {cats?.map((c, i) => (
                    <div key={i} className='flex justify-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md'>
                      <p>{c}</p>
                      <p onClick={() => deleteCategory(i)} className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'>
                        <ImCross size={12} />
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
            <textarea onChange={(e) => setDesc(e.target.value)} value={desc} rows={9} cols={30} className='px-4 py-2 outline-none' placeholder='Enter post description'>

            </textarea>
            <button onClick={handleUpdate} className='bg-black w-full md:w[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg'>
              Create
            </button>
          </form>
        </div>


      </div>



      <Footer />
    </div>
  )
}

export default EditPost