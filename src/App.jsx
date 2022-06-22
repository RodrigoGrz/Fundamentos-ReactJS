import { Header } from "./components/Header"
import { Post } from "./Post"

function App() {
  return (
    <div>
      <Header />
      <Post
        author="Rodrigo Grzegorczyk"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, harum"
      />
      <Post
        author="Rafael Gregorio"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, harum"
      />
    </div>
  )
}

export default App

