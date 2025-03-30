<script lang="ts">
import { ref } from 'vue'
const counter = ref(0);

const increment = () => counter.value++;
const decrement = () => counter.value--;

export { counter, increment, decrement };

</script>