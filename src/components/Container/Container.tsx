import { ContainerProps } from './types';

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-40 flex flex-col h-full">
      {children}
    </div>
  );
};
