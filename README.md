# 🛒 Express E-Commerce Application

Modern ve ölçeklenebilir bir e-ticaret platformu. Express.js ve Pug template engine kullanılarak geliştirilmiştir.

## 📋 İçindekiler

- [Özellikler](#-özellikler)
- [Teknolojiler](#-teknolojiler)
- [Proje Yapısı](#-proje-yapısı)
- [Kurulum](#-kurulum)
- [Kullanım](#-kullanım)
- [Ekran Görüntüleri](#-ekran-görüntüleri)
- [API Endpoints](#-api-endpoints)
- [Katkıda Bulunma](#-katkıda-bulunma)
- [Lisans](#-lisans)

## ✨ Özellikler

### 🛍️ Müşteri Özellikleri
- Ürün listeleme ve detay sayfaları
- Sepet yönetimi
- Sipariş oluşturma
- Ödeme sayfası
- Responsive tasarım

### 👨‍💼 Admin Özellikleri
- Ürün ekleme/düzenleme/silme
- Ürün listesi yönetimi
- Dashboard görünümü

### 🎨 Genel Özellikler
- Modern ve kullanıcı dostu arayüz
- FontAwesome 7.1.0 ikon entegrasyonu
- Modüler ve yeniden kullanılabilir component yapısı
- MVC mimarisi
- Hata yönetimi (404 sayfası)

## 🚀 Teknolojiler

- **Backend:** Node.js, Express.js
- **Template Engine:** Pug
- **Styling:** CSS3
- **Icons:** FontAwesome 7.1.0
- **Architecture:** MVC (Model-View-Controller)

## 📁 Proje Yapısı
```
EXPRESS-APP/
├── controllers/           # Controller dosyaları
│   ├── admin.js          # Admin controller
│   ├── errors.js         # Hata yönetimi
│   └── shop.js           # Shop controller
├── models/               # Veri modelleri
│   └── product.js        # Ürün modeli
├── routes/               # Route tanımlamaları
│   ├── admin.js          # Admin route'ları
│   └── shop.js           # Shop route'ları
├── views/                # Pug template dosyaları
│   ├── admin/            # Admin sayfaları
│   │   ├── add-product.pug
│   │   ├── edit-product.pug
│   │   └── products.pug
│   ├── shop/             # Shop sayfaları
│   │   ├── index.pug
│   │   ├── products.pug
│   │   ├── cart.pug
│   │   ├── checkout.pug
│   │   └── orders.pug
│   ├── error/            # Hata sayfaları
│   │   └── 404.pug
│   ├── includes/         # Yeniden kullanılabilir parçalar
│   │   ├── head.pug
│   │   ├── navbar.pug
│   │   ├── menu.pug
│   │   └── slider.pug
│   ├── layouts/          # Layout şablonları
│   │   └── main-layout.pug
│   └── mixins/           # Pug mixins
│       └── createProduct.pug
├── public/               # Statik dosyalar
│   ├── css/             # CSS dosyaları
│   │   ├── style.css
│   │   └── forms.css
│   └── img/             # Resim dosyaları
│       ├── 1.jpg - 5.jpg       # Ürün resimleri
│       └── slider1-3.jpg       # Slider resimleri
├── fontawesome-free-7.1.0-web/  # FontAwesome kütüphanesi
├── app.js               # Ana uygulama dosyası
├── package.json         # Proje bağımlılıkları
└── README.md           # Proje dokümantasyonu
```

## 🔧 Kurulum

### Gereksinimler

- Node.js (v14 veya üzeri)
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın:**
```bash
git clone https://github.com/kullanici-adiniz/express-app.git
cd express-app
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
```

3. **Uygulamayı başlatın:**
```bash
npm start
```

veya geliştirme modunda:
```bash
npm run dev
```

4. **Tarayıcıda açın:**
```
http://localhost:3000
```

## 💻 Kullanım

### Müşteri Paneli
```
Ana Sayfa:        http://localhost:3000/
Ürünler:          http://localhost:3000/products
Sepet:            http://localhost:3000/cart
Ödeme:            http://localhost:3000/checkout
Siparişlerim:     http://localhost:3000/orders
```

### Admin Paneli
```
Ürünler:          http://localhost:3000/admin/products
Ürün Ekle:        http://localhost:3000/admin/add-product
Ürün Düzenle:     http://localhost:3000/admin/edit-product/:id
```

## 📸 Ekran Görüntüleri

*(Buraya ekran görüntüleri ekleyebilirsiniz)*
```markdown
![Ana Sayfa](screenshots/home.png)
![Ürünler](screenshots/products.png)
![Admin Panel](screenshots/admin.png)
```

## 🔌 API Endpoints

### Shop Routes

| Method | Endpoint | Açıklama |
|--------|----------|----------|
| GET | `/` | Ana sayfa |
| GET | `/products` | Tüm ürünleri listele |
| GET | `/products/:id` | Ürün detayı |
| GET | `/cart` | Sepeti görüntüle |
| POST | `/cart` | Sepete ürün ekle |
| POST | `/cart/delete` | Sepetten ürün sil |
| GET | `/checkout` | Ödeme sayfası |
| GET | `/orders` | Siparişleri görüntüle |

### Admin Routes

| Method | Endpoint | Açıklama |
|--------|----------|----------|
| GET | `/admin/products` | Ürün listesi |
| GET | `/admin/add-product` | Ürün ekleme formu |
| POST | `/admin/add-product` | Yeni ürün ekle |
| GET | `/admin/edit-product/:id` | Ürün düzenleme formu |
| POST | `/admin/edit-product` | Ürünü güncelle |
| POST | `/admin/delete-product` | Ürünü sil |

## 🎨 Özelleştirme

### CSS Değişikliği

CSS dosyaları `public/css/` klasöründe bulunur:
- `style.css` - Genel stil
- `forms.css` - Form stilleri

### Yeni Sayfa Ekleme

1. `views/` klasörüne yeni `.pug` dosyası ekleyin
2. `routes/` klasöründe ilgili route'u tanımlayın
3. Controller'da işlevi yazın

### Layout Değiştirme

Ana layout `views/layouts/main-layout.pug` dosyasındadır. Navbar, head ve diğer tekrarlayan bileşenler `views/includes/` klasöründedir.

## 📦 Kullanılan Paketler
```json
{
  "express": "^4.x.x",
  "pug": "^3.x.x",
  "body-parser": "^1.x.x",
  "path": "^0.x.x"
}
```

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen şu adımları izleyin:

1. Bu projeyi fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/yeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeniOzellik`)
5. Pull Request oluşturun

### Commit Kuralları

Conventional Commits standardını kullanıyoruz:
- `feat:` - Yeni özellik
- `fix:` - Hata düzeltme
- `docs:` - Dokümantasyon
- `style:` - Code style değişikliği
- `refactor:` - Kod iyileştirme
- `test:` - Test ekleme/düzenleme
- `chore:` - Diğer değişiklikler

## 🐛 Bilinen Sorunlar

- [ ] Sepet verisi kalıcı değil (veritabanı entegrasyonu gerekli)
- [ ] Ödeme sistemi demo aşamasında
- [ ] Kullanıcı girişi henüz eklenmedi

## 📝 TODO

- [ ] MongoDB/PostgreSQL veritabanı entegrasyonu
- [ ] Kullanıcı authentication sistemi
- [ ] Gerçek ödeme gateway entegrasyonu (Stripe/PayPal)
- [ ] Resim upload sistemi
- [ ] Ürün arama ve filtreleme
- [ ] Admin dashboard istatistikleri
- [ ] Email bildirimleri
- [ ] Unit ve integration testleri

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 👤 Yazar

**Mehmet Oğuz Kocadere**

- GitHub: [@memo-13-byte](https://github.com/memo-13-byte)
- LinkedIn: [mehmet-oğuz-kocadere](https://www.linkedin.com/in/mehmet-o%C4%9Fuz-kocadere/)
- Email: canmehmetoguz@gmail.com

## 🙏 Teşekkürler

- FontAwesome icon kütüphanesi için
- Express.js ve Node.js topluluğuna
- Pug template engine geliştiricilerine

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
