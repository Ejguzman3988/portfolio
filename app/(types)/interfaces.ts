export interface Todo {
  id: number;
  content: string;
  completed: boolean;
  order: null | number;
  createdAt: Date;
  updatedAt: Date;
}
