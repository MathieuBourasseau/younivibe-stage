type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>
export function CheckboxInput(props: CheckboxProps) {
  return (
    <input type="checkbox" {...props} className={[props.className || '', 'h-4 w-4 text-[#1B68FF] focus:ring-[#1B68FF] border-gray-300 rounded'].join(' ').trim()} />
  )
}