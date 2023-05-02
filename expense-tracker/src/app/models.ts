export interface User {
    id: number;
    firstName: string;
    lastName: string;
    totalExpenses: number;
  }
  
  export interface Expense {
    id: number;
    userId: number;
    category: string;
    description: string;
    cost: number;
  }
  