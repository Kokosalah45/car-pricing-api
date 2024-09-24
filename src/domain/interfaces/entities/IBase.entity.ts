export abstract class IBaseEntity {
  private id?: string;

  constructor(id?: string) {
    this.id = id;
  }
  getID() {
    return this.id;
  }
}
