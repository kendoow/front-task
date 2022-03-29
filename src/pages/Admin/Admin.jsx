import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import styles from './Admin.module.scss';
import NewsCard from '../../components/NewsCard/NewsCard'
const Admin = () => {
  return (
    <>
       <Header to={'admin/createPost'} title = 'Создать запись'/> 
      <NewsCard/>
    </>
  );
};

export default Admin;
