import Image, { ImageProps } from "next/image";
import { Suspense } from "react";
import { Skeleton } from "./skeleton";


function Loading(props: ImageProps) {
  return <Skeleton {...props} />
}

export default function Imag(props: ImageProps) {
  return (
    <Suspense fallback={<Loading {...props} />}>
      <Image {...props} />
    </Suspense>
  )
}
