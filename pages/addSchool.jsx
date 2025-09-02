"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function AddSchool() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (key === "image") {
        formData.append(key, data[key][0]);
      } else {
        formData.append(key, data[key]);
      }
    });

    try {
      const response = await fetch("/api/schools", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to add school");
      }

      const result = await response.json();
      setSubmitMessage({ type: "success", text: result.message });
      reset();
    } catch (error) {
      setSubmitMessage({ type: "error", text: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center p-4">
      <form
        className="w-full max-w-md space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("name", { required: "School Name is required" })}
          placeholder="School Name"
          className="border p-2 w-full"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <input
          {...register("address", { required: "Address is required" })}
          placeholder="Address"
          className="border p-2 w-full"
        />
        {errors.address && <p className="text-red-500">{errors.address.message}</p>}
        <input
          {...register("city", { required: "City is required" })}
          placeholder="City"
          className="border p-2 w-full"
        />
        {errors.city && <p className="text-red-500">{errors.city.message}</p>}
        <input
          {...register("state", { required: "State is required" })}
          placeholder="State"
          className="border p-2 w-full"
        />
        {errors.state && <p className="text-red-500">{errors.state.message}</p>}
        <input
          {...register("contact", {
            required: "Contact Number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Contact Number must be 10 digits",
            },
          })}
          placeholder="Contact Number"
          className="border p-2 w-full"
        />
        {errors.contact && <p className="text-red-500">{errors.contact.message}</p>}
        <input
          type="email"
          {...register("email_id", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
          placeholder="Email"
          className="border p-2 w-full"
        />
        {errors.email_id && <p className="text-red-500">{errors.email_id.message}</p>}
        <input
          type="file"
          {...register("image", { required: "Image is required" })}
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Adding..." : "Add School"}
        </button>
        {submitMessage && (
          <p
            className={
              submitMessage.type === "success"
                ? "text-green-500"
                : "text-red-500"
            }
          >
            {submitMessage.text}
          </p>
        )}
      </form>
    </div>
  );
}