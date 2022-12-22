import { Route, Routes } from "react-router-dom";
import "./App.css";
import Chat from "./components/chat/Chat";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Sidebar from "./components/sidebar/Sidebar";
import { useStateValue } from "./StateProvider";

function App() {
  const [{user}, dispatch] = useStateValue()
  console.log(user)

  return (
    // BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app_body">
            <Sidebar />
            <Routes>
              <Route path="/room/:roomId" element={<Chat />} />
              <Route path="/" element={<Login />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
