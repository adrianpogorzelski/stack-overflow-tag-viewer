import PaginationButtons  from '../components/paginationButtons';
import '../output.css'

export default {
    title: 'PaginationButtons',
    component: PaginationButtons,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export const FirstPage = {
    args: {
        currentPage: 1,
        hasMore: true
    }
};

export const NextPages = {
    args: {
        currentPage: 2,
        hasMore: true
    }
}

export const LastPage = {
    args: {
        currentPage: 3,
        hasMore: false
    }
}
