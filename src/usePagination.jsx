import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function usePagination() {
    const [queryParams, setQueryParams] = useSearchParams();
    const [currPage, setCurrPage] = useState(queryParams.get("page") ? Number(queryParams.get("page")) : 1);

    const navigate = useNavigate();

    useEffect(function updateQueryStringOnCurrPageChange() {
        if (!Number.isInteger(currPage)) {
            navigate("/404");
            return;
        }
        setQueryParams(new URLSearchParams({ page: currPage }));
    }, [currPage]);

    return [currPage, setCurrPage];
}