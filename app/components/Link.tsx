import { Link as MaterialLink } from '@mui/material/Link';
import NextLink from 'next/link';
interface Props {
    href: string;
    children: string;
}
const Link = ({href, children}: Props) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
        <MaterialLink>{children}</MaterialLink>
    </NextLink>
  )
}

export default Link