import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const PostPagination = ({pageContext}) => {
  const [currentPage] = useState(pageContext.currentPage)
  const [numPages] = useState(pageContext.numPages)
  const [pagination, setPagination] = useState([])
  useEffect(() => {
    let leftArr = []
    let rightArr = []

    for(let i = 1; i <= 5; i++){
      if(currentPage-i > 0){
        leftArr.unshift(currentPage-i)
      }
      if(currentPage+i <= numPages){
        rightArr.push(currentPage+i)
      }
    }

    leftArr.push(currentPage)

    setPagination(pagination => pagination.concat(leftArr).concat(rightArr))
  }, []);
  let pathname = typeof window !== "undefined" ? window.location.pathname : ""
  if(pathname.split("/").slice(-1)[0] !== ""){
    pathname = pathname.slice(0, -1)
  }

  return (
    <Pagination>
      {pagination.map(( page ) => (
        // why we've to include 'key'?
        // => Each child in a list should have a unique "key" prop.
        <List key={page}>
          {page === 1
            ?<Link
              style={{fontWeight:(page === currentPage)?700:500,
                      fontSize: (page === currentPage)?22:19}}
              to={`${pathname}`}>
              {page}
              </Link>
            :<Link
              style={{fontWeight:(page === currentPage)?700:500,
                      fontSize: (page === currentPage)?22:19}}
              to={`${pathname}${page}`}>
              {page}
            </Link>
          }
        </List>
      ))}
    </Pagination>
  )
}

const List = styled.div`
  display: inline-block;
  width: fit-content;
  padding: 0 3px;
  height: 30px;
  line-height: 200%;
`;
const Pagination = styled.div`
  display: flex;
  height: 30px;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default PostPagination