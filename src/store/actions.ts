export const ADD_TODO = '[Todo] ADD_TODO';

export class AddTodo {
  readonly type = ADD_TODO;
  constructor(public payload: any) {}
}
