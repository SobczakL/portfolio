import { useEffect, useState } from "react";
import { Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";

export default function AboutContent() {
    const targetText = {
        0: "/ FULL STACK DEVELOPER",
        1: "/ TORONTO, CANADA",
        2: "/ USE YOUR KEYBOARD TO NAVIGATE",
    };

    const [placeholderText, setPlaceholderText] = useState(() => {
        let initState = {};
        Object.keys(targetText).forEach(
            (key) => (initState[key] = "-".repeat(targetText[key].length)),
        );
        return initState;
    });

    useEffect(() => {
        const intervalIds = [];

        Object.keys(targetText).forEach((key) => {
            const intervalId = setInterval(() => {
                setPlaceholderText((prevState) => {
                    let newText = prevState[key].split("");
                    for (
                        let j = getRandomIntInclusive(0, newText.length - 1);
                        j < newText.length;
                        j++
                    ) {
                        if (newText[j] !== targetText[key][j]) {
                            newText[j] = targetText[key][j];
                            break;
                        }
                    }
                    return {
                        ...prevState,
                        [key]: newText.join(""),
                    };
                });
            }, 100);

            intervalIds.push(intervalId);
        });

        return () => intervalIds.forEach((id) => clearInterval(id));
    }, []);

    function getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(
            Math.random() * (maxFloored - minCeiled + 1) + minCeiled,
        );
    }

    return (
        <div>
            {Object.keys(placeholderText).map((key) => (
                <Text fontSize={["body.sm", "body.md", "body.lg"]} key={key}>
                    {placeholderText[key]}
                </Text>
            ))}
        </div>
    );
}
