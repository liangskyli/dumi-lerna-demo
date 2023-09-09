type IGetName = (
  /** 名字1 */
  name1: string,
  /** 名字2 */
  name2?: string,
) => string;
const getName: IGetName = (name1, name2 = 'default') => {
  return `${name1}-${name2}`;
};

export { getName };
