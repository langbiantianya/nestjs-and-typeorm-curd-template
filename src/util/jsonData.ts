export class JsonData {
  message: string;
  code: boolean;
  data: any;
  constructor(message?: string, code?: boolean, data?: any) {
    this.message = message;
    this.code = code;
    this.data = data;
  }
}
