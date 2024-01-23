import React from 'react'
import AddUser from './assets/Components/AddUser'
import Batch from './assets/Components/Batch'
import Class from './assets/Components/Class'
import Dashboard from './assets/Components/DashBoard'
import EditUser from './assets/Components/EditUser'
import Query from './assets/Components/Query'
import SideBar from './assets/Components/SideBar'
import User from './assets/Components/User'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'




function App() {
  return <div id="wrapper">
<BrowserRouter>
<SideBar/>

<Routes>
  <Route path='/dashboard' element={<Dashboard/>}></Route>
  <Route path='/adduser' element={<AddUser/>}></Route>
  <Route path='/edituser/:id' element={<EditUser/>}></Route>
      <Route path='/batch' element={<Batch/>}>
           <Route path='user' element={<User/>}></Route>
           <Route path='class' element={<Class/>}></Route>
           <Route path='query' element={<Query/>}></Route>
      </Route>
  <Route path='*' element={<Navigate to='/dashboard'/>}></Route>

</Routes>
</BrowserRouter>

  </div>
}

export default App