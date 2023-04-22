import { NextRequest, NextResponse } from "next/server";


//  전체 페이지에 대한 미들웨어를 설정하는 경우우
export function middleware(request:NextRequest){
    console.log('미들웨어가 실행되고 있음')
    if(request.nextUrl.pathname.startsWith('/products/1004'))
        console.log("미들웨어 - 경로를 리다이렉팅함")
        return NextResponse.redirect(new URL('/products',request.url))
}

// 특정한 경우에만 미들웨어를 설정하는 경우
export const config = {
    // matcher 속성의 값으로 경로를 지정해주면, 지정한 경로에 대해서만 미들웨어를 실행한다.
    matcher : '/products/:path*'
}