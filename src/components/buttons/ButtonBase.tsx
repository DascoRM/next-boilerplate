import { Button } from '@nextui-org/react';
import { None } from 'framer-motion';

type Variant = 'solid' | 'faded' | 'bordered' | 'light' | 'ghost' | 'shadow';
type Size = 'sm' | 'md' | 'lg' | undefined;
type Radius = 'full' | 'sm' | 'md' | 'lg' | 'none';

export default function ButtonBase({
  variant,
  size,
  radius,
  title,
}: {
  variant: Variant;
  size: Size;
  radius: Radius;
  title: string;
}) {
  return (
    <Button variant={variant} radius={radius} size={size}>
      {title}
    </Button>
  );
}
