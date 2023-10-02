import React, { useEffect, useState } from 'react'
import "./Home.css"
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { auth, db } from '../../firebase'

const Home = () => {
  const [postList, setPostList] = useState([])
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"))
      // console.log(data)
      // console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };
    getPosts()
  }, []);

  // 削除する関数
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id))
    // リロードを自動的に行う
    window.location.href = "/"
  }

  return (
    <div className='homePage'>
      {postList.map((post) => {
        console.log(post)
        return (
          <div className='postContents' key={post.id}>
            <div className='postHeader'>
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">{post.postsText}</div>
            <div className="nameAndDeleteButton">
              <h3>@{post.author.username}</h3>
              {/* 自分の投稿だけ削除できるようにする */}
              {post.author.id === auth.currentUser.uid && (
                <button onClick={() => handleDelete(post.id)}>削除</button>
              )}
              
            </div>
          </div>
        )
      })}
      </div>
  )
}

export default Home