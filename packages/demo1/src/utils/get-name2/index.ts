type IGetName2 = (
  /** 名字1 */
  name1: string,
  /** 名字2 */
  name2?: string,
) => string;
const getName2: IGetName2 = (name1, name2 = 'default') => {
  return `${name1}-${name2}`;
};

export { getName2 };
