<template>
	<main class="homepage-content">

	  <div class="homepage-content__wrapper">

	    <div class="homepage-content__line">
	    	<router-link to="/portfolio#portfolio-content" class="homepage-content__item homepage-content__item--batik">
	    		<div class="homepage-content__item-details">
	    		  <span class="homepage-content__item-header">Батик</span>
	    		  <span class="homepage-content__item-text">ручная роспись по ткани</span>
	    		</div>
	    	</router-link>
	      <router-link to="/portfolio/graphic_arts#portfolio-content" class="homepage-content__item homepage-content__item--graphic">
	        <div class="homepage-content__item-details">
	          <span class="homepage-content__item-header">Графика</span>
	        </div>
	      </router-link>
	    </div>

	    <div class="homepage-content__line homepage-content__line--second">
	    	<router-link to="/education/training#education-content" class="homepage-content__item homepage-content__item--academic">
	        <div class="homepage-content__item-details">
	          <span class="homepage-content__item-header">Рисунок</span>
	          <span class="homepage-content__item-text">подготовка к поступлению</span>
	        </div>
	      </router-link>
	      <router-link to="/education/student_works#education-content" class="homepage-content__item homepage-content__item--pupil">
	        <div class="homepage-content__item-details">
	          <span class="homepage-content__item-header">Ученики</span>
	        </div>
	      </router-link>
	      <router-link to="/portfolio/painting#portfolio-content" class="homepage-content__item homepage-content__item--oil">
	        <div class="homepage-content__item-details">
	          <span class="homepage-content__item-header">Живопись</span>
	          <span class="homepage-content__item-text">масло, акрил, темпера</span>
	        </div>
	      </router-link>
	    </div>

	    <div class="homepage-content__line">
	    	<router-link to="/portfolio#portfolio-content" class="homepage-content__item homepage-content__item--painting">
	        <div class="homepage-content__item-details">
	          <span class="homepage-content__item-header">Галерея работ</span>
	        </div>
	      </router-link>
	      <router-link to="/education#education-content" class="homepage-content__item homepage-content__item--teaching">
	        <div class="homepage-content__item-details">
	          <span class="homepage-content__item-header">Обучение</span>
	          <span class="homepage-content__item-text">взрослые и дети</span>
	        </div>
	      </router-link>
	    </div>

	    <div class="homepage-content__poem">
	      <img src="img/poem.svg" class="homepage-content__text">
	      <!--<p>К искусству нет готового пути.<br>Будь небосвод и море только сини,<br>Ты мог бы небо с морем в магазине,<br>Где краски продают, приобрести.</p>-->
	      <img src="img/below-text-element.svg">
	    </div>

	  </div>
	</main>

</template>
