import UserCard from "./components/UserCard"
import Header from "./content/Header/Header"
import { useUsers } from "./hooks/useUsers"

interface userData {
  last_name: string
  first_name: string
  job_title: string
  coompany: string
}

const App = () => {
  const data = useUsers()
  data?.forEach((doc) => {
    console.log(doc.data() as userData)
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
