export function purifyHtml() {}

/**
 * @param {number} input: number
 * @return number formatted, 100000 => 100,000
 */
export const formatNumber = (number: number | string) => {
  const value = number + '';
  const list = value.split('.');
  const prefix = list[0].charAt(0) === '-' ? '-' : '';
  let num = prefix ? list[0].slice(1) : list[0];
  let result = '';
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
};

export const isNil = (value: unknown) => value === null || value === undefined
