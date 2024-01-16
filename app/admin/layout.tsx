import { Protect } from "@clerk/nextjs";

const layout = ({ children }) => {
  return (
    <Protect
      permission="org:admin"
      fallback={
        <p className="min-h-[50vh] text-xl flex justify-center items-center">
          You do not have the <b className="text-red-500 mx-1">permissions</b>{" "}
          to create a product.
        </p>
      }
    >
      {children}
    </Protect>
  );
};

export default layout;
