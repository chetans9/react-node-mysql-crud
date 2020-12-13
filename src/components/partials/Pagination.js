import { Link } from 'react-router-dom';
import React from 'react';
import { useLocation } from 'react-router-dom'

const Pagination = (props) => {

    const location = useLocation();
    // let activeClass = location.pathname === props.to ? 'nav-item active' : 'nav-item';

    let paginationItems = [];


    // let paginationItems = [<li className="page-item"><a className="page-link" href="#">1</a></li>, <li className="page-item"><a className="page-link" href="#">2</a></li> ];

    for (let i = 1; i <= 1; i++) {
        paginationItems.push(<li className="page-item" key={i}><a className="page-link" href="#">{i}</a></li>);
    }

    return (

        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {paginationItems}
            </ul>
        </nav>

    )
};

export default Pagination;