import { ProgressSpinner } from "primereact/progressspinner";
import { SpinnerWrapper } from "./Spinner.style";

type SpinnerProps = {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  strokeWidth?: number;
  fast?: boolean;
  message?: string;
};

const Spinner: React.FC<SpinnerProps> = ({
  small,
  medium,
  large,
  strokeWidth,
  fast,
  message,
}) => (
  <SpinnerWrapper>
    <ProgressSpinner
      style={{
        width: small ? "30px" : medium ? "45px" : large ? "60px" : "45px",
        height: small ? "30px" : medium ? "45px" : large ? "60px" : "45px",
        margin: "1vh 0",
      }}
      strokeWidth={strokeWidth?.toString() || "6"}
      fill="#EEEEEE"
      animationDuration={`.${fast ? 4 : 7}s`}
    />
    {message}
  </SpinnerWrapper>
);

export default Spinner;
