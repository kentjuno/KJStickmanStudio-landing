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

## TODO của owner (media, chưa làm được ở đây)
- **og-cover.png** 1200×630 — thêm vào `landing/` (thẻ og:image đã trỏ sẵn).
- **Video demo** (hero — placeholder "🎬 Video demo — sắp có"; quay xong nhúng YouTube embed hoặc `<video>`).
- **voices/sample.wav** — file nghe thử giọng đọc (thẻ `<audio>` đã trỏ sẵn).

Đã wire sẵn: bot `https://t.me/stickmanstudiobot`, nhóm FB `1759571291694090`, CNAME `stickman.kentjuno.com`.

## Anti-slop đã tuân
1 accent (amber) toàn trang, dark theme khoá, 0 em-dash, hero gọn trong viewport, bento có nhịp (không 3 card đều), motion nhẹ + tôn trọng `prefers-reduced-motion`, callout yêu cầu Flow/Chrome nổi bật để tránh refund.
