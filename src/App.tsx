import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FC } from "react";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Registration from "./pages/registration/Registration";
import RegisteredUserList from "./pages/registration/userlist/RegisteredUserList";

const App: FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/registrants" element={<RegisteredUserList />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
