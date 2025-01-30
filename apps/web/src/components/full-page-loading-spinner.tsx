import React from "react";
import { ImSpinner6 } from "react-icons/im";

function FullPageLoadingSpinner() {
  return (
    <section className="w-full h-96 flex-col space-y-10 flex items-center justify-center p-10">
      <span className="animate-spin text-gray-800">
        <ImSpinner6 size={40} />
      </span>
    </section>
  );
}

export default FullPageLoadingSpinner;
