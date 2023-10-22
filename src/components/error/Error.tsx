import { FC } from "react"

type Props = {
    error: string
}
const Error: FC<Props> = ({error}) => {
    return error ? <div>{`An error occured while getting your products: ${error}`}</div> : null;
}

export default Error;