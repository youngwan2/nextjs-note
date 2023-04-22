"use client"; // 에러 컴포넌트는 클라이언트 컴포넌트에서 가능

import { useEffect } from "react";

type ErrorType = {
  error: Error;
  reset: () => void;
};
export default function Error({ error, reset }: ErrorType) {
  // 마운트 이후 에러가 발생하면 콘솔 로그에 출력한다.
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // 에러 발생 시 사용자로 하여금 재렌더링를 시도토록 한다.
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
