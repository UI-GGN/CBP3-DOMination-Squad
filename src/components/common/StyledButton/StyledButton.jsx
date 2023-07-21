import { CustomButton } from './StyledButton.style';

const StyledButton = ({ children, className, onClick, color, bgColor, textColor, fontSize, width }) => {
  return (
    <CustomButton
      className={className}
      color={color}
      bgColor={bgColor}
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
