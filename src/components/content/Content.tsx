import { FC } from "react";
import { ContentWrapper, InnerContent } from "./Content.styled";

type Props = {
    children?: React.ReactNode
};

const Content: FC<Props> = ({children}) => {

    return <ContentWrapper>
        <InnerContent>
            {children}
        </InnerContent>
    </ContentWrapper>
};

export default Content;