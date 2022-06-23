import { Header } from "./components/Header"
import { Post } from "./Post"

import styles from './App.module.css';

import './global.css';
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Rodrigo Grzegorczyk"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, harum"
          />
          <Post
            author="Rafael Gregorio"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, harum"
          />
        </main>
      </div>
    </div>
  )
}

export default App

