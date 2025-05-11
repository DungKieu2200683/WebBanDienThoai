# học các câu lệnh git


# 1.cấu hình git ban đầu
# git config --global user.name "Tên của bạn"
# git config --global user.email "email@gmail.com"


# 2. Clone một dự án từ GitHub
# git clone https://github.com/DungKieu2200683/WebBanDienThoai.git


# 3. Khởi tạo Git trong thư mục (khi bắt đầu dự án mới)
# git init


# 4. Kiểm tra trạng thái thay đổi
# git status


# 5. Thêm file vào staging để chuẩn bị commit
# git add tenfile.txt         # Thêm 1 file
# git add .                   # Thêm tất cả file thay đổi


# 6. Tạo commit
# git commit -m "Tin nhắn mô tả thay đổi"


# 7. Kết nối repo local với GitHub
# git remote add origin https://github.com/DungKieu2200683/WebBanDienThoai.git


# 8. Push code lên GitHub
# git push -u origin main


# 9. Kéo (pull) code mới từ GitHub về
# git pull origin main


# 10. Làm việc với branch (nhánh)
# - Tạo nhánh mới:
# git checkout -b tinh-nang-moi

# - Chuyển nhánh:
# git checkout main

# - Xem tất cả nhánh:
# git branch


# 11. Gộp nhánh (merge)
# git checkout main
# git merge tinh-nang-moi


# 12. Xóa nhánh
# git branch -d tinh-nang-moi       # xóa local
# git push origin --delete tinh-nang-moi  # xóa trên GitHub


# 13. Gỡ file khỏi git nhưng giữ lại trên máy
# git rm --cached tenfile.txt


# 14. Force push (ghi đè GitHub) — chỉ dùng khi cần!
# git push --force


