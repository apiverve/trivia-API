declare module '@apiverve/trivia' {
  export interface triviaOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface triviaResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class triviaWrapper {
    constructor(options: triviaOptions);

    execute(callback: (error: any, data: triviaResponse | null) => void): Promise<triviaResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: triviaResponse | null) => void): Promise<triviaResponse>;
    execute(query?: Record<string, any>): Promise<triviaResponse>;
  }
}
