import { Game } from "../models/game.model";

export const GAMES_DATA: Game[] = [
    {
      id: "secret-hitler",
      name: "Secret Hitler",
      description:
        "Secret Hitler, 5-10 oyuncuyla oynanan bir blöf ve dedüksiyon oyunudur. Oyuncular gizli kimliklere sahip olup, Liberal ve Faşist tarafları temsil eder. Oyunun amacı, kendi tarafının galip gelmesini sağlamaktır.",
      image: "/assets/secret-hitler.jpg",
      category: ["Blöf", "Dedüksiyon"],
      players: "5-10",
      duration: "45 dakika",
      features: [
        "Gizli kimlikler",
        "Dedüksiyon mekanikleri",
        "Blöf ve strateji",
        "Etkileşimli oynanış",
        "Sosyal etkileşim",
        "Stratejik kararlar"
      ],
      rules: [
        "Oyuncular rastgele Liberal veya Faşist olarak belirlenir.",
        "Faşistler birbirini tanır, ancak Liberal'ler kimseyi bilmez.",
        "Oyuncular yasa çıkararak veya Hitler'i belirleyerek oyunu kazanmaya çalışır.",
        "Hitler Şansölye seçilirse ve belirli sayıda yasa onaylandıysa Faşistler kazanır.",
        "Her turda bir oyuncu Şansölye seçilir ve bir yasa önerir.",
        "Liberal'ler Hitler'i bulmaya, Faşistler ise gizli kalıp yasaları manipüle etmeye çalışır."
      ],
      requirements: {
        minimum: ["5 oyuncu", "1 masa", "Oyun kartları"],
        recommended: ["7+ oyuncu", "Strateji ve blöf yetenekleri"],
      },
    },
    {
      id: "munchkin",
      name: "Munchkin",
      description:
        "Munchkin, 3-6 oyuncuyla oynanan eğlenceli ve rekabetçi bir kart oyunudur. Oyuncular zindanları keşfeder, canavarlarla savaşır ve birbirlerine tuzak kurar.",
      image: "/assets/munchkin.jpg",
      category: ["Kart", "Strateji"],
      players: "3-6",
      duration: "60 dakika",
      features: [
        "Hızlı tempolu oyun",
        "Rol yapma ve kart kombinasyonları",
        "Rakiplere sabotaj yapma",
        "Zindan temalı eğlence",
      ],
      rules: [
        "Oyuncular, sırayla zindan kartlarını açar ve canavarlarla savaşır.",
        "Kazanan oyuncu seviyesini artırır ve ganimet kazanır.",
        "İlk olarak 10. seviyeye ulaşan oyuncu oyunu kazanır.",
        "Diğer oyuncular, kartlarla savaşları manipüle edebilir.",
      ],
      requirements: {
        minimum: ["3 oyuncu", "Munchkin kart seti"],
        recommended: ["4+ oyuncu", "Stratejik düşünme yeteneği"],
      },
    },
    {
      id: "vampir-koylu",
      name: "Vampir Köylü",
      description:
        "Vampir Köylü, klasik Vampir oyununa benzeyen bir sosyal dedüksiyon oyunudur. Oyuncular köylüler, vampirler ve özel roller alarak gizli kimliklerle birbirlerini analiz etmeye çalışır.",
      image: "/assets/vampire-and-villagers.png",
      category: ["Sosyal Dedüksiyon"],
      players: "6-20",
      duration: "30-60 dakika",
      features: [
        "Gizli roller",
        "Blöf ve analiz",
        "Büyük oyuncu grupları için ideal",
        "Gerilim dolu oynanış",
      ],
      rules: [
        "Oyuncular, gizli roller alır (Köylü, Vampir, Özel roller).",
        "Geceleri vampirler birini öldürür, gündüzleri köylüler birini linç eder.",
        "Köylüler, tüm vampirleri bulursa kazanır; vampirler sayıca üstün olursa kazanır.",
        "Özel roller, farklı yetenekler kullanarak oyunun seyrini değiştirebilir.",
      ],
      requirements: {
        minimum: ["6 oyuncu", "1 moderatör"],
        recommended: ["10+ oyuncu", "İyi bir hikaye anlatıcısı"],
      },
    },
  ];
  