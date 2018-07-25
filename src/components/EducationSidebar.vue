<template>
  <div class="education-content__sidebar sidebar">
    <ul class="sidebar__nav">
      <router-link to="/education" tag="li" class="sidebar__item">
        <a>Частные уроки</a>
      </router-link>
      <router-link to="/education/studio_floria" tag="li" class="sidebar__item">
        <a>Студия "Флория"</a>
      </router-link>
      <router-link to="/education/training" tag="li" class="sidebar__item">
        <a>Подготовка к поступлению</a>
      </router-link>
      <router-link to="/education/student_works" tag="li" class="sidebar__item">
        <a>Работы учеников</a>
      </router-link>
    </ul>
    <button class="sidebar__button request-button"><img src="/img/ic-palette.svg">Заявка</button>
  </div>
</template>
