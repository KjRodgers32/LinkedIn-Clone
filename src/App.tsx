//import UserCard from "./components/UserCard"
import Header from "./content/Header/Header"
//import { useUsers } from "./hooks/useUsers"
import { useFetchPosts } from "./hooks/useFetchPosts"

// interface userData {
//   last_name: string
//   first_name: string
//   job_title: string
//   coompany: string
// }

interface Posts {
  created_at: Date
  userId: string
  message: string
}

const App = () => {
  // const data = useUsers()
  // data?.forEach((doc) => {
  //   console.log(doc.data() as userData)
  // })
  const posts = useFetchPosts()
  posts?.forEach((doc) => {
    console.log(doc.data() as Posts)
  })
  return (
    <div>
      <Header />
      {/* <UserCard /> */}
      {/* App Body */}
      {/* Side-Bar */}
      {/* Feed */}
      {/* Widgets */}
      {/* Footer */}
    </div>
  )
}

export default App
