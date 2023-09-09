---
nav: demo1
group:
  title: 函数
  order: 1
toc: content
---

# getName

获取完整名字

## 代码演示

```tsx | pure
import { getName } from '@liangskyli/demo1';

export default () => <div>{getName('name1')}</div>;
```

## API

### getName

| 参数  | 说明  | 类型   | 默认值    |
| ----- | ----- | ------ | --------- |
| name1 | 名字1 | string | -         |
| name2 | 名字2 | string | `default` |
