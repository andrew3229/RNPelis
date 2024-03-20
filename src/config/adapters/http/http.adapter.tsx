
// crea una clase abstracta HttpAdapter que nos permita crear instancias y adaptar un modelo a cambios
export abstract class HttpAdapter {
    abstract get<T>(url: string, options?: Record<string, unknown>): Promise<T>;
}