---
nav: demo1
group:
  title: 函数
  order: 1
toc: content
---

# getName2

获取完整名字2

## 代码演示

```tsx | pure
import { getName2 } from '@liangskyli/demo1';

export default () => <div>{getName2('name2')}</div>;
```

## API

### getName

| 参数  | 说明  | 类型   | 默认值    |
| ----- | ----- | ------ | --------- |
| name1 | 名字1 | string | -         |
| name2 | 名字2 | string | `default` |
