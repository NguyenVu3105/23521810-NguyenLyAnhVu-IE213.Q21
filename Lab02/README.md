# Mục tiêu bài thực hành

- Thiết lập môi trường
- Thực hành tạo các tệp tin server.js,index.js,api/movies.route.js

# Công cụ & môi trường sử dụng

- MongoDB Atlas
- Node.js (npm)
- mongosh (MongoDB Shell)
- Visual Studio Code
- Nodemon

# Cách chạy

1. Mở Terminal và cd vào thư mục backend
2. Chạy lệnh `npm run dev`

# Kết quả

## Bài 1: Thiết lập môi trường

### 1.1. Tải và cài đặt node.js

Đã cài đặt node phiên bản 25.5.0
![alt text](Images/Cau1.1.png)

### 1.2 Tải và cài đặt một trong các công cụ soạn thảo

Đã tải và sử dụng Visual Studio Code

![1.2](Images/Cau1.2.png)

### 1.3 Khởi tạo cây thư mục chứa mã nguồn cho dự án

![alt text](Images/Cau1.3.png)

### 1.4 Khởi tạo dự án với câu lệnh `npm init`

![alt text](Images/Cau1.4.png)

### 1.5 Cài đặt một số dependency cần thiết

![alt text](Images/Cau1.5.png)

### 1.6 Cài đặt nodemon

![alt text](Images/Cau1.6.png)

## Bài 2

### 2.1 Tạo tệp tin server.js là nơi khảo tạo máy chủ web

![alt text](Images/Cau2.1.png)

### 2.2 Tạo tệp tin .env để lưu trữ thông tin biến môi trường

![alt text](Images/Cau2.2.png)

### 2.3 Tạo tệp tin index.js

![alt text](Images/Cau2.3.png)

### 2.4 Tạo thư mục api và thêm tệp movies.route.js

![alt text](Images/Cau2.4.png)

### 2.5 Tạo thư mục dao và tệp tin moviesDAO.js sau đo thêm vào index.js

Tạo moviesDAO.js

![alt text](Images/Cau2.5-1.png)

Thêm vào index.js

![alt text](Images/Cau2.5-2.png)

### 2.6 Thiết lập moviesController

![alt text](Images/Cau2.6.png)

### 2.7 Thêm controller vào route và thử api

Thêm vào route

![alt text](Images/Cau2.7-1.png)
Kiểm thử api

![alt text](Images/Cau2.7-2.png)

# Giải thích ngắn gọn phần chính đã thực hiện

- Cài đặt nodemon,tạo thư mục backend và cài đặt các dependency cần thiết.
- Viết server.js, index.js các file dao, api, các biến môi trườg trong .env
