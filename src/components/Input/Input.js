import { Box } from "../Box/Box";

export const Input = (props) => {
  const { onKeyDown, value, placeholder, type, className, onChange } = props;
  return (
    <Box>
      <input
        onKeyDown={onKeyDown}
        value={value}
        placeholder={placeholder}
        type={type}
        className={className}
        onChange={onChange}
      />
    </Box>
  );
};
