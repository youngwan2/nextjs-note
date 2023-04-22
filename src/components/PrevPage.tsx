"use client";

import { useRouter } from "next/router";

export default function Prev() {
    const router = useRouter();

  return (
    <button
    type="button"
      onClick={() => {
        router.back()
      }}
    >
      이전 경로로 이동하기
    </button>
  );
}
