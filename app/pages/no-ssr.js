import dynamic from "next/dynamic";

const Test = dynamic(() => import("../components/Test"), { ssr: false })

export default function NoSSR() {
  return <Test />
}