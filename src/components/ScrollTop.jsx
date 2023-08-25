import React from "react";

// =================================================================
// *   Scroll Back To Top link built with Tailwind. Create a button
// *   that appears when you start scrolling and on click smooth scrolls
// *   you to the top of the page.
// *   =================================================================

export default function Scrolltop() {
  let mybutton;

  window.onscroll = function () {
    mybutton = document.getElementById("btn-back-to-top");
    scrollFunction(mybutton);
  };

  function scrollFunction(mybutton) {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  /** Function back to top */
  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  /** End Function back to top */

  return (
    <div>
      <button
        onClick={backToTop}
        id="btn-back-to-top"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: "none",
        }}
        class="relative items-center justify-center p-3 mb-2 mr-2 overflow-hidden rounded-full  group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400  focus:ring-pink-200 dark:focus:ring-pink-800"
      >
        <svg
          class="w-5 h-5 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13V1m0 0L1 5m4-4 4 4"
          />
        </svg>
      </button>
    </div>
  );
}
