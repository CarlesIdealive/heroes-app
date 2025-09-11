import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../ui/button"


interface Props {
    totalPages: number;
}

export const CustomPagination = ({ totalPages }: Props) => {

const page = 15 as number;

  return (
    <div className="flex items-center justify-center space-x-2">
        <Button variant="outline" size="sm" disabled={page === 1}>
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
                >
                    {index + 1}
                </Button>
            ))
        }

        <Button variant="outline" size="sm" disabled={page === totalPages}>
            Next
            <ChevronRight className="h-4 w-4" />
        </Button>
    </div>  
    )
}
