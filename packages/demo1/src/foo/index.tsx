import './index.less';

type IFooProps = {
  /**
   * @description 标题
   * @default "默认值"
   */
  title: string;
};
const Foo = (props: IFooProps) => (
  <div data-testid="foo" className="foo-title">
    {props.title}
  </div>
);

export default Foo;
