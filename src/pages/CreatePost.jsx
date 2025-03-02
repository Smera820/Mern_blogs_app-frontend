// import React, { useState, useContext } from 'react'
// import Footer from '../components/Footer'
// import { ImCross } from 'react-icons/im'
// import axios from 'axios'
// import UserContext from '../context/userContext'
// import { useNavigate } from 'react-router-dom'
// import Navbar from '../components/Navbar'


// function CreatePost() {
//   const [title, setTitle] = useState(" ")
//   const [desc, setDesc] = useState(" ")
//   const [file, setFile] = useState(null)
//   const [cate, setCate] = useState("a")
//   const [cats, setCates] = useState([])
//   const { user } = useContext(UserContext)
//   const navigate = useNavigate()

//   const addCate = () => {
//     let updatedCats = [...cats]
//     updatedCats.push(cate)
//     setCate(" ")
//     setCates(updatedCats)
//   }

//   const deleteCategory = (i) => {
//     let updatedCats = [...cats]
//     updatedCats.splice(i, 1)
//     setCates(updatedCats)
//   }

//   const handleCreate = async (e) => {
//     e.preventDefault()
//     if (!user) {
//       console.log("User is not logged in");
//       navigate("/login")
//       return

//     }
//     const post = {
//       title,
//       desc,
//       username: user.username,
//       userId: user.userId,
//       categories: cats
//     }

//     if (file) {
//       const data = new FormData()
//       const fileName = Date.now() + file.name
//       data.append("img", fileName)
//       data.append("file", file)
//       post.photo = fileName

//       try {
//         const imgUpload = await axios.post("/api/upload", data)
//       }
//       catch (err) {
//         console.log(err);

//       }
//     }
//     try {
//       const res = await axios.post("/api/posts/post/create", post, { withCredentials: true })
//       navigate("/posts/post/" + res.data._id)
//     }
//     catch (err) {
//       console.log(err);

//     }

//   }
//   return (
//     <div>
//       <Navbar />
//       <div className='flex justify-center'>
//         <div className='px-6 m-4 border flex flex-col w-[70%] shadow-xl md:px-[200px] mt-8'>
//           <h1 className='font-bold md:text-2xl text-2xl mt-3 flex justify-center'>
//             Create a Post
//           </h1>
//           <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
//             <input onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Enter post title'
//               className='px-4 py-2 outline-none'></input>
//             <input onChange={(e) => setFile(e.target.files[0])} type='file' className='px-4'></input>
//             <div className='flex flex-col'>

//             <label htmlFor="file-upload" className='px-4'>
//     Upload Image:
// </label>
// <input id="file-upload" onChange={(e) => setFile(e.target.files[0])} type='file' className='px-4' />

//               <div className='flex items-center space-x-4 md:space-x-8'>
//                 <select name="categories" id=" categories" value={cate} onChange={(e) => setCate(e.target.value)}>
//                   <option value="Big Data">
//                     Big Data
//                   </option>
//                   <option value="Artificial Intelligence">
//                     Artificial Intelligence
//                   </option>
//                   <option value="Block Chain">
//                     Block Chain
//                   </option>
//                   <option value="Web development">
//                     Web development
//                   </option>
//                   <option value="Cloud Computing">
//                     Cloud Computing
//                   </option>
//                   <option value="Database">
//                     Database
//                   </option>
//                   <option value="Business Management">
//                     Business Management
//                   </option>
//                 </select>

//                 <div onClick={addCate} className='bg-black text-white px-4 py-3 font-semibold cursor-pointer'>
//                   ADD
//                 </div>

//               </div>
//               <div className='flex px-4 mt-3'>
//                 {
//                   cats?.map((c, i) => (
//                     <div key={i} className='flex justify-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md'>
//                       <p> {c} </p>
//                       <p onClick={() => deleteCategory(i)} className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'></p>
//                     </div>
//                   ))
//                 }

//               </div>

//               <textarea onChange={(e) => setDesc(e.target.value)} rows={9} cols={30} className='px-4 py-2 outline-none' placeholder='Enter post description'>

//               </textarea>
//               <button onClick={handleCreate} className='bg-black w-full md:w[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg'>
//                 Create
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default CreatePost










import React, { useState, useContext } from 'react';
import Footer from '../components/Footer';
import { ImCross } from 'react-icons/im';
import axios from 'axios';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function CreatePost() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const [cate, setCate] = useState("Big Data");
    const [cats, setCates] = useState([]);
    const { user } = useContext(UserContext); // Destructure user from context
    const navigate = useNavigate();

    // Debugging: Log the user object
    console.log("User:", user);

    const addCate = () => {
        if (cate && !cats.includes(cate)) {
            setCates([...cats, cate]);
            setCate("Big Data");
        }
    };

    const deleteCategory = (i) => {
        let updatedCats = [...cats];
        updatedCats.splice(i, 1);
        setCates(updatedCats);
    };

    const handleCreate = async (e) => {
        e.preventDefault();


        const post = {
            title,
            desc,
            username: user.username, // Access username only if user is not null
            userId: user.userId, // Access userId only if user is not null
            categories: cats,
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
            const res = await axios.post("/api/posts/post/create", post, { withCredentials: true });
            navigate("/posts/post/" + res.data._id);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <Navbar />
            <div className='flex justify-center'>
                <div className='px-6 m-4 border flex flex-col w-[70%] shadow-xl md:px-[200px] mt-8'>
                    <h1 className='font-bold md:text-2xl text-2xl mt-3 flex justify-center'>
                        Create a Post
                    </h1>
                    <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
                        <input onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Enter post title'
                            className='px-4 py-2 outline-none' />
                        <label htmlFor="file-upload" className='px-4'>
                            Upload Image:
                        </label>
                        <input id="file-upload" onChange={(e) => setFile(e.target.files[0])} type='file' className='px-4' />
                        <div className='flex flex-col'>
                            <div className='flex items-center space-x-4 md:space-x-8'>
                                <select name="categories" id="categories" value={cate} onChange={(e) => setCate(e.target.value)}>
                                    <option value="Big Data">Big Data</option>
                                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                                    <option value="Block Chain">Block Chain</option>
                                    <option value="Web development">Web development</option>
                                    <option value="Cloud Computing">Cloud Computing</option>
                                    <option value="Database">Database</option>
                                    <option value="Business Management">Business Management</option>
                                </select>
                                <div onClick={addCate} className='bg-black text-white px-4 py-3 font-semibold cursor-pointer'>
                                    ADD
                                </div>
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
                            <textarea onChange={(e) => setDesc(e.target.value)} rows={9} cols={30} className='px-4 py-2 outline-none' placeholder='Enter post description' />
                            <button onClick={handleCreate} className='bg-black w-full md:w[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg'>
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CreatePost;