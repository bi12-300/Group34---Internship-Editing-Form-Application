-- Di chuyển dữ liệu từ phiên bản cũ sang phiên bản mới
INSERT INTO new_table (column1, column2)
SELECT column1, column2 FROM old_table;
