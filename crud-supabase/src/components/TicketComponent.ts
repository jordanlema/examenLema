<script setup lang="ts">
import { Ticket } from '@/models/Ticket';

defineProps<{
  ticket: Ticket;
}>();

const emit = defineEmits(['cancel']);
</script>

<template>
  <div class="ticket-card">
    <h3>Ticket #{{ ticket.id }}</h3>
    <p>Status: {{ ticket.status }}</p>
    <p>Wait Time: {{ ticket.estimated_wait_time }}</p>
    <button @click="emit('cancel')">Cancel Ticket</button>
  </div>
</template>