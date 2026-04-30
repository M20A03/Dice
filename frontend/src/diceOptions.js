export const DICE_OPTIONS = [
  { emoji: '🎲', label: 'Classic Dice', max: 6, accent: '#F97316' },
  { emoji: '🎯', label: 'Target', max: 6, accent: '#22C55E' },
  { emoji: '🏀', label: 'Basketball', max: 5, accent: '#F59E0B' },
  { emoji: '⚽', label: 'Football', max: 5, accent: '#3B82F6' },
  { emoji: '🎳', label: 'Bowling', max: 6, accent: '#A855F7' }
]

export function getDiceOption(emoji) {
  return DICE_OPTIONS.find(option => option.emoji === emoji) || DICE_OPTIONS[0]
}
