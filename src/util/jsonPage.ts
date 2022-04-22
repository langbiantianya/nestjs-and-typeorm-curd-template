import { Page } from './page';
export class JsonPage {
  constructor(
    public message?: string,
    public code?: boolean,
    public data?: any,
    public pages?: Page,
  ) {}
}
