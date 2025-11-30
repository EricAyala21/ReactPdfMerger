import { useState } from 'react'

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
    <div class = "background">



        <div class="foreground">
          <div {...getRootProps({className: 'dropzone'})}>
            <input {...getInputProps()}/>
          </div>

        <div class="mergeSec">

        </div>
      </div>

    </div>
  )
}

export default App
