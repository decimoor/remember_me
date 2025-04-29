import type { Card as CardProps } from "~/api/types";
import { Card as CardUI } from '@chakra-ui/react';

export const Card = ({ question, answer, options }: CardProps) => {
    return (
        <CardUI.Root gap="2" width="full" padding={"10"} minWidth={"72"}>
            <CardUI.Title>
                {question}
            </CardUI.Title>
            <CardUI.Body>
                {options.map((option) => (
                    <span>{option.text}</span>
                ))}
            </CardUI.Body>
        </CardUI.Root>
    )
}