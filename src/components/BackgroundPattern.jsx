import { BookIcon, PencilIcon, BackpackIcon } from './icons/BackgroundIcons'

const ICONS = [BackpackIcon, PencilIcon, BookIcon]

// [iconIndex, x%, y%, rotation, size]
const ITEMS = [
  [0,  3,  2, -15, 16], [1, 19,  6,  22, 14], [2, 38,  1,  -8, 17],
  [0, 52,  8,  18, 15], [1, 70,  3, -20, 13], [2, 88,  7,  12, 16],
  [2,  8, 18,  10, 15], [0, 24, 22, -12, 17], [1, 42, 16,  25, 14],
  [2, 60, 21, -18, 16], [0, 76, 15,   8, 15], [1, 93, 20, -22, 13],
  [1,  5, 32, -18, 14], [2, 28, 36,  15, 16], [0, 46, 30,  -5, 18],
  [1, 64, 38,  20, 15], [2, 82, 32, -10, 14], [0, 96, 35,  15, 16],
  [0, 12, 46,  22, 15], [1, 32, 50,  -8, 16], [2, 55, 44,  12, 17],
  [0, 72, 52, -18, 14], [1, 87, 47,  25, 15], [2, 98, 54, -12, 13],
  [2,  6, 60, -20, 16], [0, 22, 65,  10, 15], [1, 44, 58, -15, 17],
  [2, 62, 63,  18, 14], [0, 80, 59,  -8, 16], [1, 95, 68,  20, 15],
  [1,  3, 74,  15, 14], [2, 26, 78, -22, 16], [0, 50, 72,   8, 18],
  [1, 68, 80, -15, 15], [2, 85, 75,  20, 14], [0, 96, 82, -10, 16],
  [0, 10, 89, -18, 15], [1, 30, 93,  12, 14], [2, 48, 88,  -8, 16],
  [0, 65, 92,  22, 15], [1, 78, 87, -15, 17], [2, 92, 91,  10, 14],
]

export default function BackgroundPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {ITEMS.map(([iconIdx, x, y, rotate, size], i) => {
        const Icon = ICONS[iconIdx]
        return (
          <div
            key={i}
            className="absolute text-amber-800/20"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: `rotate(${rotate}deg)`,
            }}
          >
            <Icon size={size} />
          </div>
        )
      })}
    </div>
  )
}
