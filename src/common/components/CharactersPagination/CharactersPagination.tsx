import {PAGE_SIZE} from '@/common/constants';
import {type ChangeEvent, useEffect} from 'react';
import {Pagination} from '@mui/material';

type Props = {
    totalCount: number
    page: number
    setPage: (page: number) => void
};
export const CharactersPagination = ({totalCount, page, setPage}: Props) => {

    useEffect(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [page]);

    const changePage = (_: ChangeEvent<unknown>, page: number) => {
        setPage(page)

    }

    return (
        <>
            <Pagination
                count={Math.ceil(totalCount / PAGE_SIZE)}
                size='medium'
                page={page}
                onChange={changePage}
                shape='rounded'
                color='primary'
            />
        </>
    )
};