<template>
  <div class="row">
					<div class="col-md-12">
						<!-- Pagination -->
						<div class="pagination-container margin-top-30">
							<nav class="pagination">
								<ul>
                  <li v-show="currentPageIndex>=2" @click="handleDecrease"><a href="#"><i class="sl sl-icon-arrow-left"></i></a></li>
                  <li v-for="n in totalPage" :key="n" @click="handleCurrent"><a href="#" :class="{'current-page': n===currentPageIndex}">{{ n }}</a></li>
                  <li v-show="currentPageIndex<totalPage" @click="handleIncrease"><a href="#"><i class="sl sl-icon-arrow-right"></i></a></li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
</template>

<script>
export default {
  props:{
    handleIncrease:{
      type: Function,
      required: false
    },

    handleDecrease:{
      type: Function,
      required: false
    },

    handleCurrent:{
      type: Function,
      required: false
    },

    totalPage:{
      type: Number,
      required: true
    }
  }
}
</script>

<style>

</style>