import React, {useState, useEffect} from 'react'
import pdf from '../brochure.pdf'
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Brochure = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [timeUp, setTimeUp] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
      console.log("nextpage", pageNumber)
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const afterSometime = (fire, time = 600000) => {
    setTimeout(() => {
      fire();
    }, time);
  }

  useEffect(()=>{
    afterSometime(()=>{
      setTimeUp(true)
    })
  })


  return (
    <div className='container'>

      {timeUp == false ? 
        <>
          <div className="controls">
            <button className=' bg-secondary-300 mr-3 p-2 text-white font-bold' onClick={prevPage} disabled={pageNumber === 1}>
              Prev
            </button>
            <button className=' bg-secondary-300 mr-3 p-2 text-white font-bold' onClick={nextPage} disabled={pageNumber === numPages}>
              Next
            </button>
          </div>
          <p className='ml-4'>PDF will be removed after 10 minutes.</p>

          <Document 
            file={pdf} 
            onLoadSuccess={onDocumentLoadSuccess}
            onContextMenu={(e) => e.preventDefault()} 
            className="pdf-container"
          >  
            <Page pageNumber={pageNumber} />
          </Document>
        </>
      : 
      <>
      <p className='text-secondary-300 text-4xl font-bold text-center mt-5'>Time is up...</p>
      </>}
    </div>
  )
}

export default Brochure