import React from "react";
import { useDispatch } from "react-redux";
import { ArticlesActionCreators } from "../../redux/reducers/articles/actionCreators";
import styles from './Pagination.module.scss'
const Pagination = ({ perPage, totalPosts }) => {
  const pages = [];
  const dispatch = useDispatch()
  for (let i = 1; i <= Math.ceil(totalPosts / perPage); i++) {
    pages.push(i);
  }
  
  return (
    <div>
      <ul className={styles.Pagination}>
        {pages.map((number) => (
          <li className={styles.PaginationItem} key={number}>
              <button className={styles.PaginationItemButton} onClick={() => dispatch(ArticlesActionCreators.setCurrentPage(number))}>
              {number}
              </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
