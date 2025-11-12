import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useDropzone} from 'react-dropzone';

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps

  } = useDropzone({
    accept:{
      'file/pdf': ['.pdf']
    }
  });



  return (
    <div class = "middlegorund">
      <div class="foreground">
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()}/>
          <h1 class="dropText">drop or click</h1>


            
        </div>
      </div>
      <h1>Merge File:</h1>
      <button class="merge">merge</button>
    </div>
  )
}

export default App
