import { useState, useEffect } from "react"
import {
  getDocs,
  collection,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore"
import { db } from "../firebase"

type usePosts = QuerySnapshot<DocumentData, DocumentData>

export const useFetchPosts = () => {
  const [posts, setPosts] = useState<usePosts | undefined>(undefined)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = await getDocs(collection(db, "posts"))
        setPosts(query)
      } catch (err) {
        console.error(err)
      }
    }
    fetchPosts()
  }, [])

  return posts
}
