<template>
  <!-- Titlebar
================================================== -->
<div id="titlebar" class="gradient">
	<div class="container">
		<div class="row">
			<div class="col-md-12">

				<h2>Danh sách các phòng</h2><span>Mong bạn sẽ có trải nghiệm tuyệt vời tại listeo</span>

				<!-- Breadcrumbs -->
				<nav id="breadcrumbs">
					<ul>
						<li><router-link to="/">Home</router-link></li>
						<li>Listings</li>
					</ul>
				</nav>

			</div>
		</div>
	</div>
</div>


<!-- Content
================================================== -->
<div class="container">
	<div class="row">

		<div class="col-lg-9 col-md-8 padding-right-30">

			<!-- Sorting / Layout Switcher -->
			<div class="row margin-bottom-25">

				<div class="col-md-6 col-xs-6">
					<!-- Layout Switcher -->
					<div class="layout-switcher">
						<a href="listings-grid-with-sidebar-1.html" class="grid"><i class="fa fa-th"></i></a>
						<a href="#" class="list active"><i class="fa fa-align-justify"></i></a>
					</div>
				</div>

				<div class="col-md-6 col-xs-6">
					<!-- Sort by -->
					<div class="sort-by">
						<div class="sort-by-select">
							<select data-placeholder="Default order" class="chosen-select-no-single">
								<option>Default Order</option>	
								<option>Highest Rated</option>
								<option>Most Reviewed</option>
								<option>Newest Listings</option>
								<option>Oldest Listings</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			<!-- Sorting / Layout Switcher / End -->


			<div class="row">
				<!-- Listing Item -->
				<div class="col-lg-12 col-md-12" v-for="(room, index) in listRoom" :key="index">
					<room-detail :room = "room"/>
				</div>
				<!-- Listing Item / End -->
			</div>

			<!-- Pagination -->
			<div class="clearfix"></div>
			<div class="row">
				<div class="col-md-12">
					<!-- Pagination -->
					<div class="pagination-container margin-top-20 margin-bottom-40">
						<nav class="pagination">
							<ul>
								<li v-show="currentPageIndex>=2" @click="handleGetRooms(currentPageIndex-1)"><a href="#"><i class="sl sl-icon-arrow-left"></i></a></li>
								<li v-for="n in totalPage" :key="n" @click="handleGetRooms(n)"><a href="#" :class="{'current-page': n===currentPageIndex}">{{ n }}</a></li>
								<li v-show="currentPageIndex<totalPage" @click="handleGetRooms(currentPageIndex+1)"><a href="#"><i class="sl sl-icon-arrow-right"></i></a></li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
			<!-- Pagination / End -->

		</div>

		<!-- Sidebar
		================================================== -->
		<div class="col-lg-3 col-md-4">
			<div class="sidebar">

				<!-- Widget -->
				<div class="widget margin-bottom-40">
					<h3 class="margin-top-0 margin-bottom-30">Filters</h3>

					<!-- Row -->
					<div class="row with-forms">
						<!-- Cities -->
						<div class="col-md-12">
							<input type="text" placeholder="What are you looking for?" value=""/>
						</div>
					</div>
					<!-- Row / End -->


					<!-- Row -->
					<div class="row with-forms">
						<!-- Type -->
						<div class="col-md-12">
							<select data-placeholder="All Categories" class="chosen-select" >
								<option>All Categories</option>	
								<option>Shops</option>
								<option>Hotels</option>
								<option>Restaurants</option>
								<option>Fitness</option>
								<option>Events</option>
							</select>
						</div>
					</div>
					<!-- Row / End -->

					<!-- Row -->
					<div class="row with-forms">
						<!-- Cities -->
						<div class="col-md-12">

							<div class="input-with-icon location">
								<div id="autocomplete-container">
									<input id="autocomplete-input" type="text" placeholder="Location">
								</div>
								<a href="#"><i class="fa fa-map-marker"></i></a>
							</div>

						</div>
					</div>
					<!-- Row / End -->
					<br>

					<!-- Area Range -->
					<div class="range-slider">
						<input class="distance-radius" type="range" min="1" max="100" step="1" value="50" data-title="Radius around selected destination">
					</div>


					<!-- More Search Options -->
					<a href="#" class="more-search-options-trigger margin-bottom-5 margin-top-20" data-open-title="More Filters" data-close-title="More Filters"></a>

					<div class="more-search-options relative">

						<!-- Checkboxes -->
						<div class="checkboxes one-in-row margin-bottom-15">
					
							<input id="check-a" type="checkbox" name="check">
							<label for="check-a">Elevator in building</label>

							<input id="check-b" type="checkbox" name="check">
							<label for="check-b">Friendly workspace</label>

							<input id="check-c" type="checkbox" name="check">
							<label for="check-c">Instant Book</label>

							<input id="check-d" type="checkbox" name="check">
							<label for="check-d">Wireless Internet</label>

							<input id="check-e" type="checkbox" name="check" >
							<label for="check-e">Free parking on premises</label>

							<input id="check-f" type="checkbox" name="check" >
							<label for="check-f">Free parking on street</label>

							<input id="check-g" type="checkbox" name="check">
							<label for="check-g">Smoking allowed</label>	

							<input id="check-h" type="checkbox" name="check">
							<label for="check-h">Events</label>
					
						</div>
						<!-- Checkboxes / End -->

					</div>
					<!-- More Search Options / End -->

					<button class="button fullwidth margin-top-25">Update</button>

				</div>
				<!-- Widget / End -->

			</div>
		</div>
		<!-- Sidebar / End -->
	</div>
</div>

</template>

<script lang="js">
import { createNamespacedHelpers } from 'vuex'
import RoomDetail from '../components/RoomDetail.vue'
const {mapState,mapActions } = createNamespacedHelpers('moduleRoom')

export default {
	data() {
		return {
			locationId:null,
			currentPageIndex: 1
		}
	},

	components:{
		RoomDetail
	},

	created() {
		this.locationId = this.$route.query.locationId;
		this.getRoomByLocationId({
				locationId:this.locationId
			})
	},

	computed: {
		...mapState({
			listRoom: state => state.dataRoom.listData,
			totalPage: state => state.dataRoom.totalPage,
		}),
	},

	methods: {
		...mapActions({
			getRoomByLocationId: 'getRoomByLocationIdAction',
		}),

		handleGetRooms(pageIndex){
			this.currentPageIndex = pageIndex
			this.getRoomByLocationId({
				locationId:this.locationId,
				pageIndex: pageIndex
			})
		}
	},
}
</script>

<style>

</style>