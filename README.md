# KJ Stickman Studio — Landing

Static landing page (1 file, không cần build) để mở bán. Self-contained `index.html`
+ `icon.png`/`logo.png`. Dark theme + accent amber, copy tiếng Việt.

## Xem thử
Mở `index.html` bằng trình duyệt (chạy offline, trừ Google Fonts cần mạng).

## Deploy lên GitHub Pages (cũng là repo serve Releases cho auto-update)
1. Tạo repo `KJStickmanStudio-landing`, đẩy thư mục này lên (hoặc copy `index.html` + ảnh).
2. Settings → Pages → Source: `main` / root → Save. Vài phút sau có URL `https://kentjuno.github.io/KJStickmanStudio-landing/`.
3. (Tuỳ chọn) gắn custom domain.
4. **GitHub Releases của chính repo này = link tải app + feed auto-update (P4)**. Upload bản cài `.exe` vào Releases.

## TODO trước khi mở bán (9 chỗ — search "TODO" trong index.html)
- **Link Telegram bot bán hàng** (`https://t.me/YOUR_SALES_BOT`) — 5 chỗ (nav, hero, buy, pricing, footer).
- **Giá thật** (đang để `499K / tháng` mẫu).
- **Video demo** (hero — nhúng YouTube embed hoặc thẻ `<video>`).
- **Link GitHub Releases** (nút Tải — đổi `kentjuno/KJStickmanStudio-landing`).
- **Chính sách hoàn tiền** (FAQ).

## Anti-slop đã tuân
1 accent (amber) toàn trang, dark theme khoá, 0 em-dash, hero gọn trong viewport, bento có nhịp (không 3 card đều), motion nhẹ + tôn trọng `prefers-reduced-motion`, callout yêu cầu Flow/Chrome nổi bật để tránh refund.
