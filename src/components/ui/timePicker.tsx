import { Input } from './input';
import { FC } from 'react';
interface type {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TimePicker: FC<type> = ({ label = 'Time', onChange }) => {
  return (
    <form className="max-w-[8.5rem] mx-auto">
      <label
        htmlFor="time"
        className="block mb-2 text-sm font-medium text-muted-foreground"
      >
        {label}
      </label>
      <div className="flex justify-between">
        <Input
          type="time"
          id="time"
          required
          onChange={onChange}
          className="border border-border"
        />
      </div>
    </form>
  );
};

export default TimePicker;
