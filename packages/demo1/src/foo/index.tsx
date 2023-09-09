import React from 'react';

type IFooProps = {
  /**
   * @description 标题
   * @default "默认值"
   */
  title: string;
};
const Foo = (props: IFooProps) => <h4>{props.title}</h4>;

export default Foo;
