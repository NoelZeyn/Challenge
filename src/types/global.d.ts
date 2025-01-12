declare global {
    interface Window {
      particlesJS: {
        (tagId: string, options: object): void;
        load: (tagId: string, configPath: string, callback?: () => void) => void;
      };
    }
  }
  
  export {};
  