"use client";

const Pagination = ({ Count, page, setPage }) => {
  let hasPro = page * 6 >= Count - 6;

  return (
    <div className="flex my-6 mt-16 justify-center items-center gap-6">
      <button
        className="bg-amber-700 hover:bg-transparent disabled:cursor-not-allowed disabled:bg-amber-950 duration-300 border-amber-800 border px-4 py-2 text-sm"
        disabled={page == 0}
        onClick={() => setPage((prev: number) => prev - 1)}
      >
        Previous
      </button>
      <button
        disabled={hasPro}
        className="bg-amber-700 hover:bg-transparent disabled:bg-amber-950 disabled:cursor-not-allowed duration-300 border-amber-800 border px-4 py-2 text-sm"
        onClick={() => setPage((prev: number) => prev + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
