

export const fetchInformation = () => {
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          student: {
            name: 'Nguyễn Văn A',
            internshipTopic: 'Phát triển ứng dụng web',
            university: 'Trường Đại học ABC',
            email: 'nguyen.vana@abc.com',
          },
          internalSupervisor: {
            name: 'Nguyễn Thị B',
            department: 'Khoa CNTT, Trường Đại học ABC',
            email: 'nguyen.thib@abc.edu.vn',
            phone: '0901234567',
          },
          externalSupervisor: {
            name: 'Lê Văn C',
            company: 'Công ty XYZ',
            email: 'le.vanc@xyz.com',
            position: 'Trưởng phòng phát triển phần mềm',
          },
          company: {
            name: 'Công ty XYZ',
            address: '123 Đường ABC, Quận 1, TP.HCM',
            email: 'contact@xyz.com',
            phone: '028-12345678',
          },
        });
      }, 1000); 
    });
  };
  