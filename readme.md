# Tutorial Install Chrome Extension dari GitHub

Panduan ini menjelaskan cara menginstal ekstensi Chrome dari repository GitHub.

---

## **1. Clone atau Unduh Repository**
1. Buka repository di GitHub: [https://github.com/defrindr/auto-fill-survey](https://github.com/defrindr/auto-fill-survey).
2. Pilih tombol **Code** (biasanya berwarna hijau), lalu:
   - Klik **Download ZIP** untuk mengunduh seluruh project.
   - **Atau**, gunakan Git di terminal untuk meng-clone repository:
     ```bash
     git clone https://github.com/defrindr/auto-fill-survey.git
     ```
3. Jika Anda mengunduh dalam format ZIP, ekstrak file tersebut ke folder lokal di komputer Anda.

---

## **2. Buka Chrome Extension Manager**
1. Buka browser Chrome.
2. Akses halaman **Extensions Manager** dengan membuka URL berikut:
    `chrome://extensions/`
1. Aktifkan **Developer Mode** di kanan atas halaman.

---

## **3. Load Unpacked Extension**
1. Klik tombol **Load unpacked**.
2. Pilih folder yang berisi file ekstensi.  
   Folder ini adalah:
      - Lokasi hasil ekstraksi ZIP.
      - Atau folder hasil `git clone`
3. Chrome akan memuat ekstensi dan menampilkannya di daftar ekstensi.

---

## **4. Verifikasi Ekstensi Berfungsi**
1. Jika instalasi berhasil, ikon ekstensi akan muncul di sebelah kanan bilah alamat browser.
2. Klik ikon ekstensi untuk membuka popup dan memastikan UI atau fungsi ekstensi bekerja.
3. Buka halaman kuisioner dengan radio button untuk menguji fitur "auto-fill."

---

## **5. Troubleshooting**
Jika ekstensi tidak bekerja dengan baik:
- **Periksa Log Error:**
1. Kembali ke halaman **chrome://extensions/**.
2. Klik **Service Worker** atau **Inspect views** di bawah nama ekstensi Anda.
3. Buka tab **Console** dan periksa error yang muncul.
   - **Pastikan Semua File Ada**:
   - Pastikan file penting seperti `manifest.json`, `background.js`, `content.js`, dll., tidak hilang.
   - **Periksa Manifest JSON**:
   - File `manifest.json` harus menggunakan **Manifest V3** dan memiliki konfigurasi yang benar.

---

### **Referensi**
- [Google Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/)

Jika Anda memerlukan bantuan tambahan, silakan tanyakan! 😊
