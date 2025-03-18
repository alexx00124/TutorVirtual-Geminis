// ~/types/my-types.d.ts
declare global {
  interface Task {
    id: number;
    title: string;
    created_at: string;
    completed: boolean;
  }
}

// Indica a TypeScript que este archivo es un módulo
export {};
