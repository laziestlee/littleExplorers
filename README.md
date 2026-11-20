# 小小探索家 V5 · 家庭加密学习游戏

适合5—6岁儿童的三科互动学习网页，共8种玩法，保留41周家长教案与 Apple 日历导出。

## GitHub Pages
部署工作流：`.github/workflows/deploy.yml`。本发布包只包含加密教材和静态解锁壳。

## 使用
打开 `https://laziestlee.github.io/littleExplorers/`，输入此前保存的家庭密码。
初次需要下载密文，后续离线能力取决于浏览器缓存。

## 安全
- 请勿把家庭密码、明文课程、儿童学习记录上传到 GitHub。
- GitHub 仓库及解锁入口是公开的，教材文件是 AES-256-GCM 密文而不是真正网站权限私有化。
- 学习记录在设备本地，跨设备不自动同步。

设计标准见 `DESIGN_STANDARD.md`。