// Tạo database
// use 23521810-IE213 chỉ dùng trong shell
db = db.getSiblingDB("23521810-IE213");

print("=== 1. Insert dữ liệu ban đầu ===");
db.employees.insertMany([
  { id: 1, name: { first: "John", last: "Doe" }, age: 48 },
  { id: 2, name: { first: "Jane", last: "Doe" }, age: 16 },
  { id: 3, name: { first: "Alice", last: "A" }, age: 32 },
  { id: 4, name: { first: "Bob", last: "B" }, age: 64 },
]);

print("=== 2. Tạo unique index ===");
db.employees.createIndex({ id: 1 }, { unique: true });

print("=== 3. Tìm John Doe ===");
db.employees
  .find({
    "name.first": "John",
    "name.last": "Doe",
  })
  .forEach(printjson);

print("=== 4. Nhân viên 30 < age < 60 ===");
db.employees
  .find({
    age: { $gt: 30, $lt: 60 },
  })
  .forEach(printjson);

print("=== 5. Thêm nhân viên mới ===");
db.employees.insertMany([
  { id: 5, name: { first: "Rooney", middle: "K", last: "A" }, age: 30 },
  { id: 6, name: { first: "Ronaldo", middle: "T", last: "B" }, age: 60 },
]);

print("=== 6. Document có middle name ===");
db.employees
  .find({
    "name.middle": { $exists: true },
  })
  .forEach(printjson);

print("=== 7. Xóa middle name ===");
db.employees.updateMany(
  { "name.middle": { $exists: true } },
  { $unset: { "name.middle": "" } },
);

print("=== 8. Thêm organization = UIT ===");
db.employees.updateMany({}, { $set: { organization: "UIT" } });

print("=== 9. Update organization cho id 5,6 ===");
db.employees.updateMany(
  { id: { $in: [5, 6] } },
  { $set: { organization: "USSH" } },
);

print("=== 10. Aggregate thống kê theo organization ===");
db.employees
  .aggregate([
    {
      $match: {
        organization: { $in: ["UIT", "USSH"] },
      },
    },
    {
      $group: {
        _id: "$organization",
        totalAge: { $sum: "$age" },
        avgAge: { $avg: "$age" },
      },
    },
  ])
  .forEach(printjson);
