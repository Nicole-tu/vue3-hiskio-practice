const Add = (a, b) => {
  return a + b;
};

export const Name = "Mike";
export const Age = 12;

export const Remove = (a, b) => a - b;

export default Add;


// 一個module 的 export只能有一個default
// 其他export的參數只能用const丟出去 外面要用解構的方式取得
