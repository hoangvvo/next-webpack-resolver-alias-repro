import { client } from "@foo/api";
import { Provider } from "urql";

export default function Test() {
  return <Provider client={client}><div>{client.url}</div></Provider>
}