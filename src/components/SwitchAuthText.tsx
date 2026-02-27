type Props = {
  prompt: string
  actionText: string
  action: () => void
}

export default function SwitchAuthText({ prompt, actionText, action }: Props) {
  return (
    <p className="mt-3 text-sm text-slate-700">
      {prompt}{" "}
      <span onClick={action} className="text-blue-700 cursor-pointer hover:underline">
        {actionText}
      </span>
    </p>
  )
}