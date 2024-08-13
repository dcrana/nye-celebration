import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { FC } from 'react'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import Registration from './pages/registration/Registration'

const App: FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
