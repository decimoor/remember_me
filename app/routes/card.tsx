import { Flex } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getCard } from "~/api/getCard";
import { Card } from "~/components";
import { useGetCardId } from "~/hooks"

export default function CardPage() {
    const cardId = useGetCardId();

    const { data: card, isFetching, isError } = useQuery({
        queryKey: ['cards', cardId],
        queryFn: async () => {
            if (cardId === undefined) return undefined;
            const data = await getCard(parseInt(cardId, 10));
            return data;
        }
    });

    if (isFetching) {
        return (
            <h1>Loading</h1>
        )
    };

    if (isError || card === undefined) {
        return (
            <h1>Error</h1>
        )
    }

    return (
        <Card {...card} />
    )
}