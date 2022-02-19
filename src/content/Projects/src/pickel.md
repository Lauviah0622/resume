---
title: Pickel
cover: /avatar.jpg
---

程式導師計畫第四期 Final Project ，覺得用投票表決約時間的方式常常沒辦法選出一個滿足大家的時間，決定開發一個提供團隊決定聚會時間的線上小工具

- React + React router + Redux：考慮到有大量的組件共用 State 的應用場景，故使用 Redux 統一處理 global state。
- Styled Components：避免 CSS global scope 問題，且 CSS-in-JS 方案適合組件化的開發，也更容易使用 JS 控制樣式
- Material Design UI：在設計時參考 Material Design guildline，故同時使用 Material UI 做為 UI Framework
- Snowpack：用於 Dev build，使用瀏覽器原生支援的 ESmodule，比起 Webpack 快上許多，適合在不須考慮 browser 支援度的場合使用（即開發時）
- 使用輕量、且社群廣大的 Express JS 作為後端框架
- MySQL + Seqeulize：ORM 讓 JS 能夠生成 SQL query。選擇 Sequelize 的主因是熟悉，再來是提供 Migration 方便建立 Schema。 

[專案 Repo](https://github.com/Lauviah0622/Pickel) [前端 Repo](https://github.com/Lauviah0622/Pickel) [後端 Repo](https://github.com/Lauviah0622/Pickel)