<template>
  <div class="listing-item-container list-layout">
						<router-link :to="{ name: 'room-detail', params: { roomId: room.id } }" class="listing-item">
							
							<!-- Image -->
							<div class="listing-item-image">
								<img :src="room.image" :alt="room.roomName">
								<span class="tag">{{ room.price }}$/day</span>
							</div>
							
							<!-- Content -->
							<div class="listing-item-content">
								<div class="listing-badge now-open">{{room.tag}}</div>

								<div class="listing-item-inner">
									<h3>{{room.roomName}} <i class="verified-icon"></i></h3>
									<span>{{ room.location.district }}, {{ room.location.locationName  }}, {{ room.location.country  }}</span>
									<div class="star-rating" data-rating="3.5">
										<div class="rating-counter">({{ room.views }} reviews)</div>
									</div>
								</div>

								<span class="like-icon"></span>
							</div>
						</router-link>
					</div>
</template>

<script>
export default {
props:{
  room:{
    Type: Object
  }
}
}
</script>

<style>

</style>