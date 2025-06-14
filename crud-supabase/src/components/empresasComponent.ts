<script setup lang="ts">
import { Business } from '@/models/Business';

defineProps<{
  business: Business;
}>();
</script>

<template>
  <div class="business-card">
    <h2>{{ business.name }}</h2>
    <p>{{ business.description }}</p>
    <p>Estimated wait: {{ business.queue_settings.estimated_wait_time }}</p>
    <button>Join Queue</button>
  </div>
</template>