# Mục tiêu bài thực hành

- Hiểu được các kết nối giữa các phần Controller, Router, Data Access Object trong mã nguồn
- Thực hiện tạo một số tệp tin

# Công cụ & môi trường sử dụng

- MongoDB Atlas
- Node.js (npm)
- Visual Studio Code
- Nodemon
- Thunder Client (Extension)

# Cách chạy

1. Mở Terminal và cd vào thư mục backend
2. Chạy lệnh `npm run dev`
3. Dùng các công cụ kiểm thử API

# Kết quả

## Bài 1: Thiết lập định tuyến cho các thao tác với reviews trong ứng dụng minh họa

Định tuyến đường dẫn cho /review
![alt text](Images/Bai1.png)

## Bài 2 Thiết lập Controller cho reviews

### 2.1 Tạo tệp tin review.controller.js

![alt text](<Images/Cau 2.1.png>)

### 2.2 Import reviewDAO.js vào tệp vừa tạo

![alt text](<Images/Cau 2.2.png>)

### 2.3 Tạo phương thức apiPostReview

![alt text](<Images/Cau 2.3.png>)

### 2.4 Tạo phương thức apiUpdateReview

![alt text](<Images/Cau 2.4.png>)

### 2.5 Tạo phương thức apiDeleteReview

![alt text](<Images/Cau 2.5.png>)

## Bài 3 Thiết lập DAO cho review

### 3.1 Import và tạo một số biến

![alt text](<Images/Cau 3.1.png>)

### 3.2 Tạo phương thức InjectDB và thêm vào index.js

![alt text](<Images/Cau 3.2.1.png>)

![alt text](<Images/Cau 3.2.2.png>)

### 3.3 Thêm addReview

![alt text](<Images/Cau 3.3.png>)

### 3.4 Thêm updateReview

![alt text](<Images/Cau 3.4.png>)

### 3.5 Thêm deleteReview

![alt text](<Images/cau 3.5.png>)\

### 3.6 Kiểm thử API đã tạo

- addReview

![alt text](<Images/Cau 3.6.1.png>)

- updateReview

![alt text](<Images/Cau 3.6.2.png>)

- deletereview

![alt text](<Images/Cau 3.6.3.png>)

## Bài 4 Hoàn thành back-end cho ứng dụng minh họa

### 4.1 Thêm 2 định tuyến

![alt text](<Images/Cau 4.1.png>)

### 4.2 Thêm 2 phương thức trong controller

![alt text](<Images/Cau 4.2.png>)

### 4.3 Thêm 2 phương thức trong DAO

![alt text](<Images/Cau 4.3.png>)

### 4.4 Thử nghiệm API vừa tạo

-getRatings

![alt text](<Images/Cau 4.4.1.png>)

- getMoviesById

![alt text](<Images/Cau 4.4.2.png>)

# Giải thích ngắn gọn phần chính đã thực hiện

- Thiết lập controller , DAO, router cho Review
- Thêm 2 phương thức cho Movies
