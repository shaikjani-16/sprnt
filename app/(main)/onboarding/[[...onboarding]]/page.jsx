"use client";
import { OrganizationList, useOrganization } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import React from "react";

const Onboadrding = () => {
  const { organization } = useOrganization();
  console.log(organization);
  const router = useRouter();
  useEffect(() => {
    if (organization) router.push(`/organization/${organization.slug}`);
  }, [organization]);
  return (
    <div className="flex justify-center items-center pt-15">
      <OrganizationList
        hidePersonal
        afterCreateOrganizationUrl={"/organzation/:slug"}
        afterSelectOrganizationUrl={"/organization/:slug"}
      />
    </div>
  );
};

export default Onboadrding;
