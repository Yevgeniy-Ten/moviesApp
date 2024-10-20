import {FC} from "react";
import "./pagination.css"
import classNames from "classnames";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = (props) => {
    const {totalPages, currentPage, onPageChange} = props;
    const pages = [];
    //max visible buttons is three
    // pagination with dots
    const maxVisibleButtons = 3;
    if (totalPages <= maxVisibleButtons + 1) {
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
    } else {
        if (currentPage <= maxVisibleButtons) {
            pages.push(1, 2, 3, '...', totalPages);
        } else if (currentPage > totalPages - maxVisibleButtons) {
            pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
        } else {
            pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
        }
    }

    return (
        <div className="pagination">
            <button
                className={"pagination__item"}
                onClick={() => {
                    if (currentPage > 1) {
                        onPageChange(currentPage - 1);
                    }
                }}
            >
                <img src="/icons/leftI.svg" alt=""/>
            </button>
            {pages.map((page, index) => (
                <button
                    key={index}
                    onClick={() => {
                        if (typeof page === "number") {
                            onPageChange(page);
                        }
                    }}
                    className={
                    classNames("pagination__item", {
                        "active": page === currentPage
                    })
                    }
                >
                    {page}
                </button>
            ))}
            <button
                className={"pagination__item"}
                onClick={() => {
                    if (currentPage < totalPages) {
                        onPageChange(currentPage + 1);
                    }
                }}
            >
                <img src="/icons/rightI.svg" alt="rightI"/>
            </button>
        </div>
    );
};

