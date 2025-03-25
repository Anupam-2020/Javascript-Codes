import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [posts, setPosts] = useState([]);
  // let [loading, setLoading] = useState(true);
  let [currentPage, setCurrentPage] = useState(0);
  // let [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://dummyjson.com/products?limit=200');
      const data = await response.json();
      console.log(data);
      setPosts(data?.products);
    }
    fetchData();
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Posts</h1>
        <ul style={{listStyleType: "none", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
          {posts && posts?.slice(currentPage, currentPage+10).map(post => (
            <div style={{display: "flex", flexDirection: "column", margin: "10px", backgroundColor: "lightgray", padding: "10px", alignItems: "center"}}>
            <li key={post.id}>{post.title}</li>
            <img style={{height: "100px", width: "100px"}} src={`${post.images[0]}`} alt={post.title} />
            </div>
          ))}
        </ul>
      </header>
      <footer>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", top: "80vh", position: "absolute", left: "45%"}}>
          <button style={{display: currentPage < 1 ? "none" : "inline-block"}} onClick={() => setCurrentPage(currentPage = currentPage < 1 ? 0 : currentPage - 10)}>Previous</button>
          <h3>{currentPage + 1} - {currentPage + 10}</h3>
          <button style={{display: currentPage + 11 > posts.length ? "none" : "inline-block"}} onClick={() => setCurrentPage(currentPage = currentPage + 11 > posts.length ? currentPage : currentPage + 10)}>Next</button>
        </div>
      </footer>
    </div>
  );
}

export default App;