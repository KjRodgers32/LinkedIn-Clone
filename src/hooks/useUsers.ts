import { useState, useEffect } from "react"
import {
  getDocs,
  collection,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore"
import { db } from "../firebase"

type userData = QuerySnapshot<DocumentData, DocumentData>

export const useUsers = () => {
  const [users, setUsers] = useState<userData | undefined>(undefined)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const query = await getDocs(collection(db, "users"))
        setUsers(query)
      } catch (err) {
        console.error(err)
      }
    }
    fetchUsers()
  }, [])

  return users
}
