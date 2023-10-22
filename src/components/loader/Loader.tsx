import { FC } from "react"

type Props = {
    isLoading: boolean
}
const Loader: FC<Props> = ({isLoading}) => {
    return isLoading ? <div>Loading your products...</div> : null;
}

export default Loader;