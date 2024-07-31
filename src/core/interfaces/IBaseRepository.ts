export interface IBaseRepository<T> {
  getAll();

  getById(id: number);

  getOneBy(where: Record<string, unknown>);

  update(entity: Partial<T>, where: Record<string, unknown>);

  delete(where: Record<string, unknown>);

  create(entity: T);
}
