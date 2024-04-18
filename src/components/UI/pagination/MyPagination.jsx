import React from "react";
import { getArrayPages } from "../../util/pages";

const MyPagination = ({ totalPages, page, changePage }) => {
    let arrayPages = getArrayPages(totalPages);

    return (
        <div className='page-wrapper'>
            {arrayPages.map((p) => (
                <span
                    onClick={() => {
                        changePage(p);
                    }}
                    key={p}
                    className={page === p ? "page page__current" : "page"}
                >
                    {p}
                </span>
            ))}
        </div>
    );
};

export default MyPagination;
