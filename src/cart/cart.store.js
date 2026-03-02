import { create } from 'zustand'

const getInitialCart = () => {
  const stored = localStorage.getItem('cart')
  return stored ? JSON.parse(stored) : []
}

export const useCartStore = create((set, get) => ({
  items: getInitialCart(),

  addItem: (product) => {
    const existing = get().items.find(i => i.id === product.id)

    let updated

    if (existing) {
      updated = get().items.map(i =>
        i.id === product.id
          ? { ...i, quantity: i.quantity + 1 }
          : i
      )
    } else {
      updated = [...get().items, { ...product, quantity: 1 }]
    }

    localStorage.setItem('cart', JSON.stringify(updated))
    set({ items: updated })
  },

  removeItem: (id) => {
    const updated = get().items.filter(i => i.id !== id)
    localStorage.setItem('cart', JSON.stringify(updated))
    set({ items: updated })
  },

  increase: (id) => {
    const updated = get().items.map(i =>
      i.id === id
        ? { ...i, quantity: i.quantity + 1 }
        : i
    )

    localStorage.setItem('cart', JSON.stringify(updated))
    set({ items: updated })
  },

  decrease: (id) => {
    const updated = get().items
      .map(i =>
        i.id === id
          ? { ...i, quantity: i.quantity - 1 }
          : i
      )
      .filter(i => i.quantity > 0)

    localStorage.setItem('cart', JSON.stringify(updated))
    set({ items: updated })
  },

  clearCart: () => {
    localStorage.removeItem('cart')
    set({ items: [] })
  }
}))