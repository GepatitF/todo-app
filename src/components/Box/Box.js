export const Box = (props) => {
  const { id, name, onClick, value, className, children } = props;
  return (
    <div
      id={id}
      onClick={onClick}
      name={name}
      value={value}
      className={className}
    >
      {children}
    </div>
  );
};
