<template>
	<main class="education-content">
		<div class="education-content__wrapper main-wrapper">
			<education-sidebar/>
			<router-view/>
		</div>
	</main>
</template>

<script>
  import EducationSidebar from '@/components/EducationSidebar.vue'

  export default {
    components: {
      EducationSidebar
    }
  }
</script>
