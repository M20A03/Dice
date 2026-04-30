export const DICE_OPTIONS = [
  { emoji: '🎲', label: 'Classic Dice', max: 6, accent: '#F97316' },
]

export function getDiceOption(emoji) {
  return DICE_OPTIONS.find(option => option.emoji === emoji) || DICE_OPTIONS[0]
}
