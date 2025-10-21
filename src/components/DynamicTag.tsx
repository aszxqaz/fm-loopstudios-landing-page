type PolymorphicProps<E extends React.ElementType> = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<E> & { as?: E }
>;

type DynamicTagProps<T extends React.ElementType> = PolymorphicProps<T> & {
  className?: string;
};

export default function DynamicTag<T extends React.ElementType = "div">({
  as,
  className,
  children,
  ...props
}: DynamicTagProps<T>) {
  const Component = as || "div";

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
}
