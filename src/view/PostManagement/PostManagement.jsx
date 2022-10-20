import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CPagination,
  CPaginationItem,
  CSpinner,
  CButton,
  CFormInput,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilList, cilSearch } from "@coreui/icons";
import { postApi } from "api/service/post";
import { useState, useEffect } from "react";
import Modal from "./component/Modal";
function PostManagement() {
  console.log("render post");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [listPost, setListPost] = useState([]);
  const [currentPost, setCurrentPost] = useState({});
  const [isShowModal, setIsShowModal] = useState(false);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    initData();
  }, []);
  const initData = async () => {
    let payload = {
      params: {
        _page: currentPage,
        _limit: 10,
      },
    };
    if (filter) payload.params.userId = filter;
    setIsLoading(true);
    let res = await postApi.getListPost(payload);
    setIsLoading(false);
    setListPost(res.data);
  };
  const handleClick = (type) => {
    if (type == "previous") {
      if (currentPage === 1) return;
      setCurrentPage(currentPage - 1);
      initData();
    } else {
      if (currentPage === 9) return;
      setCurrentPage(currentPage + 1);
      initData();
    }
  };
  const handleSetCurrentPost = (post) => {
    setCurrentPost(post);
    setIsShowModal(true);
  };
  const handleChangeFilter = (e) => {
    setFilter(e.target.value);
  };
  const handleFilter = () => {
    initData();
  };
  return (
    <div className="post-management">
      <div className="title-page">Users Management</div>
      <div className=" ml-12 relative">
        <div className="flex justify-end">
          <div className="w-56 mr-1">
            <CFormInput
              value={filter}
              onChange={handleChangeFilter}
              placeholder="Filter UserID"
            />
          </div>
          <CButton onClick={handleFilter} size="sm">
            <CIcon icon={cilSearch} size="xl" />
          </CButton>
        </div>
        <CTable striped style={{ minHeight: "500px" }}>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell className="col-md-1" scope="col">
                ID
              </CTableHeaderCell>
              <CTableHeaderCell className="col-md-1" scope="col">
                User ID
              </CTableHeaderCell>
              <CTableHeaderCell className="col-md-9" scope="col">
                Title
              </CTableHeaderCell>
              <CTableHeaderCell className="col-md-1" scope="col">
                Action
              </CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          {isLoading ? (
            ""
          ) : (
            <CTableBody>
              {listPost.map((post) => {
                return (
                  <CTableRow key={post.id}>
                    <CTableHeaderCell scope="row">{post.id}</CTableHeaderCell>
                    <CTableDataCell>{post.userId}</CTableDataCell>
                    <CTableDataCell>{post.title}</CTableDataCell>
                    <CTableDataCell>
                      <CButton
                        size="sm"
                        color="success"
                        variant="outline"
                        onClick={() => handleSetCurrentPost(post)}
                      >
                        View
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                );
              })}
            </CTableBody>
          )}
        </CTable>
        {isLoading ? <CSpinner className="absolute top-2/4 left-2/4" /> : ""}
        <div className="flex justify-end">
          <CPagination size="sm" aria-label="Page navigation example">
            <CPaginationItem
              className="cursor-pointer"
              onClick={() => handleClick("previous")}
            >
              {"<"}
            </CPaginationItem>
            <CPaginationItem>{currentPage}</CPaginationItem>
            <CPaginationItem
              className="cursor-pointer"
              onClick={() => handleClick("next")}
            >
              {">"}
            </CPaginationItem>
          </CPagination>
        </div>
      </div>
      <Modal
        post={currentPost}
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
      ></Modal>
    </div>
  );
}

export default PostManagement;
