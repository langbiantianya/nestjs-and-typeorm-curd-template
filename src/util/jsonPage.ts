import { Page } from './page';
export class JsonPage {
  constructor(message?: string, code?: boolean, data?: any, pages?: Page) {
    this.message = message;
    this.code = code;
    this.data = data;
    this.pages = pages;
  }
  message: string;
  code: boolean;
  data: any;
  pages: Page;
}
