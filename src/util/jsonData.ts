export class JsonData {
  constructor(
    public message?: string,
    public code?: boolean,
    public data?: any,
  ) {}
  static success(data?: any): JsonData {
    return new JsonData('success', true, data);
  }
  static error(msg?: string): JsonData {
    return new JsonData(msg ? msg : 'erro', false);
  }
}
