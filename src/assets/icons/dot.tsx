import { HTMLAttributes } from 'react'

type SvgWithColor = {
  className?: string
} & HTMLAttributes<SVGElement>
export const Dot = ({ className }: SvgWithColor) => {
  return (
    <svg
      fill={'none'}
      height={'6.000000'}
      viewBox={'0 0 6 6'}
      width={'6.000000'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <desc>Created with Pixso.</desc>
      <defs />
      <circle
        cx={'3.000000'}
        cy={'3.000000'}
        fill={'#C4C4C4'}
        fillOpacity={'1.000000'}
        id={'Ellipse 3'}
        r={'3.000000'}
      />
    </svg>
  )
}
