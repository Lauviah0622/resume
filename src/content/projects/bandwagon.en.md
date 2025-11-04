---
title: Rich text Markdown editor
cover: /blog.png
link: https://editor.lavif.me/
repo: https://github.com/Lauviah0622/rich-text-md-editor
---

Independent design and development of a baseball schedule & game-tracking app, aiming to provide a high-quality viewing experience for professional baseball games.

- Mobile (iOS / Android)  
  Initially built with React Native, later rewritten in Flutter to improve performance and developer experience.
- UI / Design  
  Used Figma to design pages and component library, and exported reusable components for implementation in Flutter.
- Backend & Crawling Services
  - Built a crawling service using Redis + BullMQ as the task queue, supporting retries, scheduling, and error tracking.
  - Used Playwright to scrape official schedules and pitch-by-pitch game data.
  - Implemented an API server in TypeScript, packaged as a Docker image and deployed to Cloud Run.
  - Experimented with a functional programming (FP) style for implementing domain logic.
- System Design & Data Modeling
  - Designed a multi-level ID system to support “full replay” of games across different leagues and seasons: season / league → game → inning → event (pitch / play / substitution), allowing precise addressing of a single event.
  - Split the data flow into multiple logical stages — crawling → preprocessing → aggregation → storage — to support snapshot, data restore, rerun, and trace-back operations for later data correction and versioning.
- Infra / DevOps (GCP + IaC)
  - Used GCP as the main cloud platform and managed infrastructure with Terraform (IaC) to make environment creation and changes repeatable and version-controlled.
  - Deployed crawling workers with Docker Compose on GCE, combined with MIG + Spot VMs to build a worker pool and reduce long-running compute costs.
  - Separated scheduler and worker services to scale crawling and processing capacity elastically during peak game times.
  - Wrote multiple shell scripts (startup scripts, helpers, service builders) to automate common operations and deployment workflows.
- Misc
  - Heavily used TypeScript features (generics, conditional types, branding types, etc.) to define strict domain models and data types, ensuring consistency and maintainability across all layers.
  - Used Zod to strictly validate all input/output data, and implemented logic to repair or fill in incomplete or inconsistent records.