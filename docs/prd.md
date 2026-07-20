# PRODUCT REQUIREMENT DOCUMENT (PRD)

## Website Company Profile & Katalog B2B – SUBLIMS (PT. Subur Berlimpah Sejahtera)

---

## 1. Navigasi Global (Header & Footer)

### Header (Navigation Bar)

* **Logo:** SUBLIMS (Sisi kiri, tautan ke Beranda).
* **Menu:** Beranda | Tentang Kami | Katalog Produk | Hubungi Kami.
* **Aksi Utama (Primary CTA):** Tombol **"Minta Penawaran Cepat"** (Desain kontras dengan *semi-bold text*, langsung membuka WhatsApp Sales).

### Footer

* **Kolom 1 (Profil Singkat):** PT. Subur Berlimpah Sejahtera – Distributor kemasan plastik industri, pallet, dan keranjang logistik standar global. Tautan ke LinkedIn perusahaan.
* **Kolom 2 (Navigasi Cepat):** Kategori Produk Utama (Pallet Plastik, Keranjang Industri).
* **Kolom 3 (Kontak & Legalitas):** Alamat Gudang Pusat (Sidoarjo, Jawa Timur), Email Procurement, Nomor Operasional, dan Copyright © 2026.

---

## 2. Struktur Konten & Arsitektur Halaman

### Halaman 1: Beranda (Home)

#### Section 1: Hero Section (Solusi Utama)

* **Headline:** Penyedia Pallet Standar Industri untuk Efisiensi Logistik.
* **Sub-headline:** Menjamin ketersediaan stok siap kirim untuk kebutuhan pergudangan, manufaktur, dan rantai pasok skala besar.
* **Tombol Aksi:**
* Utama: "Jelajahi Katalog" (Scroll ke area produk/halaman katalog).
* Sekunder: "Konsultasi Ketersediaan Stok" (Buka WhatsApp).


* **Visual Teaser:** Foto/video beresolusi tinggi yang memperlihatkan tumpukan pallet siap kirim di gudang fisik.

#### Section 2: Kategori Produk (Bento Grid Style)

* **Sistem Visual:** Pembagian kategori menggunakan sistem *grid* asimetris modern untuk menghindari kesan flat.
* **Elemen:** Kartu kategori **Pallet Plastik** (Ukuran lebih besar) dan **Keranjang/Crate Plastik**. Setiap kartu memiliki tombol mikro "Lihat Semua".

#### Section 3: Keunggulan Distributor (Data-Driven)

* **Stok Siap Salur:** Jaminan suplai volume besar tanpa inden lama.
* **Material Premium (PPBC / HDPE):** Durabilitas tinggi, tahan benturan, tahan cuaca ekstrem, dan ramah lingkungan.
* **Kapasitas Teruji:** Spesifikasi akurat untuk beban statis, dinamis, dan sistem *racking*.

#### Section 4: Validasi & Kredibilitas (Social Proof)

* **Komponen:** Baris logo klien korporat (Manufaktur, FMCG, Logistik) + Penghitung Statistik (e.g., 100.000+ Unit Terdistribusi, 500+ Klien Korporat).

#### Section 5: Banner CTA Akhir

* **Konten:** "Butuh Spesifikasi Khusus atau Pembelian Skala Besar? Hubungi Tim Sales Kami."
* **Tombol:** "Hubungi Sales via WhatsApp".

---

### Halaman 2: Tentang Kami (About Us)

#### Section 1: Profil Perusahaan

* **Teks Konten:** PT. Subur Berlimpah Sejahtera berdiri pada tahun 2025 dan berlokasi di Sidoarjo - Jawa Timur. Kami berkomitmen penuh pada keunggulan pelayanan dan penyediaan produk kemasan plastik berkualitas tinggi demi kepuasan maksimal pelanggan industri.

#### Section 2: Visi & Misi

* **Visi:** Menjadi distributor kemasan plastik terdepan di Indonesia yang inovatif, terpercaya, dan memberikan solusi terbaik bagi setiap kebutuhan distribusi dan logistik.
* **Misi:**
1. Menyediakan produk pallet berkualitas tinggi yang memenuhi standar industri.
2. Memberikan pelayanan yang unggul dan responsif demi kepuasan pelanggan.
3. Membangun kemitraan jangka panjang berbasis kepercayaan dan integritas.
4. Terus berinovasi dalam memberikan solusi kemasan yang efisien dan berkelanjutan.



#### Section 3: Galeri Operasional & Gudang

* **Elemen:** Dokumentasi foto asli kapasitas gudang penyimpanan di Sidoarjo untuk meyakinkan pembeli B2B bahwa perusahaan bukan *reseller* fiktif.

---

### Halaman 3: Hubungi Kami & RFQ (Contact Us)

#### Sistem Layout: Split Screen (2 Kolom)

* **Kolom Kiri (Detail Kontak):**
* Alamat lengkap fisik kantor & gudang (Sidoarjo, Jawa Timur).
* Hotline WA khusus *procurement* & email resmi.
* Jam operasional: Senin – Jumat (08.00 - 17.00 WIB).
* Peta Interaktif (Google Maps) dengan penanda lokasi langsung untuk kebutuhan *self-pickup*.


* **Kolom Kanan (Formulir Permintaan Penawaran Resmi / RFQ):**
* **Input Field:** Nama Anda, Nama Perusahaan, Email Kantor, No. WhatsApp, Dropdown Jenis Produk, Input Angka Jumlah Kebutuhan (Pcs), Kolom Catatan Tambahan.
* **Tombol Selesai:** "Kirim Permintaan Harga".



