import { takeEvery, put, call } from "redux-saga/effects";
import { axiosInstance } from "../../utils/http";
import {
  fetchProductsRequested,
  fetchProductsSucceeded,
  fetchProductsFailed,
} from "../slices/productSlice";
import { Product } from "../../types";
import { AxiosResponse } from "axios";

function* fetchProducts(): Generator {
  try {
    const response = yield call(() => axiosInstance.get(""));
    const products: Product[] = (response as AxiosResponse<Product[]>).data;
    yield put(fetchProductsSucceeded(products));
  } catch (error) {
    console.log("Error fetching products", error);

    if (error instanceof Error) {
      yield put(fetchProductsFailed(error.message));
    } else {
      yield put(fetchProductsFailed("An unknown error occurred"));
    }
  }
}

export function* watchFetchProducts() {
  yield takeEvery(fetchProductsRequested.type, fetchProducts);
}

export default watchFetchProducts;
