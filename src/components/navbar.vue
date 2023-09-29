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
      <router-link to="/certifications">Certifications</router-link>
      <a href="https://docs.google.com/spreadsheets/d/19wDLCl783n421nW1wzut2EJlWwWqIjRqMsYlHuO8X8M/edit?usp=sharing">IAU Applications</a>
      <a href="https://docs.google.com/spreadsheets/d/1W-y0wXuDJ0PNHCwvfxPHocGAW-s3MGjBTX9P7mS5AUo/edit?usp=sharing">Students Applications</a>
      <a href="https://docs.google.com/spreadsheets/d/10WQBdEdc299tTJ_DfQ8RUDeke95nNCgq_nLvHllX4y0/edit?usp=sharing">Teachers Applications</a>
    </nav>
    <i class="d-block d-lg-none bi bi-three-dots-vertical fs-4 text-secondary" data-bs-toggle="dropdown"></i>
    <ul class="dropdown-menu  nav-links">
        <li class="dropdown-item"><router-link to="/contact">Contact</router-link></li>
        <li class="dropdown-item"><router-link to="/partners">Partners</router-link></li>
        <li class="dropdown-item"><router-link to="/majors">majors</router-link></li>
        <li class="dropdown-item"><router-link to="/media">Media</router-link></li>
        <li class="dropdown-item"><router-link to="/workshops">Workshops</router-link></li>
        <li class="dropdown-item"><router-link to="/fees">Fees</router-link></li>
        <li class="dropdown-item"><router-link to="/certifications">Certifications</router-link></li>
        <a href="https://docs.google.com/spreadsheets/d/19wDLCl783n421nW1wzut2EJlWwWqIjRqMsYlHuO8X8M/edit?usp=sharing">IAU Applications</a>
        <a href="https://docs.google.com/spreadsheets/d/1W-y0wXuDJ0PNHCwvfxPHocGAW-s3MGjBTX9P7mS5AUo/edit?usp=sharing">Students Applications</a>
        <a href="https://docs.google.com/spreadsheets/d/10WQBdEdc299tTJ_DfQ8RUDeke95nNCgq_nLvHllX4y0/edit?usp=sharing">Teachers Applications</a>
    </ul>
  </header>
</template>