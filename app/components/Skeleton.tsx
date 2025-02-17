import clsx from "clsx"

import { Skeleton as ShadcnSkeleton } from "@/components/ui/skeleton"

interface SkeletonProps {
  className?: string
}

const Skeleton: React.FC<SkeletonProps> = (props) => {
  const { className } = props

  return <ShadcnSkeleton className={ clsx("h-full w-full rounded-sm bg-[#ECECED]", className) } />
}

export default Skeleton