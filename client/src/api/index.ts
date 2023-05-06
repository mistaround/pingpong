import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:4000"

interface IHistory {
    name: string;
    wins: number;
    points: number;
}

type ApiDataType = {
    message: string
    status: string
    history: IHistory[]
}

export const getHistory = async (): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const history: AxiosResponse<ApiDataType> = await axios.get(
        baseUrl + "/api/history"
      )
      return history;
    } catch (error : any) {
      throw new Error(error);
    }
}

export const updateHistory = async (player: string, points: number): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const history: AxiosResponse<ApiDataType> = await axios.put(
            baseUrl + "/api/history" + "?player=" + player + "&points=" + points
        )
        return history;
    } catch (error : any) {
        throw new Error(error);
    }
}