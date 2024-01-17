"use client";
import { useOrganizationList } from "@clerk/nextjs";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { checkAdmin } from "@/providers/redux/cartSlice";
const Layout = ({ children }: { children: ReactNode }) => {
  const { organizationList, isLoaded, setActive } = useOrganizationList();
  const router = useRouter();
  const [ShowLoader, setShowLoader] = useState(false);
  const [admin, setAdmin] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAdmin(admin));
  }, [admin, ShowLoader]);

  useEffect(() => {
    if (isLoaded) {
      // Find the admin organization from the loaded organization list
      const adminOrganization = organizationList.some(
        (org) => org.membership.role === "org:admin"
      );
      setAdmin(adminOrganization);
      // If the user is not an admin, redirect to the homepage
      if (!adminOrganization) {
        router.push("/"); // Replace '/' with the homepage URL
      } else {
        // If the user is an admin, no need to wait for the organization list; render the admin page directly
        setShowLoader(false);
      }
    }
  }, [isLoaded, organizationList]);

  return (
    <div>
      {ShowLoader ? (
        <div className="min-h-[70vh] text-3xl text-amber-600 font-semibold flex justify-center items-center">
          loading...
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default Layout;
