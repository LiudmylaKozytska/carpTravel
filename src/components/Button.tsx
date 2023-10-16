export function SubmitButton({ text }: { text: string}) {
  
  return (
    <button
      type="submit"
      className='text-[30px] font-medium uppercase cursor-pointer'
    >
      {text}
    </button>
  );
};
