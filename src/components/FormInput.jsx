import { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label,type, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="mt-4 text-gray-500 text-sm">{label}</label>
      {
        type === 'textarea' ?
          <textarea className="border border-gray-300"
          cols="30" rows="3"
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
          />
          :
        <input className="px-4 py-2 rounded-md border border-gray-300"
          type={type}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus} //when focused and then out of focus
        // onFocus={() =>
        //   inputProps.name === "confirmPassword" && setFocused(true)
        // }
        focused={focused.toString()} //"true" or "false"
        />


      }
      <span className="text-sm hidden invalid">{errorMessage}</span>
    </div>
  );
};

export default FormInput;