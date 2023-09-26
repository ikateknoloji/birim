// useScrollFixed.js
import { ref, onMounted, onUnmounted } from 'vue'

export default function useScrollFixed() {
  const isScrool = ref(false)

  const checkScroll = () => {
    isScrool.value = window.pageYOffset > 100
  }

  onMounted(() => {
    window.addEventListener('scroll', checkScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll)
  })

  return { isScrool }
}
