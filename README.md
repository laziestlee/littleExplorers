# 小小探索家 V4 · 儿童互动启蒙

孩子端改为四个独立游戏：汉字听音找字、英语听词找图、饼干数量分合、逐页有声故事。所有操作支持触控和键盘，声音和音效可独立关闭，默认不播放背景音乐。

## 家长专区

提供现有41周课程、教案、学习记录、Apple 日历 `.ics` 导出。儿童端的家长入口是简单的防误触关卡，**不等于身份验证**。完整课程每周在解密后从本地运行。

## 隐私边界

- GitHub Pages 的网站入口仍是公开的；`course.enc.json` 是经 PBKDF2-SHA256（600000次）派生密钥后 AES-256-GCM 加密的课程文档。
- **不要把家庭密码、明文 HTML 或孩子的学习记录上传到公开仓库**；此发布包不含上述资料。
- 学习记录存储在设备浏览器 localStorage，非跨设备同步。服务工作者只缓存公开的加密资源。
- 可使用原有家庭密码解锁 V4。请妥善保管原密码，勿在 GitHub Issues 或 README 中展示。
- 不请求麦克风权限、不录音、不上传学习语音；声音由设备的 TTS 和本地 Web Audio 生成。

## 发布和测试

仓库现有 `.github/workflows/deploy.yml` 自动把 `index.html`、`course.enc.json`、`sw.js`、`manifest.webmanifest`、`icon.svg`、`robots.txt`、`.nojekyll` 发布到 Pages。提交文件后在 Actions 检查部署，再用 iPhone Safari 测试密码解锁、声音设置和离线访问。

详细交互与音效规范见 `DESIGN_STANDARD.md`。