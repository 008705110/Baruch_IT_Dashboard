import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"
import List from "./pages/list/List"
import Login from "./pages/login/Login"
import Single from "./pages/single/Single"
import New from "./pages/new/New"
import useFetch from "./useFetch";


function App() {
  const {data, loading, error} = useFetch("http://localhost:5000/tickets/HELPDESK");
  const {data:DMG} = useFetch("http://localhost:5000/tickets/DMG");
  const {data:MEDIA} = useFetch("http://localhost:5000/tickets/MEDIA");
  if (loading) return <h1> loading </h1>
  if (error) console.log(error)



  return (
    <div className="App">
      {data} /
      {DMG} /
      {MEDIA} /
      <BrowserRouter>
      <Routes>
        <Route path ="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productid" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
