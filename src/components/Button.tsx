'use client'
 
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
 
export function SubmitButton({ text }: { text: string}) {
  // const { pending } = useFormStatus()
 
  return (
    <button
      type="submit"
      // aria-disabled={pending}
      className='text-[30px] font-medium uppercase'
    >
      {text}
    </button>
  );
};
