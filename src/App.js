// import { useEffect, useState } from "react";
// import Form from "./Form";
// // import List from "./List";
// import Table from "./Table";


// function App() {
//   const API_URL = 'https://jsonplaceholder.typicode.com';
//   const [reqType, setReqType] = useState('users')
//   const [items, setItems] = useState([])

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await fetch(`${API_URL}/${reqType}`)
//         const data = await response.json();
//         setItems(data)
//       } catch (err) {
//         console.log(err);
//       }
//     }
//     fetchItems();
//   }, [reqType])

//   return (
//     <div className="App">
//       <Form className="form" reqType={reqType} setReqType={setReqType}/>
//       {/* <List items={items} /> */}
//       <Table items={items}/>

//     </div>
//   );
// }


import { Link, Routes, Route } from 'react-router-dom';
import About from "./About";
// import Footer from "./Footer";
// import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
// import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
// import Post from './Post';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/newpost">NewPost</Link></li>
          <li><Link to="/postpage">PostPage</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/postpage" element={<PostPage />} />
        <Route path="/postpage/:id" element={<post />} />
        <Route path="/postpage/newpost" element={<NewPost />} />
        <Route path="*" element={<Missing />} />
      </Routes>

      {/* <Header />
      <Nav />
      <Home />
      <About />
      <PostPage />
      <Missing />
      <NewPost />
      <post />
      <Footer /> */}
    </div>
  );
}

export default App;

