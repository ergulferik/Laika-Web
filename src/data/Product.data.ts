import { Product } from '../models/product.model';

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'ethiopian-yirgacheffe',
    name: 'Etiyopya Yirgacheffe',
    description:
      'Çiçeksi ve narenciye notalarıyla karakterize edilen, hafif gövdeli ve asiditesi yüksek özel kahve. Etiyopya\'nın Yirgacheffe bölgesinden gelen bu kahve, fincanında çiçek ve meyve aromaları sunar.',
    price: 450,
    image: 'assets/dummy-coffe.jpg',
    category: 'Çekirdek Kahve',
    inStock: true,
    details: {
      origin: 'Etiyopya, Yirgacheffe',
      roast: 'Orta Kavrulmuş',
      weight: '250g',
      flavor: ['Çiçeksi', 'Narenciye', 'Hafif Gövdeli', 'Yüksek Asidite'],
    },
  },
  {
    id: 'colombian-supremo',
    name: 'Kolombiya Supremo',
    description:
      'Dengeli ve yumuşak bir profil sunan Kolombiya Supremo, fındık ve karamel notalarıyla karakterize edilir. Günlük içim için mükemmel bir seçenek.',
    price: 420,
    image: 'assets/dummy-coffe.jpg',
    category: 'Çekirdek Kahve',
    inStock: true,
    details: {
      origin: 'Kolombiya',
      roast: 'Orta Kavrulmuş',
      weight: '250g',
      flavor: ['Fındık', 'Karamel', 'Dengeli', 'Yumuşak'],
    },
  },
  {
    id: 'brazilian-santos',
    name: 'Brezilya Santos',
    description:
      'Koyu kavrulmuş, güçlü ve cesur bir kahve. Çikolata ve karamel notalarıyla zengin bir deneyim sunar. Espresso için ideal.',
    price: 380,
    image: 'assets/dummy-coffe.jpg',
    category: 'Çekirdek Kahve',
    inStock: true,
    details: {
      origin: 'Brezilya, Santos',
      roast: 'Koyu Kavrulmuş',
      weight: '250g',
      flavor: ['Çikolata', 'Karamel', 'Güçlü', 'Cesur'],
    },
  },
  {
    id: 'guatemala-antigua',
    name: 'Guatemala Antigua',
    description:
      'Volkanik topraklarda yetişen bu özel kahve, çikolata ve baharat notalarıyla karakterize edilir. Kompleks ve dengeli bir profil sunar.',
    price: 480,
    image: 'assets/dummy-coffe.jpg',
    category: 'Çekirdek Kahve',
    inStock: true,
    details: {
      origin: 'Guatemala, Antigua',
      roast: 'Orta-Koyu Kavrulmuş',
      weight: '250g',
      flavor: ['Çikolata', 'Baharat', 'Kompleks', 'Dengeli'],
    },
  },
  {
    id: 'kenya-aa',
    name: 'Kenya AA',
    description:
      'Yüksek kaliteli Kenya AA, üzüm ve siyah frenk üzümü notalarıyla karakterize edilir. Parlak asiditesi ve şarap benzeri yapısıyla öne çıkar.',
    price: 520,
    image: 'assets/dummy-coffe.jpg',
    category: 'Çekirdek Kahve',
    inStock: true,
    details: {
      origin: 'Kenya',
      roast: 'Orta Kavrulmuş',
      weight: '250g',
      flavor: ['Üzüm', 'Siyah Frenk Üzümü', 'Parlak Asidite', 'Şarap Benzeri'],
    },
  },
  {
    id: 'espresso-blend',
    name: 'Espresso Blend',
    description:
      'Özel harmanımız, farklı bölgelerden gelen kahvelerin mükemmel dengesiyle oluşturulmuştur. Espresso, cappuccino ve latte için ideal.',
    price: 400,
    image: 'assets/dummy-coffe.jpg',
    category: 'Harman Kahve',
    inStock: true,
    details: {
      origin: 'Karışım',
      roast: 'Koyu Kavrulmuş',
      weight: '250g',
      flavor: ['Dengeli', 'Kremamsı', 'Çikolata', 'Fındık'],
    },
  },
  {
    id: 'decaf-colombian',
    name: 'Kafeinsiz Kolombiya',
    description:
      'Doğal su işlemiyle kafeini alınmış, lezzetinden ödün vermeyen özel kahve. Akşam saatlerinde de rahatlıkla içebilirsiniz.',
    price: 440,
    image: 'assets/dummy-coffe.jpg',
    category: 'Kafeinsiz',
    inStock: true,
    details: {
      origin: 'Kolombiya',
      roast: 'Orta Kavrulmuş',
      weight: '250g',
      flavor: ['Yumuşak', 'Fındık', 'Dengeli', 'Kafeinsiz'],
    },
  },
  {
    id: 'cold-brew-blend',
    name: 'Cold Brew Blend',
    description:
      'Soğuk demleme için özel olarak seçilmiş ve kavrulmuş kahve. Yumuşak, tatlı ve düşük asiditeli bir profil sunar.',
    price: 390,
    image: 'assets/dummy-coffe.jpg',
    category: 'Özel Harman',
    inStock: true,
    details: {
      origin: 'Karışım',
      roast: 'Orta Kavrulmuş',
      weight: '250g',
      flavor: ['Yumuşak', 'Tatlı', 'Düşük Asidite', 'Soğuk Demleme'],
    },
  },
  {
    id: 'coffee-gift-set',
    name: 'Kahve Hediye Seti',
    description:
      '3 farklı bölgeden özel seçilmiş kahvelerden oluşan hediye seti. Her biri 100g olmak üzere toplam 300g kahve içerir.',
    price: 350,
    image: 'assets/dummy-coffe.jpg',
    category: 'Hediye Seti',
    inStock: true,
    details: {
      origin: 'Karışım',
      roast: 'Çeşitli',
      weight: '300g (3x100g)',
      flavor: ['Çeşitli Profiller', 'Hediye Paketi'],
    },
  },
  {
    id: 'premium-blend',
    name: 'Premium Harman',
    description:
      'En kaliteli çekirdeklerden oluşturulmuş özel harmanımız. Zengin, kompleks ve unutulmaz bir kahve deneyimi sunar.',
    price: 550,
    image: 'assets/dummy-coffe.jpg',
    category: 'Premium',
    inStock: true,
    details: {
      origin: 'Karışım (Premium)',
      roast: 'Özel Kavrulmuş',
      weight: '250g',
      flavor: ['Zengin', 'Kompleks', 'Premium', 'Özel'],
    },
  },
];

