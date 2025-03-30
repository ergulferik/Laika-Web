import { MenuItem } from '../models/menu.model';

const MENU_ITEMS: MenuItem[] = [
  { id: 1, category: 'Kahve', name: 'Espresso', description: 'Yoğun ve aromatik tek shot kahve.', price: 40 },
  {
    id: 2,
    category: 'Kahve',
    name: 'Americano',
    description: 'Espresso üzerine sıcak su eklenmiş hafif kahve.',
    price: 45,
  },
  { id: 3, category: 'Kahve', name: 'Latte', description: 'Espresso ve bol süt ile hazırlanan kahve.', price: 55 },
  {
    id: 4,
    category: 'Kahve',
    name: 'Cappuccino',
    description: 'Espresso, süt ve süt köpüğünün mükemmel dengesi.',
    price: 55,
  },
  { id: 5, category: 'Kahve', name: 'Mocha', description: 'Çikolata ve espresso karışımı lezzetli kahve.', price: 60 },
  { id: 6, category: 'Kahve', name: 'Flat White', description: 'Yoğun kahve aroması ve mikro köpüklü süt.', price: 60 },
  {
    id: 7,
    category: 'Kahve',
    name: 'Türk Kahvesi',
    description: 'Klasik Türk kahvesi, köpüklü ve aromatik.',
    price: 40,
  },

  { id: 8, category: 'Çay', name: 'Yeşil Çay', description: 'Taze ve hafif ferahlatıcı yeşil çay.', price: 35 },
  { id: 9, category: 'Çay', name: 'Siyah Çay', description: 'Klasik demi güçlü siyah çay.', price: 30 },
  {
    id: 10,
    category: 'Çay',
    name: 'Nane Limon',
    description: 'Bağışıklık sistemini destekleyen doğal çay.',
    price: 40,
  },
  { id: 11, category: 'Çay', name: 'Adaçayı', description: 'Hafif baharatlı ve rahatlatıcı bitki çayı.', price: 35 },

  {
    id: 12,
    category: 'Tatlı',
    name: 'Cheesecake',
    description: 'Kremamsı ve hafif limon aromalı cheesecake.',
    price: 75,
  },
  {
    id: 13,
    category: 'Tatlı',
    name: 'Tiramisu',
    description: 'Kahve ve mascarpone peynirinin harika birleşimi.',
    price: 80,
  },
  { id: 14, category: 'Tatlı', name: 'Brownie', description: 'Yoğun çikolatalı ve cevizli brownie.', price: 60 },
  {
    id: 15,
    category: 'Tatlı',
    name: 'San Sebastian',
    description: 'Karamelize üst tabakasıyla özel cheesecake.',
    price: 85,
  },

  {
    id: 16,
    category: 'Sandviç',
    name: 'Tavuklu Sandviç',
    description: 'Izgara tavuk, taze yeşillikler ve özel sos.',
    price: 90,
  },
  {
    id: 17,
    category: 'Sandviç',
    name: 'Ton Balıklı Sandviç',
    description: 'Ton balığı, avokado ve marul ile sağlıklı seçenek.',
    price: 95,
  },
  {
    id: 18,
    category: 'Sandviç',
    name: 'Mozzarella Sandviç',
    description: 'Mozzarella peyniri ve domates ile enfes lezzet.',
    price: 85,
  },
  {
    id: 19,
    category: 'Sandviç',
    name: 'Klasik Club Sandviç',
    description: 'Hindi füme, domates, marul ve özel sos.',
    price: 100,
  },

  {
    id: 20,
    category: 'Smoothie',
    name: 'Mango Smoothie',
    description: 'Taze mango, yoğurt ve bal karışımı.',
    price: 70,
  },
  {
    id: 21,
    category: 'Smoothie',
    name: 'Çilekli Smoothie',
    description: 'Taze çilek, muz ve süt karışımı.',
    price: 70,
  },
  { id: 22, category: 'Smoothie', name: 'Avokado Smoothie', description: 'Sağlıklı avokado ve badem sütü.', price: 80 },

  {
    id: 23,
    category: 'Soğuk İçecek',
    name: 'Limonata',
    description: 'Taze sıkılmış limon ve hafif tatlı lezzet.',
    price: 50,
  },
  {
    id: 24,
    category: 'Soğuk İçecek',
    name: 'Buzlu Americano',
    description: 'Soğuk espresso ve buz ile hafif kahve.',
    price: 55,
  },
  { id: 25, category: 'Soğuk İçecek', name: 'Buzlu Latte', description: 'Espresso, soğuk süt ve buz.', price: 60 },
  {
    id: 26,
    category: 'Soğuk İçecek',
    name: 'Bubble Tea',
    description: 'Sütlü çay ve tapioca incileri ile Asya lezzeti.',
    price: 70,
  },
];

export default MENU_ITEMS;
