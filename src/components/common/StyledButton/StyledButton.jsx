import { CustomButton } from './StyledButton.style';

const StyledButton = ({ children, className, onClick, color, textColor, fontSize, width }) => {
  return (
    <CustomButton
      className={className}
      color={color}
      textColor={textColor}
      onClick={onClick}
      width={width}
      fontSize={fontSize}
    >
      {children}
    </CustomButton>
  );
};

export default StyledButton;
