import Skeleton from "react-loading-skeleton";

const SkeletonDT = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10 p-4 px-8">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <div className="relative h-96">
            <Skeleton className="w-full h-full" />
          </div>
          <div className="flex h-40 mt-10 justify-center gap-3 w-full bg-ed-500">
            <Skeleton width={150} height={150} className=" rounded-md" />
            <Skeleton width={150} height={150} className=" rounded-md" />
            <Skeleton width={150} height={150} className=" rounded-md" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Skeleton height={30} width={200} className="  rounded-md" />
          <Skeleton height={25} width={50} className="w-10 h-5 rounded-md" />
          <Skeleton height={20} className="w-40 h-5 rounded-md" />
          <Skeleton height={20} className="w-40 h-5 rounded-md" />
          <Skeleton height={20} className="w-40 h-5 rounded-md" />
          <Skeleton height={20} className="w-40 h-5 rounded-md" />

          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-6 ">
              <Skeleton
                width={100}
                height={30}
                className="w-10 h-5 rounded-md"
              />
              <Skeleton className="w-20 h-10 rounded-md" />
            </div>
            <div className="grid grid-cols-3 gap-3 my-4 ">
              <div className="flex gap-1 items-center">
                <Skeleton width={20} className="h-5 rounded-md" />
                <Skeleton width={100} className="h-6  rounded-md" />
              </div>
              <div className="flex gap-1 items-center">
                <Skeleton width={20} className="h-5 rounded-md" />
                <Skeleton width={100} className="h-6  rounded-md" />
              </div>
              <div className="flex gap-1 items-center">
                <Skeleton width={20} className="h-5 rounded-md" />
                <Skeleton width={100} className="h-6  rounded-md" />
              </div>
            </div>

            <div className="flex justify-end">
              <button className="text-black hover:text-amber-600 px-4 py-2 bg-amber-600 hover:bg-transparent border border-amber-600">
                Clear
              </button>
            </div>

            <div className="flex items-center gap-3">
              <Skeleton width={100} className="w-10 h-10 rounded-md" />
              <Skeleton width={100} className="w-20 h-10 rounded-md" />
            </div>
          </div>
        </div>
      </div>
      <div className=" my-20">
        <div className="flex mb-10 justify-center gap-2 border-b-2 border-gray-900">
          <Skeleton width={200} className="w-40 h-10 rounded-md" />
          <Skeleton width={200} className="w-40 h-10 rounded-md" />
          <Skeleton width={200} className="w-40 h-10 rounded-md" />
        </div>
        <div className="flex flex-col gap-3">
          <Skeleton className="w-80 h-5 rounded-md" />
          <Skeleton className="w-80 h-5 rounded-md" />
          <Skeleton width={300} className="w-60 h-5 rounded-md" />
        </div>
      </div>
      <div className="my-20">
        <h1 className="uppercase text-2xl pb-24 font-medium text-center">
          related products
        </h1>
        <div className="grid mb-16 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <Skeleton className="w-60 h-72 rounded-md" />
          <Skeleton className="w-60 h-72 rounded-md" />
          <Skeleton className="w-60 h-72 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonDT;
