import type { AnchorHTMLAttributes, ReactNode } from 'react'
type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode; variant?: 'primary'|'secondary'|'ghost' }
export function Button({children,variant='secondary',className='',...props}:Props){return <a className={`button button-${variant} ${className}`} {...props}>{children}</a>}
