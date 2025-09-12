import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../ui/button"
import { useSearchParams } from "react-router";


interface Props {
    totalPages: number;
}

export const CustomPagination = ({ totalPages }: Props) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const queryPage = searchParams.get("page") || '1';
    const page = isNaN(Number(queryPage)) ? 1 : Number(queryPage);

    const handlePageChange = (newPage: number) => {
        if (newPage < 1 || newPage > totalPages) return;
        searchParams.set("page", newPage.toString());
        setSearchParams(searchParams);
    }

  return (
    <div className="flex items-center justify-center space-x-2">
        <Button variant="outline" size="sm" disabled={page === 1} onClick={() => handlePageChange(page - 1)}>
            <ChevronLeft className="h-4 w-4" />
                Previous
        </Button>

        {
            // Create an array of page numbers based on totalPages prop
            Array.from({ length: totalPages }).map((_, index) => (
                <Button 
                    variant={index + 1 === page ? "default" : "outline"} 
                    size="sm" 
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                >
                    {index + 1}
                </Button>
            ))
        }

        <Button variant="outline" size="sm" disabled={page === totalPages} onClick={() => handlePageChange(page + 1)}>
            Next
            <ChevronRight className="h-4 w-4" />
        </Button>
    </div>  
    )
}
