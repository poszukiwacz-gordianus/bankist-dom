import { useRouter } from "next/navigation";

export default function useRedirect(to) {
  const router = useRouter();

  return router.push(to);
}
