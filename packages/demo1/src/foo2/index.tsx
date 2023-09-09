import React from 'react';

type IFoo2Props = {
  /**
   * @description 标题
   * @default "默认值"
   */
  title: string;
};
const Foo2 = (props: IFoo2Props) => <h4>{props.title}</h4>;

export default Foo2;