---

## 3. Spesifikasi Katalog: Komponen UI & Informasi

### A. Kartu Produk (Product Card Grid)

```
+------------------------------------------+
|  [ Tag: Ready Stock / Populer ]          |
|                                          |
|                FOTO PRODUK               |
|            (Sudut Perspektif)            |
|                                          |
+------------------------------------------+
|  SUBLIMS                                 |
|  FR1210-16SW                             |
|  Dimensi: 120 x 100 x 16 cm              |
|  Beban Statis: Max 6.000 kg              |
+------------------------------------------+
|         [ TOMBOL: CEK SPESIFIKASI ]      |
+------------------------------------------+

```

* **Atribut Data:** Brand (SUBLIMS), Kode Model (Contoh: FR1210-16SW), Dimensi Utama, dan Kapasitas Beban Maksimal.
* **Interaksi UI:** Ketika kursor diarahkan (*hover*), kartu akan terangkat halus dengan bayangan lembut, dan tombol aksi berubah warna menjadi lebih tegas.

---

### B. Modal Box Detail Produk (Pop-up Interaktif)

Sistem ini digunakan agar tim *purchasing* dari perusahaan klien dapat melihat spesifikasi teknis lengkap secara instan tanpa perlu memuat ulang halaman baru.

```
+-----------------------------------------------------------------------------+
|  Katalog > Pallet Plastik > FR1210-16SW                              [ X ]  |
+------------------------------------------+----------------------------------+
|                                          |  SUBLIMS                         |
|               AREA VISUAL                |  FR1210-16SW                     |
|                                          +----------------------------------+
|  +------------------------------------+  | SPESIFIKASI FISIK:               |
|  |                                    |  |                                  |
|  |            FOTO UTAMA              |  | * Ukuran   : 120 x 100 x 16 cm   |
|  |           (Tampak Atas)            |  | * Material : PPBC                |
|  |                                    |  | * Berat    : 18 kg               |
|  |                                    |  | * Warna    : Biru, Hijau, dll.   |
|  +------------------------------------+  |                                  |
|                                          | DAFTAR KAPASITAS BEBAN:          |
|  +--------+  +--------+                  | * Statis   : 6.000 kg            |
|  | Thumb1 |  | Thumb2 |                  | * Dinamis  : 2.000 kg            |
|  | (Atas) |  |(Bawah) |                  | * Racking  : 1.000 kg            |
|  +--------+  +--------+                  |                                  |
|                                          | OPERASIONAL AKSES:               |
|                                          | * Forklift    : 4 Arah           |
|                                          | * Hand Pallet : 2 Arah           |
+------------------------------------------+----------------------------------+
|                                          | [ CTA 1: Unduh Brosur PDF ]      |
|                                          | [ CTA 2: Minta Penawaran Harga ] |
+------------------------------------------+----------------------------------+

```

#### Tabel Parameter Spesifikasi Teknis:

| Kategori Parameter | Detail Spesifikasi |
| --- | --- |
| **Dimensi Fisik** | 120 x 100 x 16 cm |
| **Material Bahan** | PPBC (Polypropylene Block Copolymer) |
| **Berat Produk** | 18 kg |
| **Variasi Warna** | Biru, Hijau, Kuning, Merah, Abu-Abu |
| **Daya Tahan Beban** | **Statis:** 6.000 kg | **Dinamis:** 2.000 kg | **Racking:** 1.000 kg |
| **Akses Alat Logistik** | **Forklift:** 4 Arah | **Hand Pallet:** 2 Arah | **Stacker:** 2 Arah |

#### Integrasi Tombol Aksi (Action Button):

1. **Tombol Utama (Minta Penawaran Harga):** Mengarahkan ke WhatsApp dengan pesan otomatis: *"Halo Sales SUBLIMS, kami membutuhkan penawaran harga grosir untuk model FR1210-16SW."*
2. **Tombol Sekunder (Unduh Brosur PDF):** Mengunduh berkas *datasheet* resmi untuk kebutuhan rapat internal tim *procurement* klien.

---

## 4. Panduan Desain Visual (Anti-Flat & Korporat)

Untuk menciptakan kesan premium, tepercaya, dan berdimensi tinggi tanpa kehilangan karakter korporat yang kaku dan profesional, terapkan aturan UI berikut:

* **Efek Kedalaman (Depth & Layering):** Gunakan teknik *layered shadows* (bayangan halus bertingkat, bukan bayangan hitam pekat) pada setiap komponen kartu produk dan modal penawaran. Hal ini memberikan efek elemen yang mengambang secara elegan di atas latar belakang.
* **Aksen semi-transparan (Frosted Glass/Glassmorphism):** Gunakan latar belakang putih transparan dengan efek blur (*backdrop-filter: blur*) pada area navigasi atas (Header) dan kotak teks informasi di halaman Tentang Kami, meniru gaya desain profesional pada dokumen asli.
* **Mikro Interaksi Komponen:** Hindari transisi instan yang kaku. Setiap tombol dan kartu wajib menggunakan efek transisi halus (*smooth transition 0.3s*) ketika disentuh kursor, seperti pergeseran posisi warna gradasi atau elevasi kartu.
* **Tata Letak Modern:** Menggunakan struktur *Bento Grid* dengan sudut membulat (*border-radius* berkisar antara 12px hingga 16px) untuk memberikan kesan rapi, bersih, namun tetap kokoh.