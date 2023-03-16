export interface ListInt {
  userId: number;
  id: number;
  title: string;
  introduce: string;
}

export interface SelectDataInt {
  title: string;
  introduce: string;
  page: number;
  count: number; // 总条数
  pageSize: number; // 每页条数
}

export class IntData {
  list: ListInt[] = []; // 展示内容的数据
  selectData: SelectDataInt = {
    title: "",
    introduce: "",
    page: 1,
    count: 0,
    pageSize: 5,
  };
}
