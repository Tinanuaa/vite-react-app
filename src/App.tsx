import { useState, useRef, useEffect } from 'react';
import './App.css';
import 'itk-vtk-viewer';
import { Box, Typography, Grid, Divider,Stack  } from "@mui/material";
 
function App() {
  const liveViewerRef = useRef(null);
  // const image =  new URL(
  //   "https://data.kitware.com/api/v1/file/564a65d58d777f7522dbfb61/download/data.nrrd"
  // )  
    const data =  (new Uint16Array(1024 * 1024 )).map(() => Math.random() * 100);
 
  const image= { "imageType": {
     "dimension": 2,
     "componentType": "uint16",
     "pixelType":  "Scalar",
     "components": 1    },
    "name": "test-data",
    "origin": [0,0],
    "spacing": [2,2],
    "direction": [1,0,0,0,1,0,0,0,1],
    "size": [1024,1024],
    "data":data }

  useEffect(() => {
 
    console.log('itk', !!itkVtkViewer, itkVtkViewer);

    if(liveViewerRef && liveViewerRef.current)
    {
      itkVtkViewer.createViewer(liveViewerRef.current,
        {
          image: image,
          rotate: false,
          use2D: true,
        });
    }
  }, []);

  return (

    <Stack sx={{width:"100%"}}>
      {/* <Typography sx={{height:"10%"}}>Just a header</Typography> */}
      <Grid id="container"  ref={liveViewerRef}  ></Grid>
    </Stack>
    
  )
}

export default App
