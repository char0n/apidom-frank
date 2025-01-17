class EphemeralArray {
  type = 'EphemeralArray';

  content: any[] = [];

  reference: any = undefined;

  constructor(content: any[]) {
    this.content = content;
    this.reference = [];
  }

  toReference() {
    return this.reference;
  }

  toArray() {
    this.reference.push(...this.content);
    return this.reference;
  }
}

export default EphemeralArray;
