import { PropsChildren } from "../models";
import { Body, Footer, Header } from "./";

export default function Container({ children }: PropsChildren) {
    return (
        <>
            <Header />
            <Body>
                {children}
            </Body>
            <Footer />
        </>
    )
}