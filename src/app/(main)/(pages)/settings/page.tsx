import ProfileForm from "@/components/forms/profile-form";
import prisma from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const authUser = await currentUser();
  if (!authUser) return null;

  const user = await prisma.user.findUnique({
    where: {
      clerkId: authUser.id,
    },
  });

  const updateUserInfo = async (name: string) => {
     'use server'
    const updateUser = await prisma.user.update({
      where: {
        clerkId: authUser.id,
      },
      data: {
        name,
      },
    });
    return updateUser;
  };
  return (
    <div className="flex flex-col gap-4 relative">
      <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
        Settings
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
        </div>
      </div>
      <ProfileForm user={user} onUpdate={updateUserInfo} />
    </div>
  );
};

export default page;
