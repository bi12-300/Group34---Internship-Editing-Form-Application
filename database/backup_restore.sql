-- Sao lưu cơ sở dữ liệu
mysqldump -u username -p database_name > backup.sql;

-- Phục hồi cơ sở dữ liệu từ file sao lưu
mysql -u username -p database_name < backup.sql;
