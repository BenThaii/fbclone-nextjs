import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'
import { getSession, useSession } from 'next-auth/react'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from "../components/Widgets";
import { collection, orderBy, query, getDocs } from 'firebase/firestore'
import { db } from '../firebase_info'

export default function Home({ posts }) {
  const { data: session } = useSession()

  if (!session) return <Login />
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>   {/* Gives the tab name*/}
      </Head>

      <Header />

      <main className="flex">
        <Sidebar />
        <Feed posts={posts} />
        <Widgets /> 
      </main>


      <h1>signed in as {session.user.email} </h1>
    </div>
  )
}

export async function getServerSideProps(context) {
  // Get all posts on the server, prepare them all before sending back to the user

  const q = query(collection(db, "posts"), orderBy('timestamp', 'desc'));
  const querySnapshot = await getDocs(q);
  const docs = querySnapshot.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,    //cannot pass timestamp safely over the internet
  }));

  return {
    props: { posts: docs },
  };
}