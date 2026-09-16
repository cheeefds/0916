# 吳誠哲 個人首頁 & 即時動態時鐘 (Wu Cheng-Che Personal Hub)

✨ **一個結合現代毛玻璃視覺美學 (Glassmorphism)、高精度即時時鐘與個人簡介的動態個人首頁。**

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 🔗 線上展示 (Live Demo)

- **Demo 連結**：[https://cheeefds.github.io/0916/](https://cheeefds.github.io/0916/)

![Demo Snapshot](assets/demo_snapshot.png)

---

## 📖 簡介 (Overview)

本專頁專為 **吳誠哲 (Wu Cheng-Che)** 設計，打造極致流暢的個人品牌數位門面。除了展現個人專業領域與社群連結之外，核心整合了高精度的動態時間計算引擎，讓時間不只是數字，更成為視覺化的生活指標。

---

## 🌟 核心功能 (Key Features)

### 1. 👤 個人品牌卡片 (Profile Hero)
- **智慧時段招呼**：系統依據目前時間自動顯示「早安」、「午安」或「晚安」。
- **極致視覺細節**：專屬質感頭像、呼吸燈狀態指示與主題標籤。
- **社群快捷連結**：整合 GitHub、LinkedIn、Email 與一鍵分享功能。

### 2. ⏱️ 實時高精度時鐘 (Live Precision Clock)
- **毫秒級數字時鐘**：流暢顯示時、分、秒與毫秒演進。
- **雙制式切換**：支援 24 小時制 (`24H`) 與 12 小時制 (`12H AM/PM`) 自由切換。
- **完整日期與時區**：支援 Traditional Chinese 格式（年/月/日/星期）與 `Asia/Taipei` (UTC+8) 時區顯示。

### 3. 📊 時間維度與指標 (Time Metrics)
- **年度進度條 (Year Progress %)**：即時算出一整年已過去的百分比。
- **今日進度條 (Day Progress %)**：計算今日已度過的時間比例。
- **Unix Timestamp**：提供開發者常用的秒級 Unix 時間戳記。

### 4. 🌍 世界主要城市時鐘 (World Clock Grid)
- 內建四區即時時鐘連動：**台北 (Taipei)**、**東京 (Tokyo)**、**倫敦 (London)**、**紐約 (New York)**。

### 5. 🎨 視覺美學與切換 (Design System)
- **深/淺色主題 toggle**：可隨時在「賽博深色毛玻璃 (Cyberpunk Dark)」與「極簡純白 (Modern Light)」主題間切換。
- **每日時間感悟**：收錄時間金句，提供互動換句體驗。

---

## 🛠️ 技術棧 (Tech Stack)

- **前端核心**：HTML5, Vanilla JavaScript (ES6+)
- **樣式設計**：CSS3 (CSS Variables, Flexbox, CSS Grid, Modern Backdrop-Filter)
- **字型庫**：Google Fonts ([Outfit](https://fonts.google.com/specimen/Outfit), [Noto Sans TC](https://fonts.google.com/specimen/Noto+Sans+TC), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono))
- **圖示庫**：[FontAwesome 6](https://fontawesome.com/)

---

## 📁 專案結構 (Directory Structure)

```text
personal page/
├── index.html          # 主頁面結構與語意標籤
├── styles.css          # 全局樣式、毛玻璃特效與深淺主題變數
├── script.js           # 時間引擎、動態數據計算與互動事件處理
├── assets/             # 圖像資源
│   ├── avatar.jpg      # 個人專屬頭像
│   ├── demo_snapshot.png # 網頁展示截圖
│   └── hero_bg.jpg     # 深色視覺背景圖
└── README.md           # 專案說明文件
```

---

## 🚀 快速啟動 (Quick Start)

無需複雜安裝，下載或複製本專案後即可直接執行：

### 方法一：直接於瀏覽器開啟
1. 進入專案目錄。
2. 雙擊 `index.html` 即可在瀏覽器開啟並使用完整功能。

### 方法二：透過本地 HTTP 伺服器運行
如需以 Localhost 方式檢視：

- **使用 Python 伺服器**：
  ```bash
  python -m http.server 8080
  ```
  於瀏覽器造訪 `http://localhost:8080`

- **使用 Node.js / npx**：
  ```bash
  npx http-server -p 8080
  ```

---

## 📄 授權條款 (License)

本專案採用 [MIT License](LICENSE) 授權發行。
