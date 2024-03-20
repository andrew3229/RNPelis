import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "./http.adapter";


interface Options {
    baseUrl: string;
    params: Record<string, unknown>;
}

export class AxiosAdapter implements HttpAdapter {

    private axiosInstance: AxiosInstance;

    constructor(options: Options) {
        this.axiosInstance = axios.create({
            baseURL: options.baseUrl,
            params: options.params
        })
    }

    async get<T>(url: string, options?: Record<string, unknown> | undefined): Promise<T> {
        try {
            const { data } = await this.axiosInstance.get(url, options);

            return data;

        } catch {
            throw new Error(`Error en peticion get ${url}`);
        }
    }

}