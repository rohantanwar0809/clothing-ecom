import { AxiosResponse } from "axios";
import {} from "redux-saga";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { Product } from "../../types";
import { axiosInstance } from "../../utils/http";
import {
  fetchProductsFailed,
  fetchProductsRequested,
  fetchProductsSucceeded,
} from "../slices/productSlice";

function* fetchProducts(): Generator {
  try {
    const query = yield select((state) => state.products.query);
    const sortBy = yield select((state) => state.products.sortBy);

    // Modify the URL based on the query term
    let mainUrl = "clothes";
    let urlParams = new URLSearchParams();
    if (query) {
      urlParams.append("title_like", query.toString());
    }
    if (sortBy) {
      const { type, order } = sortBy as { type: string; order: string };
      urlParams.append("_sort", type);
      urlParams.append("_order", order);
    }

    if (urlParams.toString().length > 0) {
      mainUrl = mainUrl + "?" + urlParams.toString();
    }

    const response = yield call(() => axiosInstance.get(mainUrl));

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
