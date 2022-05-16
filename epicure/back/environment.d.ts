declare global {
  namespace NodeJS {
    interface ProcessEnv {
      USER: string | undefined;
    }
  }
}
export {};
