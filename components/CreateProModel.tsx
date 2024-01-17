"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { CreatePro } from "@/actions/action";
import axios from "axios";
import { uploadCloud } from "@/lib/Cloudinary";
import { Console } from "console";
import { useFormStatus } from "react-dom";

// interface props {
//   setOpen: (boolean) => void;
// }
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const CreateProModel = ({ setOpen }) => {
  const { pending } = useFormStatus();

  console.log(pending);

  const productSchema = z.object({
    title: z.string().min(3, { message: "please add title to product" }),
    description: z
      .string()
      .min(4, { message: "please add description to product" }),
    small: z.number(),
    medium: z.number(),
    large: z.number(),
    images: z
      .any()
      .refine(
        (files) => files?.[0]?.size <= MAX_FILE_SIZE,
        `Max image size is 5MB.`
      )
      .refine(
        (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, .png and .webp formats are supported."
      ),
  });

  type Schema = z.infer<typeof productSchema>;

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(productSchema),
  });

  const [optText, setOptText] = useState("");
  const [optPrice, setOptPrice] = useState(0);
  const [extraOptions, setExtraOptions] = useState<any>([]);
  const addOption = () => {
    setExtraOptions([...extraOptions, { text: optText, price: optPrice }]);
    setOptText("");
    setOptPrice(0);
  };
  //   const [ImgUrls, setImgUrls] = useState([]);
  const onSubmit = async (data: Schema) => {
    var imagesFiles = data.images;

    try {
      let arr = [];

      for (let i = 0; i < imagesFiles.length; i++) {
        const data = await uploadCloud(imagesFiles[i]);
        arr.push(data);
      }

      // console.log(arr);
      const images = arr?.map((image) => image.url);
      // console.log(images);

      const dataPtro = {
        title: data.title,
        description: data.description,
        price: [data.small, data.medium, data.large],
        extraOptions,
        images,
      };
      await CreatePro(dataPtro);
    } catch (error) {
      console.log(error);
    }

    setOpen(false);
    reset();
  };

  return (
    <div className="fixed z-50 top-0 left-0 w-full h-screen bg-black/90 flex justify-center items-center">
      <div className="max-w-lg relative w-full rounded-lg p-6 bg-[#1a1c1f]">
        <span
          onClick={() => setOpen(false)}
          className="absolute right-5 cursor-pointer hover:text-red-500 text-2xl top-3"
        >
          x
        </span>
        <h1 className="text-center text-2xl mb-4 font-semibold">
          Add New Product
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="font-semibold mb-2" htmlFor="title">
              Title
            </label>
            {errors.title && (
              <span className="text-[10px] text-red-500">
                {errors?.title.message}
              </span>
            )}
            <input
              {...register("title")}
              className="pl-4 py-1 rounded-md outline-none placeholder:text-gray-400"
              type="text"
              name="title"
              placeholder="Product Title"
              id="title"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-2" htmlFor="desc">
              Description
            </label>
            {errors.description && (
              <span className="text-[10px] text-red-500">
                {errors?.description.message}
              </span>
            )}
            <input
              {...register("description")}
              className="pl-4 py-1 rounded-md outline-none placeholder:text-gray-400"
              type="text"
              name="description"
              placeholder="Product Description"
              id="desc"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-2" htmlFor="sm">
              Price
            </label>
            <div className="flex items-center gap-2">
              <div className="flex flex-col w-1/3 ">
                {errors.small && (
                  <span className="text-[10px] text-red-500">
                    {errors?.small.message}
                  </span>
                )}
                <input
                  {...register("small", { valueAsNumber: true })}
                  className="pl-4 py-1 rounded-md outline-none placeholder:text-gray-400"
                  type="number"
                  name="small"
                  placeholder="small"
                />
              </div>
              <div className="flex flex-col w-1/3 ">
                {errors.medium && (
                  <span className="text-[10px] text-red-500">
                    {errors?.medium.message}
                  </span>
                )}
                <input
                  {...register("medium", { valueAsNumber: true })}
                  className="pl-4  py-1 rounded-md outline-none placeholder:text-gray-400"
                  type="number"
                  name="medium"
                  placeholder="medium"
                />
              </div>
              <div className="flex flex-col w-1/3 ">
                {errors.large && (
                  <span className="text-[10px] text-red-500">
                    {errors?.large.message}
                  </span>
                )}
                <input
                  {...register("large", { valueAsNumber: true })}
                  className="pl-4 py-1 rounded-md outline-none placeholder:text-gray-400"
                  type="number"
                  name="large"
                  placeholder="large"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-2" htmlFor="extra">
              Etras Options
            </label>
            <div className="flex w-full items-center gap-2">
              <input
                className="pl-4 py-1 w-2/5 rounded-md outline-none placeholder:text-gray-400"
                type="text"
                name="extraOptions"
                placeholder="Ex: cheese.."
                value={optText}
                onChange={(e) => setOptText(e.target.value)}
              />

              <input
                className="pl-4 py-1 w-2/5 rounded-md outline-none placeholder:text-gray-400"
                type="number"
                name="optionPrice"
                value={optPrice}
                onChange={(e) => setOptPrice(e.target.value)}
                placeholder="Ex: price:$3"
              />

              <button
                onClick={addOption}
                className="px-3 py-1.5 rounded-md bg-blue-600"
              >
                Add
              </button>
            </div>
            <span>onion, cheese ..</span>
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-2" htmlFor="images">
              Etras Options
            </label>
            {errors.images && (
              <span className="text-[10px] text-red-500">
                {errors?.images.message}
              </span>
            )}
            <input
              {...register("images")}
              className=" rounded-md outline-none placeholder:text-gray-400"
              type="file"
              multiple
              name="images"
            />
          </div>
          <input
            type="submit"
            disabled={pending}
            value={"Create"}
            className="px-4 py-2 cursor-pointer rounded-md bg-green-500 font-semibold hover:bg-green-600 mt-3 duration-300 disabled:bg-slate-400 disabled:cursor-not-allowed"
          />
          {/* Create
          </> */}
          {/* <input type="file" name="" id="" /> */}
        </form>
      </div>
    </div>
  );
};

export default CreateProModel;
