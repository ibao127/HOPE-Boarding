export interface IconSVGProps {
  width?: any;
  height?: any;
  color?: string;
}

export interface StudentHomeProps {
  name: string;
  class: string;
  id: string;
  fee: string;
}

export interface Student {
  name: string;
  id: string;
  dob: string;
  parentName: string;
  hometown: string;
  class: string;
}

export interface MealDataProps {
  name: string; // vietnamese food name
  catergory: string; //Bữa sáng || Bữa trưa || Vặt
  star: number; // 1-5
  order: number; // max 2000
  like: number; //ex: 26%
}

export interface StudentDetailTradeProps {
  label: string;
  date: string;
  amount: string;
  isUp: boolean;
}
