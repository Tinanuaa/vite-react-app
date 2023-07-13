import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'itk-vtk-viewer';
import { mat4 } from 'gl-matrix';
function App() {
  const [count, setCount] = useState(0)

  const container = document.querySelector('#container')
  const uiMachineOptions = { href: "https://cdn.jsdelivr.net/npm/itk-viewer-reference-ui-template@0.1.2/dist/referenceUIMachineOptions.js.es.js" }
  const image = new URL(
    "https://data.kitware.com/api/v1/file/564a65d58d777f7522dbfb61/download/data.nrrd",
    window.location.origin
  ) //"https://data.kitware.com/api/v1/file/564a65d58d777f7522dbfb61/download/data.nrrd"
  itkVtkViewer.createViewer(container,
  {
    image:image,
    rotate: false,
    config: { uiMachineOptions },
  });

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div id="container"></div>
    </>
  )
}

export default App
