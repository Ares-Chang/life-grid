# life-grid (人生小格)

时间一天一天的过，日历一页一页的翻。

白驹过隙，时光荏苒，往事不再，珍惜现在，来看看你的人生修炼进度吧！

## 技术栈

- 💚 [Nuxt 3](https://nuxt.com/) - SSR, ESR, 约定路由, 组件自动导入, 等待...

- ⚡️ [Vite 3](https://github.com/vitejs/vite) - Instant HMR

- 🍍 [Pinia](https://pinia.esm.dev/) 使用 Pinia 管理状态, 参考 [./composables/user.ts](https://github.com/antfu/vitesse-nuxt3/blob/main/composables/user.ts)

- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

- 📦 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等，无需导入

- 📑 [Layout 系统](https://github.com/antfu/vitesse-nuxt3/tree/main/layouts)

- 😃 [各种图标集为你所用](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)

- 🦾 [TypeScript](https://github.com/microsoft/TypeScript), 超强壮

- ☁️ 零配置部署 [Netlify](https://www.netlify.com/)

## Plugins

预加载 Nuxt Modules

- [VueUse](https://github.com/vueuse/vueuse) - 有用的组合 Api 集合。

- [ColorMode](https://github.com/nuxt-community/color-mode-module) - dark/Light 模式自动检测

- [UnoCSS](https://github.com/antfu/unocss) - 按需加载原子 CSS 引擎。

- [Pinia](https://pinia.esm.dev/) - 直观，类型安全，轻便并且灵活的 Vue 存储。

## 环境

本项目使用 [vitesse-nuxt3](https://github.com/antfu/vitesse-nuxt3) 为起手模板，其他属性可参阅[官方仓库](https://github.com/antfu/vitesse-nuxt3)

运行需具备：

- **Node 环境 >= 14**
- **pnpm 包管理器**
- VSCode 编辑器
- Chrome 浏览器

## 须知

项目使用 `pnpm` 包管理工具，**现已锁定**，请统一使用，防止包加载混乱。

项目使用 `ESLint` 工具约定开发，需提前安装并配置。

## 现在开始吧!

克隆到本地

```shell
$ git clone https://github.com/Ares-Chang/life-grid.git
$ cd life-grid
$ pnpm install
$ pnpm run dev
```

**强推一个小工具 [ni](https://github.com/antfu/ni) ，用上之后爱不释手。**

```shell
$ git clone git@github.com:Ares-Chang/life-grid.git
$ cd life-grid
$ ni
$ nr dev
```
