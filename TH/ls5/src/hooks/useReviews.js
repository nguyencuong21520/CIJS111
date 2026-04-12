import { useState, useCallback } from 'react'

const INITIAL_REVIEWS = [
  {
    id: 1,
    product: 'Studio Pro X1',
    category: 'Audio & Sound',
    productImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1d-PidJZHjd2Td2Sxd4yBn80snTR6e9_igt9oxXQSkrKJxHOjjPPRdVTXb2epOZCGVnuzLyD2zb1wwFx_BA0LYEEF--jfahbC1n4sanRbHZubBjVOD3LRsNd_YSP3jQ4qhC5Oy6FBfUODTEmRUmcmAGpqCdNCf_6vQKVOCGggvKG4JL7jYxAG8_192c1PKg1yVMbxmwsnvECKn6RYKSvqIop5dKyA4WhDK0Y0EepG_1zC8VZRoCl2cb0SW71J8jqmwkborbpDV-0',
    customer: 'Alex Rivera',
    email: 'alex.r@example.com',
    rating: 5,
    status: 'pending',
    date: '2023-10-24',
    review: 'Amazing sound quality and comfort. Best headphones I have ever used!',
    soundQuality: 5,
    batteryLife: 4,
    comfort: 5,
  },
  {
    id: 2,
    product: 'Luna Smartwatch',
    category: 'Wearables',
    productImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJv9WdHk8TUS-4tzwZZzBtsE7Kf07OI8wJBpbiGYey7mpZF8zDOsOcRf-xD0ck8YVp6oMkGUUsCMKrfZiV0LcZIXNkDvki0IFqygeofLb2Xi37SRLli5X2gF2r9UhkKRtFX8DzYIEDxsHXgL7pUdP2O5_F0CnGBl-YFiw8rS0asBzyPR3VUCIgQJweFeGwY3Q-ApUvNCkR2zN_46Sb0XMm66LiDcEQuLhUf2se8ieJSjCU2jVHxs5x_E_J9zU-pCCcGF21vJJoSpg',
    customer: 'Sarah Chen',
    email: 's.chen@domain.com',
    rating: 4,
    status: 'published',
    date: '2023-10-23',
    review: 'Great watch with excellent battery life. Design could be slightly better.',
    soundQuality: null,
    batteryLife: 5,
    comfort: 4,
  },
  {
    id: 3,
    product: 'ClickFlow Keys',
    category: 'Peripherals',
    productImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgqYyGK-EPOoGC1tTCGz5ZmInuFgNOs3CBPCHGgeGFFwnzBASyjFny7wVk3EtJE31zD2E-xyrQmNy53k00RePM7wLOAVFOd4SD3QrpLucGQWOijojmFs3i9Qh7SE8Fkhk2Lz1WaV7NBp-3JnNFuDWr04NStcULdcXzTswAj2Zsu1cK6ZKqqO3CnQ9-eojwhbXFGUlq-ja14nwp7W08yL18WH1omBdl3uB8Ff_k3j-kRDm2RUbuaaUiU051Cu3sF6f2jY7z2_vTz7s',
    customer: 'Marcus Thorne',
    email: 'm.thorne@tech.io',
    rating: 5,
    status: 'pending',
    date: '2023-10-22',
    review: 'Tactile switches feel great. RGB is customizable. Build quality is superb.',
    soundQuality: null,
    batteryLife: null,
    comfort: 4,
  },
  {
    id: 4,
    product: 'NovaBuds Ultra',
    category: 'Audio & Sound',
    productImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1d-PidJZHjd2Td2Sxd4yBn80snTR6e9_igt9oxXQSkrKJxHOjjPPRdVTXb2epOZCGVnuzLyD2zb1wwFx_BA0LYEEF--jfahbC1n4sanRbHZubBjVOD3LRsNd_YSP3jQ4qhC5Oy6FBfUODTEmRUmcmAGpqCdNCf_6vQKVOCGggvKG4JL7jYxAG8_192c1PKg1yVMbxmwsnvECKn6RYKSvqIop5dKyA4WhDK0Y0EepG_1zC8VZRoCl2cb0SW71J8jqmwkborbpDV-0',
    customer: 'Jamie Park',
    email: 'j.park@email.com',
    rating: 3,
    status: 'pending',
    date: '2023-10-21',
    review: 'Decent earbuds but noise cancellation could be better for the price.',
    soundQuality: 3,
    batteryLife: 4,
    comfort: 3,
  },
]

export function useReviews() {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS)

  const addReview = useCallback((review) => {
    setReviews((prev) => [
      {
        ...review,
        id: Date.now(),
        date: new Date().toISOString().slice(0, 10),
        status: 'pending',
      },
      ...prev,
    ])
  }, [])

  const approveReview = useCallback((id) => {
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: 'published' } : r))
    )
  }, [])

  const deleteReview = useCallback((id) => {
    setReviews((prev) => prev.filter((r) => r.id !== id))
  }, [])

  const stats = {
    total: reviews.length,
    avgRating: reviews.length
      ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
      : '0.0',
    pending: reviews.filter((r) => r.status === 'pending').length,
  }

  return { reviews, addReview, approveReview, deleteReview, stats }
}
