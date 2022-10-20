import { ApiClient } from "../config";

const postApi = {
  // getListElectronic: (payload) => {
  //     return ApiClient.post('electronic-items',payload);
  // },
  // getListBook: (payload) => {
  //     return ApiClient.post('book-search', payload);
  // }
  //   updatePost: (payload) => {
  //     return ApiClient.put(`posts/${payload.id}`, payload.data);
  //   },
  getListPost: (payload) => {
    return ApiClient.get("posts", payload);
  },
};

export { postApi };
