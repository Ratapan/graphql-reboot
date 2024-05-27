<script lang="ts" setup>
import { useQuery } from "@vue/apollo-composable";
import { getRocket } from "../graph/query/rocket.ts";
const { result, loading, error } = useQuery(getRocket);
</script>
<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error: {{ error }}</div>
  <div v-else class="rockets">
    <article
      v-for="rocket in result.rockets"
      class="rocket rounded"
      :key="rocket.id"
    >
      <header class="rocket__header">
        <h3 class="rocket__title">
          {{ rocket.name }}
        </h3>
      </header>
      <main class="rocket__body">
        <p class="rocket__description">{{ rocket.description }}</p>
        <ul class="rocket__list">
          <li class="rocket__li">First flight: {{ rocket.first_flight }}</li>
          <li class="rocket__li">Type: {{ rocket.type }}</li>
          <li class="rocket__li">Stages: {{ rocket.stages }}</li>
          <li class="rocket__li">
            Success rate: {{ rocket.success_rate_pct }}%
          </li>
          <li class="rocket__li">Cost: {{ rocket.cost_per_launch }}</li>
          <li class="rocket__li">Height: {{ rocket.height.meters }} meters</li>
        </ul>
        <p class="rocket__wikipedia">
          Wikipedia:
          <a class="rocket__wikipedia-link" :href="rocket.wikipedia"
            >...{{ rocket.wikipedia.substring(24) }}</a
          >
        </p>
      </main>
      <footer></footer>
    </article>
  </div>
</template>
