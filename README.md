# 雨林教育 - 考研辅导网站

这是一个为考研学生提供辅导服务和学习资料的教育网站。网站采用React + TypeScript + Tailwind CSS构建，具有响应式设计，支持各种设备访问。

## 功能特点

- 展示雨林教育的品牌介绍和优势
- 提供1对1个性化辅导和精品小班课两种辅导模式
- 课程资料商城，支持按类别筛选和购物车功能
- 展示师资力量和学员成功案例
- 响应式设计，适配各种屏幕尺寸

## 技术栈

- React 18+
- TypeScript
- Tailwind CSS
- React Router
- Framer Motion (动画效果)
- Lucide React (图标)

## 本地开发

### 前提条件

- Node.js (v16+)
- npm 或 yarn 或 pnpm

### 安装依赖

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install

# 或使用 pnpm
pnpm install
```

### 启动开发服务器

```bash
# 使用 npm
npm run dev

# 或使用 yarn
yarn dev

# 或使用 pnpm
pnpm dev
```

开发服务器将在 http://localhost:3000 启动。

## 构建项目

```bash
# 使用 npm
npm run build

# 或使用 yarn
yarn build

# 或使用 pnpm
pnpm build
```

构建后的文件将生成在 `dist` 目录中。

## 部署指南

### 将本地代码推送到GitHub

下面是将本地代码推送到GitHub的详细步骤，包括每一步需要点击的按钮和操作：

#### 前提条件
- 确保您已经在电脑上安装了Git
- 确保您已经有GitHub账号

#### 步骤1：配置Git用户信息（如果尚未配置）
1. 打开命令行工具（Windows：命令提示符或PowerShell；Mac：终端）
2. 输入以下命令并按回车：
   ```bash
   git config --global user.name "您的GitHub用户名"
   ```
3. 输入以下命令并按回车：
   ```bash
   git config --global user.email "您的GitHub注册邮箱"
   ```

#### 步骤2：初始化本地Git仓库（如果尚未初始化）
1. 在命令行中，导航到您的项目文件夹
   ```bash
   cd 您的项目路径
   ```
2. 输入以下命令并按回车初始化Git仓库：
   ```bash
   git init
   ```

#### 步骤3：添加项目文件到暂存区
1. 在命令行中输入以下命令并按回车：
   ```bash
   git add .
   ```
   （这个命令会将项目中所有文件添加到暂存区）

#### 步骤4：提交更改
1. 在命令行中输入以下命令并按回车：
   ```bash
   git commit -m "Initial commit"
   ```
   （您可以将"Initial commit"替换为更具描述性的提交信息）

#### 步骤5：在GitHub上创建新仓库
1. 打开浏览器，访问 [GitHub官网](https://github.com) 并登录您的账号
2. 点击右上角的"+"图标，然后选择"New repository"
   ![GitHub新建仓库](https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=GitHub+New+Repository+Button&sign=cc811ea932f2be9eb501cdb41a5b8f83)
3. 在"Repository name"字段中输入您的仓库名称（例如：rainforest-education）
4. 可选：在"Description"字段中输入仓库描述
5. 选择仓库可见性（Public或Private）
6. 不要勾选"Initialize this repository with a README"（因为我们已经有本地README文件）
7. 点击页面底部的"Create repository"按钮
   ![GitHub创建仓库表单](https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=GitHub+Create+Repository+Form&sign=92668a6557bbe74a1c25c6d38d8dcba2)

#### 步骤6：关联本地仓库和GitHub仓库
1. 创建仓库后，GitHub会显示一个页面，其中包含仓库的URL和一些命令
2. 在命令行中，复制并执行"…or push an existing repository from the command line"部分下的第一个命令：
   ```bash
   git remote add origin https://github.com/您的用户名/您的仓库名.git
   ```
   （请将URL替换为您自己的仓库URL）

#### 步骤7：推送代码到GitHub
1. 在命令行中，复制并执行上一步页面中的第二个命令：
   ```bash
   git push -u origin master
   ```
   （如果您的默认分支是main而不是master，请使用`git push -u origin main`）
2. 如果是第一次推送，系统可能会提示您输入GitHub用户名和密码/令牌
   - 用户名：输入您的GitHub用户名
   - 密码：输入您的GitHub个人访问令牌（推荐）或密码
     > 注意：自2021年8月起，GitHub不再支持使用密码进行命令行操作，建议使用个人访问令牌

#### 步骤8：验证推送是否成功
1. 返回GitHub网站上您的仓库页面
2. 刷新页面
3. 您应该能够看到您的项目文件已经成功上传到GitHub仓库

恭喜！您已经成功将本地代码推送到GitHub仓库。

### 部署到Vercel

1. 访问 [Vercel官网](https://vercel.com) 并登录
2. 点击"New Project"按钮
3. 选择"Import Git Repository"
4. 搜索并选择您刚刚创建的GitHub仓库
5. 点击"Import"按钮
6. 在配置页面，保持默认设置，点击"Deploy"按钮
7. 等待部署完成，Vercel会提供一个可访问的URL

### 部署到Netlify

1. 访问 [Netlify官网](https://www.netlify.com) 并登录
2. 点击"Add new site"按钮，选择"Import an existing project"
3. 选择"GitHub"并授权Netlify访问您的GitHub账号
4. 搜索并选择您的GitHub仓库
5. 在配置页面，设置构建命令为 `npm run build`，发布目录为 `dist`
6. 点击"Deploy site"按钮
7. 等待部署完成，Netlify会提供一个可访问的URL

### 部署到GitHub Pages

1. 确保您的项目已经推送到GitHub仓库
2. 安装 `gh-pages` 包：
   ```bash
   npm install --save-dev gh-pages
   ```
3. 在 `package.json` 文件中添加以下脚本：
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
4. 构建项目：
   ```bash
   npm run build
   ```
5. 部署到GitHub Pages：
   ```bash
   npm run deploy
   ```
6. 等待部署完成，您的网站将可通过 `https://您的用户名.github.io/您的仓库名` 访问

## 目录结构

```
src/
├── components/     # React组件
├── contexts/       # React Context
├── hooks/          # 自定义Hooks
├── lib/            # 工具函数
├── pages/          # 页面组件
├── App.tsx         # 应用主组件
├── main.tsx        # 应用入口
└── index.css       # 全局样式
```

## 联系方式

如有任何问题或建议，请联系我们：

- 邮箱：info@rainforesteducation.com
- 电话：400-123-4567