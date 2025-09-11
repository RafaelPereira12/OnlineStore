import Wrapper from "../base/Wrapper";
import { useGlobalContext } from "~/context/globalContext";

export default function Pagination( length: PaginationProps) {
    const {currentPage, setCurrentPage} = useGlobalContext();

    return(
        <Wrapper>
                    <div className="flex justify-center mt-4 gap-2">
                    <div className="flex justify-center mt-2 gap-1">

                    {Array.from({ length: length.length.length }, (_, i) => (
                    <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={currentPage === i + 1 ? "font-bold" : ""}
                    >
                    {i + 1}
                    </button>
                    ))}
                    </div>

                    <button onClick={() => setCurrentPage(length.length.length )}
                    >
                    {'>>'}
                    </button>
                    </div>
       </Wrapper>
    )
}

type PaginationProps = {

    length: number[],
};