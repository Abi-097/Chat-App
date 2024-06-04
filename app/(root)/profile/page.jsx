"use client";
import { PersonOutline } from "@mui/icons-material";
import { useSession } from "next-auth/react";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import Loader from "@components/Loader";

const Profile = () => {
  const { data: session } = useSession();
  const user = session?.user;
  console.log(user);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (user) {
      reset({
        username: user?.username,
        profileImage: user?.profileImage,
      });
    }
    setLoading(false);
  }, [user]);

  const {
    register,
    watch,
    setValue,
    reset,
    handleSubmit,
    formState: { error },
  } = useForm();

  const uploadPhoto = (result) => {
    setValue("profileImage", result?.info?.secure_url);
  };

  const updateUser = async (data) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/users/${user._id}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setLoading(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="profile-page">
      <h1 className="text-heading3-bold">Edit Your Profile</h1>
      <form className="edit-profile" onSubmit={handleSubmit(updateUser)}>
        <div className="flex items-center justify-between">
          <div className="input mr-5">
            <input
              {...register("username", {
                required: "Username is required",
                validate: (value) => {
                  if (value.length < 3) {
                    return "Username must be at least 3 characters";
                  }
                },
              })}
              type="text"
              placeholder="Username"
              className="input-field"
            />
            <PersonOutline sx={{ color: "#737373" }} />
          </div>
          {error?.username && (
            <p className="text-red-500">{error.username.message}</p>
          )}
          <div>
            <CldUploadButton
              options={{ maxFiles: 1 }}
              onUpload={uploadPhoto}
              uploadPreset="e4dfjgci"
            >
              <Image
                src={
                  watch("profileImage") || user?.profileImage || "/person.jpg"
                }
                alt="profile"
                className="rounded-full"
                width={45}
                height={45}
              />
            </CldUploadButton>
          </div>
        </div>
        <button className="btn" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
