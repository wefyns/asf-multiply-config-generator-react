import * as Styles from './styles';

export const Image = ({
  src,
  alt,
  width,
  height,
  objectFit,
}: {
  src: any;
  alt: string;
  width?: number;
  height?: number;
  objectFit?: 'none' | 'fill' | 'cover';
}) => (
  <Styles.Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    objectFit={objectFit}
  />
);
