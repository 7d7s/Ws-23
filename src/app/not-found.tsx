"use client"; 

import { usePathname, useRouter } from "next/navigation";

const NotFoundPage = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="container">
      <div className=" justify-center items-center">
          <div
            className="text-center flex-col flex justify-center items-center"
            style={{ height: 500 }}
          >
            <h1 style={{ fontSize: 100 }} className="text-red-900 font-bold">
              404 Page
            </h1>
            <p>
              Sorry, the page <b className="text-red-800">&quot;{pathname}&quot;</b> was not found!
            </p>
            <button
              className="rounded bg-dark-blue btn-airtel py-2 px-4 mt-3"
              onClick={() => router.push("/")}
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
  );
};

export default NotFoundPage;
