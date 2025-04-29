import { useLocation } from "react-router"

const useGetCardId = () => {
    const { pathname } = useLocation();

    if (pathname.match(/\/cards\/\d+$/)) {
        const cardId = pathname.split('/').pop();
        return cardId;
    }

    return undefined;
}

export {
    useGetCardId
};