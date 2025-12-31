import {download} from "./pdfMerge"
import {useDropzone} from 'react-dropzone';

import './App.css'

function App() {
  
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
        <button onClick={() => download(acceptedFiles)}>download</button>        </div>
      </div>

    </div>
  )
}

export default App
