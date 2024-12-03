import { AntDesign, Feather } from "@expo/vector-icons";

type IconProps = {
  color?: string;
};

export const icons: Record<string, (props: IconProps) => JSX.Element> = {
  index: (props: any) => (
    <AntDesign
      name="home"
      size={21}
      {...props}
    />
  ),
  explore: (props: any) => (
    <Feather
      name="compass"
      size={21}
      {...props}
    />
  ),
  profile: (props: any) => (
    <AntDesign
      name="user"
      size={21}
      {...props}
    />
  ),
};
