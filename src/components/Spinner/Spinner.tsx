import { useEffect, useRef, useState } from "react";
import { Container, PawImg, pawProps } from "./Style";

const Spinner = () => {
    const cRef = useRef<HTMLDivElement | null>(null);
    const [parentWidth, setParentWidth] = useState<number>(0);
    useEffect(() => {
        if (cRef.current) {
            setParentWidth(cRef.current.offsetWidth);
        }
    }, []);

    const [result, setResult] = useState<React.ReactElement<pawProps>[]>([]);
    useEffect(() => {
        if (parentWidth != 0) {
            const interval = setInterval(() => {
                switch (result.length) {
                    case 0:
                        console.log("h");
                        setResult((prevResult) => [
                            ...prevResult,
                            <PawImg top={165} left={parentWidth / 2 - 50} />,
                        ]);
                        break;
                    case 1:
                        setResult((prevResult) => [
                            ...prevResult,
                            <PawImg top={130} left={parentWidth / 2 + 5} />,
                        ]);
                        break;
                    case 2:
                        setResult((prevResult) => [
                            ...prevResult,
                            <PawImg top={85} left={parentWidth / 2 - 40} />,
                        ]);
                        break;
                    case 3:
                        setResult((prevResult) => [
                            ...prevResult,
                            <PawImg top={50} left={parentWidth / 2 + 15} />,
                        ]);
                        break;
                    case 4:
                        setResult([]);
                        break;
                }
            }, 800);

            return () => clearInterval(interval);
        }
    }, [result, parentWidth]);

    return (
        <Container ref={cRef}>
            {result}
            <text>로딩중...</text>
        </Container>
    );
};

export default Spinner;
