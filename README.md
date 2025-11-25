Project layout and verification

Summary
- Centralized product data and cart helpers in `assets/js/site.js`.
- Shared styles in `assets/css/style.css`.
- Pages updated to use central data and helpers: `Trangchu.html`, `TatcaSanpham.html`, `TheSanpham.html`, `Giohangf.html`, `ThanhToan.html`.

Quick manual verification
1. Open `Trangchu.html` in your browser.
   - Click "Thêm vào giỏ hàng" for any product.
   - Confirm cart icon count updates.
2. Open `TatcaSanpham.html` and add products to cart; then open `Giohangf.html`:
   - Verify item names are the new names (HG Aerial, HG Gaia's/Ortega's Rick Dom (GQ), RG Sazabi, HG Hashmal).
   - Change quantities, delete items; totals and shipping (50.000đ per item) should update.
3. From a product detail (`TheSanpham.html`) click "Mua ngay":
   - Confirm `ThanhToan.html` shows the checkout item and correct totals.
4. Test migration:
   - If you had previous cart items with old names, they should be migrated automatically on page load to the new names.

Notes
- If you want all page-scoped CSS moved to the shared stylesheet, I can refactor further.
- To reset test data: open DevTools → Application → Local Storage and remove `cartItems`, `cartCount`, `checkoutNow`.

If you want, I can now:
- Fully refactor remaining inline styles into `assets/css/style.css`.
- Add unit test pages or a tiny local dev server script to preview pages.
- Continue polishing UI and accessibility.
