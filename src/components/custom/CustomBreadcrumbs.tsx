import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SlashIcon } from "lucide-react";
import { Link } from "react-router";

interface Breadcrumb {
    label: string;
    to: string;
}

interface Props {
    currentPage: string;
    breadcrumbs?: Breadcrumb[];
}

export const CustomBreadcrumbs = ({ currentPage, breadcrumbs=[] }: Props) => {
  return (
    <Breadcrumb className="my-5">
        <BreadcrumbList>
            <BreadcrumbItem>
                <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                </BreadcrumbLink>
            </BreadcrumbItem>
            {
                breadcrumbs.map((breadcrumb, index) => (
                    <div className="flex items-center">
                        <BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <SlashIcon/>
                            </BreadcrumbSeparator>
                            <BreadcrumbLink asChild>
                                <Link to={breadcrumb.to}>{breadcrumb.label}</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </div>
                ))
            }
            <BreadcrumbSeparator>
                <SlashIcon/>
            </BreadcrumbSeparator>
            <BreadcrumbItem >
                <BreadcrumbPage>{currentPage}</BreadcrumbPage>
            </BreadcrumbItem>

        </BreadcrumbList>
    </Breadcrumb>  
    )
}
