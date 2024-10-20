import { ContainerProps } from "./types";

export const Container = ({ children }: ContainerProps) => {
  return <div className="container mx-auto px-40">{children}</div>;
};
