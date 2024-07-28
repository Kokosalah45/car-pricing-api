export interface IBaseRepository<T> {
  getAll(): Promise<T[]>;

  getById(id: number): Promise<T>;

  getOneBy(where: Record<string, unknown>);

  update(entity: Partial<T>, where: Record<string, unknown>);

  delete(where: Record<string, unknown>);

  create(entity: T);
}
