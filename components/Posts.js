import { db } from "../firebase_info";
import { collection, orderBy, onSnapshot, query } from "firebase/firestore";
import Post from "./Post";
import { useState, useEffect } from "react";

function Posts({ posts }) {
  const [realtimePosts, setRealtimePosts] = useState([])
  useEffect(() => {
    const unsubscribe = onSnapshot(query(collection(db, "posts"), orderBy('timestamp', 'desc')), (querySnapshot) =>{
      setRealtimePosts(querySnapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
    })
    return () => unsubscribe();   //detach listener
  }, [])

  return (
    <div>
      {realtimePosts 
        ? realtimePosts.map((post) => (
            <Post
              key={post.id}
              name={post.data.name}
              message={post.data.message}
              email={post.data.email}
              timestamp={post.data.timestamp}
              image={post.data.image}
              postImage={post.data.postImage}
            />
          ))
        : posts.map((post) => (
          <Post
            key={post.id}
            name={post.name}
            message={post.message}
            email={post.email}
            timestamp={post.timestamp}
            image={post.image}
            postImage={post.postImage}
          />
        ))
      }
    </div>
  );
}

export default Posts;
