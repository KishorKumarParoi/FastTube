"use client";

import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    console.log("Where am I rendered now?");
  }, []);

  return <div>page</div>;
};

export default Page;
