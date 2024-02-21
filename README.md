- 清除快取指令 `npm cache clean --force`
- 使用外連結 svg 方式
  在 index.html 的 head 新增

```html
<script
  type="module"
  src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
></script>
<script
  nomodule
  src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
></script>
```

並且在 app.module.ts 裡新增

```typescript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

schemas: [CUSTOM_ELEMENTS_SCHEMA];
```

防止他認不出新的標籤

- 新套件 better comment
  [參考色系](https://www.ysdaima.com/morandicolor#google_vignette)
  可用註釋

```html
<!-- ! -->
紅色
<!-- ? -->
藍色
<!-- // -->
灰色加刪除線
<!-- | -->
橘色
<!-- * -->
綠色
```

- [示範網站](https://youtu.be/CjVGp5kGHxA?t=12524)
