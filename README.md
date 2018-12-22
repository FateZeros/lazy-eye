# Lazy

```bash
webpack 4.0 +

mobx 5.7.0 +
```

## Mobx

[Mobx 中文](https://cn.mobx.js.org)

```bash
npm install --save mobx

npm install --save mobx-react
```

### Mobx decorators

```bash
npm install --save-dev @babel/plugin-proposal-decorators
```

## 使用 React-router

```bash
 npm install --save react-router-dom
```

## 使用 less

```bash
npm install less --save

npm install less-loader --save
```

## 使用 Ant

```bash
npm install antd --save

// 全量使用 antd 样式。
import 'antd/dist/antd.css'
```

按需加载样式
修改 package.json 中 babel 配置, 增加 babel-plugin-import 的配置

```bash
npm install babel-plugin-import --save-dev

babel: {
  ...
  "plugins": [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
  ]
  ...
}
```

[Mobx decorators](https://babeljs.io/docs/en/babel-plugin-proposal-decorators)
