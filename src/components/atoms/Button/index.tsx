interface ButtonProps {
  title: string;
}

const Button = ({ title }: ButtonProps) => {
  return <button className="button-primary">{title}</button>;
};

export default Button;
