import { useCallback, useState } from "react";

type ReturnTypes = [
  string,
  (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void
];

export default function useInput(initialValue: string): ReturnTypes {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      setValue(e.target.value);
    },
    []
  );

  return [value, onChange];
}
