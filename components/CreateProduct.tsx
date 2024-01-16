"use client";

import { useState } from "react";
import CreateProModel from "./CreateProModel";

const CreateProduct = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-amber-600 font-semibold px-4 py-2 text-white hover:bg-amber-500 duration-300 rounded-lg"
      >
        CreateProduct
      </button>
      {open && <CreateProModel setOpen={setOpen} />}
    </>
  );
};

export default CreateProduct;
