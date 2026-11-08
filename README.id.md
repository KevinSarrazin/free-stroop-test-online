# Tes Stroop gratis online

Bahasa lain: [English](README.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Español (México)](README.es-MX.md) · [Português (Brasil)](README.pt-BR.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Dansk](README.da.md) · [Svenska](README.sv.md) · [Русский](README.ru.md) · [हिन्दी](README.hi.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [简体中文](README.zh-Hans.md) · [繁體中文（香港）](README.zh-HK.md)

Tes Stroop gratis yang berjalan di browser, dalam satu file HTML.

Coba online: https://kevinsarrazin.github.io/free-stroop-test-online/id/

Sebuah kata warna muncul dengan tinta berwarna. Jawab dengan warna tintanya, bukan katanya, lewat tombol atau tuts 1 sampai 6. Setelah satu menit, kamu mendapat:

- **Efek Stroop**: seberapa jauh kamu melambat saat kata dan tintanya berbeda dibanding saat keduanya cocok.
- **Jawaban benar**: persentase jawaban yang benar.
- **Waktu rata-rata**: rata-rata waktu jawabanmu, hanya dari jawaban yang benar.
- **Kata sama dengan tinta / beda dengan tinta**: dua rata-rata yang menjadi dasar perhitungan efek Stroop.

Setiap blok percobaan berisi kata yang cocok dan tidak cocok dalam jumlah sama, setiap warna tinta muncul sama seringnya, dan pasangan kata dan tinta yang sama tidak pernah muncul dua kali berturut-turut. Hanya jawaban benar yang dihitung untuk waktunya.

Sepuluh tes terakhir disimpan di penyimpanan lokal browsermu. Tidak ada yang dikirim ke mana pun: tanpa pelacakan, tanpa skrip eksternal, tanpa pendaftaran.

## Cara menjalankan

Buka `index.html` di browser apa pun. Tanpa proses build, tanpa dependensi.

## Cara membaca hasilnya

Kebanyakan orang menjawab lebih lambat saat kata menyebut warna yang berbeda dari tintanya, sering kali sampai beberapa puluh milidetik. Kelelahan, gangguan, dan latihan semuanya memengaruhi hasil, jadi bandingkan dirimu dengan dirimu sendiri, pada jam yang sama.

Tes ini mengukur satu jenis kontrol atensi pada satu tugas. Ini bukan diagnosis, dan bukan tes atensi klinis.

## Pasang tes ini di situs web kamu

Kamu bisa menampilkan tes Stroop lengkap dari upchin.app di halamanmu sendiri, gratis. Tes ini tersedia dalam 17 bahasa: atur `data-lang` (atau `lang=` di alamat frame) ke `en`, `fr`, `de`, `es-MX`, `pt-BR`, `it`, `nl`, `pl`, `da`, `sv`, `ru`, `id`, `hi`, `ja`, `ko`, `zh-Hans`, `zh-HK`.

**Dengan skrip** ([`stroop-test-embed.js`](stroop-test-embed.js)), yang menyesuaikan tinggi frame dengan isinya:

```html
<div data-upchin-embed="stroop-test" data-lang="id">
  <p>Tes Stroop oleh <a href="https://upchin.app/id/alat/tes-stroop">Upchin</a></p>
</div>
<script src="https://kevinsarrazin.github.io/free-stroop-test-online/stroop-test-embed.js" async></script>
```

**Tanpa skrip**, jika situsmu hanya menerima HTML:

```html
<iframe src="https://upchin.app/embed/stroop-test?lang=id" title="Tes Stroop" width="100%" height="1450" style="border:0;max-width:100%" loading="lazy" allow="clipboard-write"></iframe>
<p>Tes Stroop oleh <a href="https://upchin.app/id/alat/tes-stroop">Upchin</a></p>
```

Mohon pertahankan baris kredit di bawah tes. Skrip menambahkan frame di sebelahnya dan tidak pernah menghapusnya.

## Versi lengkap

[Tes Stroop di upchin.app](https://upchin.app/id/alat/tes-stroop) tersedia dalam 17 bahasa, dengan tes 30 detik, 1 menit, dan 3 menit. Versi ini menjelaskan setiap angka dan memungkinkanmu membagikan hasil.

Tes ini dibuat oleh tim di balik Upchin. Seperti kata situs webnya: "Aplikasimu dirancang supaya kamu terus scroll. Upchin dirancang untuk mengembalikan waktumu." Aplikasi iPhone-nya memakai Durasi Layar dari Apple untuk membantumu [lebih jarang membuka aplikasi yang mengganggu fokus](https://upchin.app/id), tanpa menggurui, dengan sedikit hambatan di saat yang tepat.
