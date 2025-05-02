import axios, { AxiosError } from "axios";

export const isNetworkError = (error: unknown): boolean =>
  axios.isAxiosError(error) && !error.response;

export const isUnauthorized = (error: unknown): boolean =>
  axios.isAxiosError(error) && error.response?.status === 401;

export const isAxiosError = (error: unknown): error is AxiosError =>
  axios.isAxiosError(error);
