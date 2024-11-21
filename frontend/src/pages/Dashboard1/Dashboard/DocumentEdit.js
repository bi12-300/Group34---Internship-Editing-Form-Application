import React, { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'; 
import Mammoth from 'mammoth';
import { saveAs } from 'file-saver';
import JSZip from "jszip";
import Docxtemplater from "docxtemplater";

function App() {
  const [editorContent, setEditorContent] = useState('');
  const [docTemplate, setDocTemplate] = useState(null); 

  // Hàm tải mẫu DOCX và chuyển đổi thành HTML
  const loadTemplate = (file) => {
    const reader = new FileReader();

    reader.onload = () => {
      // Chuyển DOCX thành HTML với Mammoth
      Mammoth.convertToHtml({ arrayBuffer: reader.result })
        .then((result) => {
          // Lưu HTML để chỉnh sửa
          setEditorContent(result.value);
        })
        .catch((err) => {
          console.error('Error converting DOCX to HTML:', err);
        });
    };

    reader.readAsArrayBuffer(file);
  };

  // Hàm xuất DOCX sau khi người dùng chỉnh sửa
  const generateDocx = () => {
    if (!editorContent) return;

    // Sử dụng Docxtemplater để tạo file DOCX mới từ template
    const zip = new JSZip();
    const doc = new Docxtemplater();
    
    // Tải template DOCX vào Docxtemplater
    zip.loadAsync(docTemplate).then((loadedZip) => {
      doc.loadZip(loadedZip);

      // Thay thế dữ liệu động vào template
      doc.setData({ content: editorContent });

      try {
        // Thực hiện thay thế placeholder
        doc.render();
        
        // Tạo file DOCX và tải về
        const buf = doc.getZip().generate({ type: "nodebuffer" });
        saveAs(new Blob([buf], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" }), "generated.docx");
      } catch (error) {
        console.log(error);
      }
    });
  };

  return (
    <div className="App">
      <h1>Chỉnh sửa văn bản và xuất DOCX</h1>

      {/* Tải lên mẫu DOCX */}
      <input type="file" onChange={(e) => loadTemplate(e.target.files[0])} />

      {/* Trình soạn thảo văn bản React Quill để chỉnh sửa */}
      <ReactQuill
        value={editorContent}
        onChange={setEditorContent}
        theme="snow"
      />

      {/* Nút xuất DOCX */}
      <button onClick={generateDocx}>Xuất DOCX</button>
    </div>
  );
}

export default App;
