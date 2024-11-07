export const discountPorcentage = 0.05

export function formatCurrency(value) {
  return `R$ ${value.toFixed(2).replace('.', ',')}`
}

export function priceWithDiscount(price) {
  return price * (1 - discountPorcentage)
}

export function priceDiscountPorcentage(price) {
  let withDiscount = priceWithDiscount(price)
  let discount = ((price - withDiscount) / price) * 100
  return `${discount.toFixed(0)}%`
}
