import { Button } from "@chakra-ui/react"
import { Navigate ,Routes, Route} from "react-router-dom"
import HomePage from "./pages/Home/HomePage"
import AuthPage from "./pages/Auth/AuthPage"
import PageLayout from "./Layout/Page Layout/PageLayout"
import ProfilePage from "./pages/Profile/ProfilePage"
import useAuthStore from "./store/authStore"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./firebase/firebase"




function App() {

  const [authUser] = useAuthState(auth)
  // const authUser = useAuthStore(state=> state.user);
  return (
    <>
    <PageLayout>
      <Routes>
        <Route path='/' element={authUser ? <HomePage/> : <Navigate to='/auth'/>}/>
        <Route path='/auth' element={!authUser ? <AuthPage/> : <Navigate to='/'/>}/>
        <Route path="/:username" element={<ProfilePage/>}/>
      </Routes>
      </PageLayout>
    </>
  )
}

export default App
