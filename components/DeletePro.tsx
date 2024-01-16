"use client";

import { DeleteProduct } from "@/actions/action";

const DeletePro = ({ id }: { id: string }) => {
  const handleDelete = async () => {
    await DeleteProduct(id);
  };
  return (
    <button
      onClick={handleDelete}
      className=" rounded-lg px-1.5 py-1 text-xs bg-red-600 hover:bg-red-700 duration-300"
    >
      Delete
    </button>
  );
};

export default DeletePro;
