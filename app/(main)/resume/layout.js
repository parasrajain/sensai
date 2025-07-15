// import React from "react";

// const MainLayout = async ({ children }) => {
//   return <div className="container mx-auto mt-24 mb-20">{children}</div>;
// };

// export default MainLayout;
import { Suspense } from "react";
import { BarLoader } from "react-spinners";

export default function MainLayout({ children }) {
  return (
    <div className="px-5">
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="gray" />}
      >
        {children}
      </Suspense>
    </div>
  );
}