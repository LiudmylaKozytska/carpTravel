"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SubmitButton } from "./Button";

type FormData = {
  name: string;
  email: string;
  message: string;
  position: string;
  phone: number;
  checked: boolean;
};

export default function ContactForm({ showFields }: { showFields: boolean }) {
  const [checked, setChecked] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    setChecked(false);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="text-[12px] font-extralight leading-[24px] tracking-[2.4px] mb-[4px]">
        Full name
        <input
          type="text"
          className="sm:w-[100%] bg-form-color text-[13px] font-extralight leading-[24px] pl-[8px] mb-[16px] placeholder-opacity-20"
          placeholder="John Smith"
          autoComplete="off"
          minLength={2}
          maxLength={50}
          {...register("name", {
            required: true,
          })}
        />
        {errors.name && <p className="text-red-600 ">Incorrect name</p>}
      </label>
      <label className="text-[12px] font-extralight leading-[24px] tracking-[2.4px] mb-[4px]">
        E-mail
        <input
          type="email"
          className="sm:w-[100%] bg-form-color text-[13px] font-extralight leading-[24px] pl-[8px] mb-[16px]"
          placeholder="johnsmith@email.com"
          autoComplete="off"
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+\.\S+$/,
          })}
        />
        {errors.email && <p className="text-red-600 ">Invalid email</p>}
      </label>
      {showFields && (
        <>
          <label className="text-[12px] font-extralight leading-[24px] tracking-[2.4px] mb-[4px]">
            Position
            <input
              type="text"
              className="sm:w-[100%] bg-form-color text-[13px] font-extralight leading-[24px] pl-[8px] mb-[16px]"
              placeholder="Movie maker"
              autoComplete="off"
              minLength={2}
              maxLength={50}
              {...register("position", {
                required: false,
              })}
            />
          </label>
          <label className="text-[12px] font-extralight leading-[24px] tracking-[2.4px] mb-[4px]">
            Phone
            <input
              type="tel"
              className="sm:w-[100%] bg-form-color text-[13px] font-extralight leading-[24px] pl-[8px] mb-[16px]"
              placeholder="+ 38 (097) 12 34 567"
              autoComplete="off"
              {...register("phone", {
                required: true,
                pattern: /^[0-9]+$/,
              })}
            />
          </label>
        </>
      )}
      <label
        htmlFor="message"
        className="text-[12px] font-extralight leading-[24px] tracking-[2.4px] mb-[4px]"
      >
        Message
        <textarea
          rows={5}
          maxLength={200}
          className="sm:w-[100%] bg-form-color text-[13px] font-extralight leading-[24px] pl-[8px] mb-[16px]"
          placeholder=""
          autoComplete="off"
          {...register("message")}
        />
      </label>
      {showFields && (
        <div className="relative flex gap-[8px] mb-[16px]">
          <div className="flex items-center justify-center w-[22px] h-[22px] lg:w-[24px] lg:h-[24px] border border-white">
            <div
              className={`${
                checked
                  ? "bg-white"
                  : "bg-white/10 duration-300 group-hover:bg-white/50 group-focus:bg-white/50"
              } w-[14px] h-[14px] lg:w-[16px] lg:h-[16px]`}
            >
              <input
                type="checkbox"
                className="absolute top-0 bottom-0 left-0 right-0 cursor-pointer opacity-0"
                onClick={() => setChecked(!checked)}
                {...register("checked", {
                  required: true,
                })}
              />
            </div>
          </div>
          <p className="text-[12px] font-extralight leading-[22px] tracking-[-0.4px] text-left">
            I confirm my consent to the processing of personal data.
          </p>
        </div>
      )}
      <div className="box-content text-end">
        <SubmitButton text="Send" />
      </div>
    </form>
  );
}
