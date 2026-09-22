/* ДАННЫЕ САЙТА KGSHARKS CLUB — редактируйте этот файл и загружайте его на хостинг как data.js (пересборка не нужна).
   ВСЕ СУММЫ — В ФИШКАХ (как в PokerShip). 1 фишка = 1 сом.
   Сайт сам пересчитает в сомы и сам покажет период лидерборда (пн 15:00 → вс 23:59).
   Пустой список / 0 — блок или строка скрывается. */
window.CLUB_DATA = {
  DEMO: false,
  updated: "2026-09-21",

  // Турниры (общие для клубов). Суммы — в долларах, время — ПО МОСКВЕ (сайт сам переведёт в местное).
  // Дни: "sat", "sun-thu" (диапазон), список ["fri","sat"]. type: "ko" | "gtd" | "free".
  tournaments: [
    { name: "MAIN MTT GTD $1000", type: "ko", days: "sat", timesMsk: ["18:00"], gtd: 1000, buyin: 10, note: "main" },
    { name: "GTD $500 · 50% Main OFF", type: "gtd", days: "sun-fri", timesMsk: ["16:00", "18:00", "20:00"], gtd: 500, buyin: 5, rebuy: 7, note: "gtd500" },
    { name: "Mini Daily MTT GTD $40", type: "gtd", days: "sun-thu", timesMsk: ["16:00", "20:00"], gtd: 40, buyin: 2, note: "mini" },
    { name: "FREE $10 GTD", type: "free", days: "fri-sat", timesMsk: ["12:00", "14:00", "16:00", "20:00"], gtd: 10, buyin: 0, note: "free" }
  ],

  // Фонд Cooler Jackpot и столы сайт берёт сам из Firebase (kgsharks_live/data) — здесь их указывать не нужно.

  // Лидерборд Ring Game: всего наград и призы по местам для каждой группы лимитов.
  // complete: true — если после последнего места наград больше нет.
  // rows (необязательно): [{ name: "Ник", points: 123.4 }, ...] — лучше не публиковать ники без согласия игроков.
  leaderboard: {
    total: 17600,
    groups: [
      { stakes: "3/6 – 10/20", prizes: [1000, 500, 500, 500, 350, 350, 350, 200, 200, 150], complete: true },
      { stakes: "15/30 – 500/1000", prizes: [3000, 2000, 2000, 2000, 1000, 1000, 1000, 500, 500, 500], complete: true }  // подтверждено в PokerShip
    ]
  }
};
