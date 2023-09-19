<template>
  <header class="w-100 p-3 d-flex justify-content-between align-items-center shadow">
    <section class="">
        <h4 class="m-0">CIC Admin Page</h4>
    </section>
    <nav class="d-none d-lg-flex align-items-center gap-3 nav-links">
      <router-link to="/contact">Contact</router-link>
      <router-link to="/partners">Partners</router-link>
      <router-link to="/majors">Majors</router-link>
      <router-link to="/media">Media</router-link>
      <router-link to="/workshops">Workshops</router-link>
      <router-link to="/fees">Fees</router-link>
    </nav>
    <i class="d-block d-lg-none bi bi-three-dots-vertical fs-4 text-secondary" data-bs-toggle="dropdown"></i>
    <ul class="dropdown-menu  nav-links">
        <li class="dropdown-item"><router-link to="/contact">Contact</router-link></li>
        <li class="dropdown-item"><router-link to="/partners">Partners</router-link></li>
        <li class="dropdown-item"><router-link to="/majors">majors</router-link></li>
        <li class="dropdown-item"><router-link to="/media">Media</router-link></li>
        <li class="dropdown-item"><router-link to="/workshops">Workshops</router-link></li>
        <li class="dropdown-item"><router-link to="/fees">Fees</router-link></li>
    </ul>
  </header>
</template>