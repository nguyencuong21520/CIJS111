import axios from "axios"
import { Button } from "antd"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import UserCard from "./components/UsersCard"


const App = () => {
  const API_KEY = "67fe6ce4c590d6933cc126d9"
  const BASE_URL = "https://mindx-mockup-server.vercel.app/api"

  const [users, setUsers] = useState([])
  const [taskStatus, setTaskStatus] = useState([])
  const [flags, setFlags] = useState([])
  const [tasks, setTasks] = useState([])

  //https://mindx-mockup-server.vercel.app/api/resources/users?apiKey=67fe6ce4c590d6933cc126d9
  const getUsersList = async () => {
    const response = await axios.get(`${BASE_URL}/resources/users?apiKey=${API_KEY}`)
    const users = response.data.data.data
    console.log("data", users)
    setUsers(users)
  }

  const getTaskStatus = async () => {
    const response = await axios.get(`${BASE_URL}/resources/taskStatus?apiKey=${API_KEY}`)
    const tasks = response.data.data.data
    console.log("tasks", tasks)
  }

  const getFlags = async () => {
    const response = await axios.get(`${BASE_URL}/resources/flags?apiKey=${API_KEY}`)
    const flags = response.data.data.data
    console.log("flags", flags)
  }

  const getTasks = async () => {
    const response = await axios.get(`${BASE_URL}/resources/tasks?apiKey=${API_KEY}`)
    const tasks = response.data.data.data
    console.log("tasks", tasks)
  }

  const addUser = async () => {
    const response = await axios.post(`${BASE_URL}/resources/users?apiKey=${API_KEY}`, {
      userId: uuidv4(),
      name: "Mash Mash",
    })
    console.log("response", response)
  }

  const dataID = "69dbb7bd3b8c78b2ff30f28f"
  const updateUser = async () => {
    const response = await axios.put(`${BASE_URL}/resources/users/${dataID}?apiKey=${API_KEY}`, {
      name: "Hello update update",
    })
    console.log("response", response)
  }

  return (
    <div>
      <h1>App</h1>
      <Button type="primary" onClick={getUsersList}>Get Users List</Button>
      <Button type="primary" onClick={getTaskStatus}>Get Task Status</Button>
      <Button type="primary" onClick={getFlags}>Get Flags</Button>
      <Button type="primary" onClick={getTasks}>Get Tasks</Button>

      <h1>Add zone</h1>
      <Button type="primary" onClick={addUser}>Add User</Button>

      <h1>Update zone</h1>
      <Button type="primary" onClick={updateUser}>Update User</Button>

      {/* render list data card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users && users.length > 0 && users.map((user) => (
          <UserCard key={user.userId} data={user} />
        ))}

      </div>
    </div>
  )
}

export default App