// feed 폴더 아래의 파일들은 다 이 레이아웃을 사용하겠다는 것
import React from "react";

interface Props {
  children: any;
}
export default function Layout({ children }: Props) {
  return (
    <div className="flex divide-x-2 p-5">
      <div>
        <h1>Feed</h1>
      </div>
      <div className="flex-1 pl-5">
        {/* feed 폴더 밑에 있는 모든 주소는 바로 이 children 자리 */}
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
