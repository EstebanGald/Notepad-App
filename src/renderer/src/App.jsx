import { useState, useEffect } from "react"
import { Layout, NavBar, Content } from "./components/AppLayout"
import plusButton from './assets/add.png'

function App() {
  //const ipcHandle = () => window.electron.ipcRenderer.send('ping')
  const [noteArray, SetNoteArray] = useState([])
  
  const AddButton = (message) => {
    SetNoteArray([...noteArray, message])
  }
  
  return (
    <Layout>
      <NavBar>
        {noteArray.map((currentButton) => (
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            {currentButton}
          </button>
        ))}
      </NavBar>
      <Content>
        <button 
          type="button" 
          onClick={() => AddButton('nota')}
          >
          <svg  
            class='bg-transparent text-white hover:bg-white hover:text-yellow-300 fill-current h-16 w-16 rounded-full active:text-yellow-500 active:bg-slate-200 active:h-14 active:w-14'
            width="800" height="800" viewBox="0 0 24 24">          
            <path d="M13 9a1 1 0 1 0-2 0v2H9a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2V9ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"/>
          </svg>
        </button>
      </Content>
    </Layout>
  )
}

export default App