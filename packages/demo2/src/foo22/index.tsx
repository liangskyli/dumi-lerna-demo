type IFooProps = {
  /**
   * @description 标题2
   * @default "默认值"
   */
  title: string;
};
const Foo22 = (props: IFooProps) => <h4>{props.title}</h4>;

export default Foo22;
