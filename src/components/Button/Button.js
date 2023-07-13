import { Box } from "../Box/Box";

export const Button = (props) => {
  const { onClick, className, children } = props;
  return (
    <Box className="button">
      <button onClick={onClick} className={className} children={children} />
    </Box>
  );
};
