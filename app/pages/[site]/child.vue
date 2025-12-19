<template>
  <div>
    <div>Внутренняя страница</div>
    <pre>{{ $i18n.locale }}</pre>
    <pre>$route.name: {{ $route.name }}</pre>
    <pre>$route.params.site: {{ $route.params.site }}</pre>
    <NuxtLink :to="$localePath({ path: `/${$route.params.site}` })">На дочернюю страницу</NuxtLink>
  </div>
</template>
