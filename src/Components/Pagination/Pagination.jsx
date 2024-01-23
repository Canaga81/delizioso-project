import React from "react";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex justify-center gap-4 mt-16">
      {pages.map((page, idx) => {
        return <button className="bg-[#FF8A00] bg-opacity-10 text-[#FF8A00] text-[16px] font-primary font-normal w-[45px] h-[45px] hover:bg-[#FF8A00] hover:text-white rounded-[15px] transition-all duration-300" onClick={() => setCurrentPage(page)} key={idx}>{page}</button>;
      })}
    </div>
  );
};

export default Pagination;