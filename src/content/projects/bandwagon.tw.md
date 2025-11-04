---
title: Bandwagon 今日球迷 (ongoing)
cover: /blog.png
links:
  repo: https://github.com/Sonaiv-Lab/bandwagon
  Android apk: https://github.com/Sonaiv-Lab/bandwagon/releases/tag/0.2.2
---

獨立設計、開發的棒球賽程 App，目標是提供良好的棒球賽事體驗

- iOS / Android: 原使用 React Native, 後續以 Flutter 重新撰寫，以提升效能及開發體驗
- 使用 Figma 設計頁面，並繪製頁面元件輸出至 Flutter 內部使用
- 爬蟲服務
  - 使用 Redis + BullMQ 作為任務佇列，支援任務重試、排程與錯誤追蹤
  - 以 Playwright 爬取官方賽程與比賽逐球資訊
- API server
  - 以 TypeScript 撰寫，使用 Docker image 佈署至 Cloud Run
  - 嘗試使用 FP (Functional Programming) 風格進行開發
- 系統設計
  - 為支援「世界各地不同聯盟、同一場比賽的完整回放」，設計多層次 ID
    從 賽事 (各季、聯盟), 場次, 局, 事件 (投球、打擊、跑壘、替換選手)，可精準定位單一事件
  - 將資料流拆成多個邏輯層：爬取 → 前處理 → 資料整合 → 儲存，預留
    snapshot、data restore、rerun、trace back 等操作空間，方便之後做資料修正與版本管理
- Infra / DevOps
  - 基礎建設採 GCP，並以 Terraform 進行 IaC（Infrastructure as Code），讓環境建立與調整可程式化、可版本控制
  - 爬蟲服務以 Docker Compose 佈署在 GCE，搭配 MIG + Spot VM 建立 worker pool，以降低長時間運算成本
  - 區分 scheduler / worker 服務，可依賽事尖峰（比賽時段）彈性擴展爬蟲與處理資源
  - 撰寫多支 shell script（startup script、helper、service builder），自動化常見操作與佈署流程
- Misc
  - 深度使用 TypeScript：泛型、條件型別、branding type 等，建立嚴格的 domain model 與資料型別，確保各層資料結構的一致性與可維護性
  - 嚴格使用 zod 確保資料 input / output 無誤，並對錯誤資料進行修復、補全
