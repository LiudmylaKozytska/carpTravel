import { useForm, SubmitHandler } from "react-hook-form"
import { SubmitButton } from "./Button"


type Inputs = {
  example: string
  exampleRequired: string
}


export default function ContactForm() {
  const {
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>()

  async function onSubmit(data: FormData) {
    console.log(data);
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label
          htmlFor="name"
          className="text-[12px] font-extralight leading-[24px] tracking-[2.4px] mb-[4px]"
        >
          Full name
        </label>
        <input id="name"
          name="name"
          type="text"
          className="sm:w-[100%] bg-form-color text-[13px] font-extralight leading-[24px] pl-[8px] mb-[16px] placeholder-opacity-20"
          placeholder="John Smith"
          autoComplete="off" />
        {/* {errors?.email && (
                    <p className="text-red-600 text-sm">
                      {errors?.email?.message}
                    </p>
                  )} */}
        <label
          htmlFor="email"
          className="text-[12px] font-extralight leading-[24px] tracking-[2.4px] mb-[4px]"
        >
          E-mail
        </label>
        <input id="position"
          name="email"
          type="text"
          className="sm:w-[100%] bg-form-color text-[13px] font-extralight leading-[24px] pl-[8px] mb-[16px]"
          placeholder="johnsmith@email.com"
          autoComplete="off" />
        <label
          htmlFor="position"
          className="text-[12px] font-extralight leading-[24px] tracking-[2.4px] mb-[4px]"
        >
          Position
        </label>
        <input id="position"
          name="position"
          type="text"
          className="sm:w-[100%] bg-form-color text-[13px] font-extralight leading-[24px] pl-[8px] mb-[16px]"
          placeholder="Movie maker"
          autoComplete="off" />
        <label
          htmlFor="phone"
          className="text-[12px] font-extralight leading-[24px] tracking-[2.4px] mb-[4px]"
        >
          Phone
        </label>
        <input id="phone"
          name="phone"
          type="tel"
          className="sm:w-[100%] bg-form-color text-[13px] font-extralight leading-[24px] pl-[8px] mb-[16px]"
          placeholder="+ 38 (097) 12 34 567"
          autoComplete="off" />
        <label
          htmlFor="message"
          className="text-[12px] font-extralight leading-[24px] tracking-[2.4px] mb-[4px]"
        >
          Message
        </label>
        <textarea id="message"
          name="message"
          rows={5}
          className="sm:w-[100%] bg-form-color text-[13px] font-extralight leading-[24px] pl-[8px] mb-[16px]"
          placeholder=""
          autoComplete="off" />
        <div>
    <input type="checkbox" id="check" name="check" />
    <label className="text-[12px] font-extralight leading-[24px] tracking-[2.4px] mb-[4px] pl-[8px]">I confirm my consent to the processing of personal data.</label>
  </div>
        {/* {errors.exampleRequired && <span>This field is required</span>} */}
<SubmitButton text="Send"/>
      </form>
    )
}