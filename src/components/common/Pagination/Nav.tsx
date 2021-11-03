import {React} from 'react';
import "./nav.scss";
import Pagination from '@material-ui/lab/Pagination';



export const Nav =()=> {

  return (
   
    <div className="nav">
     <div className="container"> <Pagination count={500} shape="rounded" /> </div>
    </div>
  );
}