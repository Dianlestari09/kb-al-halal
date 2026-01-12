# Website Masjid Halal - Panduan Lengkap

Selamat datang di website Masjid Halal! Website ini adalah platform digital modern untuk profil masjid dan informasi desa.

## 📋 Daftar Isi
- [Fitur Utama](#fitur-utama)
- [Struktur File](#struktur-file)
- [Cara Menggunakan](#cara-menggunakan)
- [Kustomisasi](#kustomisasi)
- [Tips & Trik](#tips--trik)

## ✨ Fitur Utama

### 1. **Responsive Design**
- Website dapat diakses dari berbagai perangkat (desktop, tablet, mobile)
- Navigasi yang mudah dan intuitif
- Desain modern dengan tema warna hijau yang mewakili Islam

### 2. **Beranda (Hero Section)**
- Sambutan utama yang menarik
- Call-to-action button untuk mengajak pengunjung menjelajahi lebih lanjut

### 3. **Tentang Kami**
- Profil lengkap masjid
- Visi dan misi
- Daftar kegiatan dan program

### 4. **Jadwal Shalat**
- Tampilan jadwal shalat 5 waktu yang dinamis
- Desain kartu yang elegan dengan backdrop blur effect
- Mudah untuk diupdate sesuai musim

### 5. **Kegiatan Masjid**
- 6 kategori kegiatan utama dengan ikon
- Deskripsi detail untuk setiap kegiatan
- Hover effects yang interaktif

### 6. **Profil Desa**
- Informasi demografis
- Kondisi lingkungan
- Fasilitas pendidikan
- Profil ekonomi desa

### 7. **Statistik**
- Statistik penduduk
- Persentase muslim
- Jumlah program aktif
- Tampilan yang menarik dengan angka besar

### 8. **Galeri**
- Galeri foto kegiatan masjid
- Lightbox untuk melihat gambar lebih besar
- Overlay dengan deskripsi

### 9. **Kontak**
- Form kontak untuk komunikasi dengan masjid
- Informasi lengkap alamat, telepon, dan email
- Link ke media sosial
- Validasi form otomatis

### 10. **Footer**
- Navigasi cepat
- Link media sosial
- Informasi tambahan

## 📁 Struktur File

```
profil-masjid-halal/
├── index.html                 # File HTML utama
├── css/
│   └── styles.css            # Stylesheet lengkap
├── js/
│   └── script.js             # JavaScript untuk interaktivitas
├── assets/
│   ├── images/               # Folder untuk gambar
│   └── icons/                # Folder untuk ikon
└── README.md                 # File dokumentasi ini
```

## 🚀 Cara Menggunakan

### 1. **Setup Awal**
- Pastikan file sudah berada di folder `c:\xampp\htdocs\profil-masjid-halal`
- Buka browser dan akses: `http://localhost/profil-masjid-halal/`

### 2. **Menambahkan Gambar**
- Taruh gambar ke folder `assets/images/`
- Ganti nama file placeholder dengan nama gambar Anda di `index.html`
- Contoh: `<img src="assets/images/masjid-1.jpg" alt="Masjid Halal">`

### 3. **Mengupdate Jadwal Shalat**
- Edit file `js/script.js`
- Cari bagian `calculatePrayerTimes()` function
- Update waktu shalat sesuai dengan lokasi Anda
- Waktu dapat diubah berdasarkan bulan untuk akurasi maksimal

### 4. **Menambah Konten**
- Edit file `index.html` untuk menambah konten
- Gunakan struktur HTML yang sudah ada
- Pastikan class dan ID tetap konsisten

## 🎨 Kustomisasi

### Mengubah Warna
Edit `:root` di `css/styles.css`:

```css
:root {
    --primary-color: #2d5016;      /* Hijau tua - warna utama */
    --secondary-color: #7cb342;    /* Hijau muda - warna sekunder */
    --accent-color: #ffb300;       /* Kuning - warna aksen */
    --dark-color: #1a1a1a;         /* Hitam */
    --light-color: #f5f5f5;        /* Abu-abu muda */
}
```

### Mengubah Font
Tambahkan font custom di bagian `<head>` tag HTML:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

Kemudian ubah di CSS:
```css
body {
    font-family: 'Poppins', sans-serif;
}
```

### Mengubah Konten Teks
- Semua konten teks terletak di `index.html`
- Cari teks yang ingin diubah dan edit langsung
- Pastikan struktur HTML tetap utuh

## 📱 Responsive Breakpoints

Website ini dioptimalkan untuk:
- **Desktop**: 1200px dan lebih
- **Tablet**: 768px - 1200px
- **Mobile**: Kurang dari 768px
- **Small Mobile**: Kurang dari 480px

## 🔧 Fitur JavaScript

### 1. **Mobile Menu Toggle**
- Hamburger menu otomatis untuk layar kecil
- Buka/tutup dengan animasi smooth

### 2. **Prayer Time Calculator**
- Menampilkan jadwal shalat dinamis
- Dapat disesuaikan per bulan

### 3. **Contact Form Validation**
- Validasi email otomatis
- Notifikasi success/error
- Form reset setelah submit

### 4. **Smooth Scroll**
- Navigasi smooth ke section manapun
- Active link highlighting

### 5. **Gallery Lightbox**
- Klik gambar untuk melihat full size
- Close dengan ESC atau klik luar
- Smooth animations

### 6. **Intersection Observer**
- Animasi saat elemen masuk viewport
- Lazy loading ready untuk gambar

## 💡 Tips & Trik

### 1. **Optimasi Gambar**
- Gunakan format WebP untuk performa lebih baik
- Compress gambar sebelum upload
- Ukuran gambar: 800x600px atau lebih besar untuk best result

### 2. **SEO Optimization**
- Tambahkan meta description yang relevan
- Update title tag di head
- Gunakan alt text untuk semua gambar

### 3. **Performance**
- Minify CSS dan JS untuk production
- Gunakan CDN untuk external resources
- Enable gzip compression di server

### 4. **Security**
- Implement CSRF protection untuk form
- Sanitize input dari user
- Gunakan HTTPS untuk production

### 5. **Accessibility**
- Pastikan warna contrast cukup
- Tambahkan ARIA labels jika perlu
- Test dengan screen reader

## 📞 Kontak & Support

Untuk pembaruan konten:
1. Edit file HTML/CSS/JS sesuai kebutuhan
2. Test di browser sebelum publish
3. Backup file sebelum membuat perubahan besar

## 📝 Catatan Penting

### Sebelum Go Live:
1. ✅ Ganti semua placeholder dengan data asli
2. ✅ Update nomor telepon dan email
3. ✅ Ganti nama desa di berbagai tempat
4. ✅ Upload gambar berkualitas tinggi
5. ✅ Test responsivitas di berbagai device
6. ✅ Test semua link dan form
7. ✅ Setup Google Analytics (opsional)
8. ✅ Setup email backend untuk form submission

### File yang Perlu Diubah:
- **Nama Masjid**: Di navbar, hero section, footer
- **Nama Desa**: Di section profil desa
- **Alamat**: Di section kontak
- **Nomor Telepon**: Di section kontak
- **Email**: Di section kontak
- **Jam Operasional**: Di section kontak
- **Jadwal Shalat**: Di `js/script.js`

## 🎯 Langkah Selanjutnya

1. **Setup Contact Form Backend** (PHP/Node.js)
   - Buat file `process_contact.php` untuk handle form submission
   - Setup email notification

2. **Tambahkan Blog Section**
   - Untuk posting artikel tentang kegiatan masjid
   - Share informasi keagamaan

3. **Tambahkan Donasi Online**
   - Integrasi payment gateway
   - Tracking transparansi dana

4. **Tambahkan Jadwal Ceramah**
   - Daftar pengajian dan pemateri
   - Notifikasi untuk pengunjung

5. **Tambahkan Video**
   - Embed video ceramah
   - Dokumentasi kegiatan

## 📄 Lisensi
Website ini dibuat untuk kepentingan umum. Silakan gunakan dan modifikasi sesuai kebutuhan.

---

**Terakhir diupdate**: Desember 2025

Semoga website ini bermanfaat untuk kemajuan masjid dan komunitas desa! 🤲
=======
# kb-al-halal
>>>>>>> 20b111e2bfb5b4732a4e9711ac302a03f35f6905
