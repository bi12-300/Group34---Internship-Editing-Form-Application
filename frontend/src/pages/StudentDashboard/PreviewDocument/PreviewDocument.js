import React from 'react';
import { useParams } from 'react-router-dom';

function PreviewDocument() {
  const { documentId } = useParams();  

  return (
    <div>
      <h2>Xem trước tài liệu: {documentId}</h2>
      
      <div>
        {documentId === 'document1' && (
          <div>
            <h3>Giấy tờ 1 - PDF Viewer</h3>
            <embed src="/path/to/document1.pdf" width="100%" height="600px" />
          </div>
        )}
        {documentId === 'document2' && (
          <div>
            <h3>Giấy tờ 2 - PDF Viewer</h3>
            <embed src="/path/to/document2.pdf" width="100%" height="600px" />
          </div>
        )}
       
      </div>
    </div>
  );
}

export default PreviewDocument;
