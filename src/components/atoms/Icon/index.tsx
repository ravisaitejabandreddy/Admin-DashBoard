interface IconProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
}

const Icon = ({ ...props }: IconProps) => {
  return <img {...props} />;
};

export default Icon;
