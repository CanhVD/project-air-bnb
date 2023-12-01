<template>
  <!-- Titlebar
================================================== -->
<div id="titlebar">
	<div class="container">
		<div class="row">
			<div class="col-md-12">

				<h2>Booking</h2>

				<!-- Breadcrumbs -->
				<nav id="breadcrumbs">
					<ul>
						<li><a href="#">Home</a></li>
						<li>Booking</li>
					</ul>
				</nav>

			</div>
		</div>
	</div>
</div>


<!-- Content
================================================== -->

<!-- Container -->
<div class="container">
	<div class="row">

		<!-- Content
		================================================== -->
		<div class="col-lg-8 col-md-8 padding-right-30">

			<h3 class="margin-top-0 margin-bottom-30">Personal Details</h3>

			<div class="row">

				<div class="col-md-6">
					<label>Check In</label>
					<input type="date" v-model="booking.checkIn">
				</div>

				<div class="col-md-6">
					<label>Check Out</label>
					<input type="date" v-model="booking.checkOut">
				</div>

				<div class="col-md-6">
					<div class="input-with-icon medium-icons">
						<label>E-Mail Address</label>
						<input type="text" v-model="userDetail.email" disabled>
						<i class="im im-icon-Mail"></i>
					</div>
				</div>

				<div class="col-md-6">
					<div class="input-with-icon medium-icons">
						<label>Phone</label>
						<input type="text" v-model="userDetail.phoneNumber" disabled>
						<i class="im im-icon-Phone-2"></i>
					</div>
				</div>

			</div>


			<h3 class="margin-top-55 margin-bottom-30">Payment Method</h3>

			<!-- Payment Methods Accordion -->
			<div class="payment">

				<div class="payment-tab payment-tab-active">
					<div class="payment-tab-trigger">
						<input checked id="paypal" name="cardType" type="radio" value="paypal">
						<label for="paypal">PayPal</label>
						<img class="payment-logo paypal" src="https://i.imgur.com/ApBxkXU.png" alt="">
					</div>

					<div class="payment-tab-content">
						<p>You will be redirected to PayPal to complete payment.</p>
					</div>
				</div>


				<div class="payment-tab">
					<div class="payment-tab-trigger">
						<input type="radio" name="cardType" id="creditCart" value="creditCard">
						<label for="creditCart">Credit / Debit Card</label>
						<img class="payment-logo" src="https://i.imgur.com/IHEKLgm.png" alt="">
					</div>

					<div class="payment-tab-content">
						<div class="row">

							<div class="col-md-6">
								<div class="card-label">
									<label for="nameOnCard">Name on Card</label>
									<input id="nameOnCard" name="nameOnCard" required type="text">
								</div>
							</div>

							<div class="col-md-6">
								<div class="card-label">
									<label for="cardNumber">Card Number</label>
									<input id="cardNumber" name="cardNumber" placeholder="1234  5678  9876  5432" required type="text">
								</div>
							</div>

							<div class="col-md-4">
								<div class="card-label">
									<label for="expirynDate">Expiry Month</label>
									<input id="expiryDate" placeholder="MM" required type="text">
								</div>
							</div>

							<div class="col-md-4">
								<div class="card-label">
									<label for="expiryDate">Expiry Year</label>
									<input id="expirynDate" placeholder="YY" required type="text">
								</div>
							</div>

							<div class="col-md-4">
								<div class="card-label">
									<label for="cvv">CVV</label>
									<input id="cvv" required type="text">
								</div>
							</div>

						</div>
					</div>
				</div>

			</div>
			<!-- Payment Methods Accordion / End -->

			<a href="#" @click="handleSubmitBooking" class="button booking-confirmation-btn margin-top-40 margin-bottom-65">Confirm and Pay</a>
		</div>


		<!-- Sidebar
		================================================== -->
		<div class="col-lg-4 col-md-4 margin-top-0 margin-bottom-60">

			<!-- Booking Summary -->
			<div class="listing-item-container compact order-summary-widget">
				<div class="listing-item">
					<img :src="roomDetail.image" alt="">

					<div class="listing-item-content">
						<div class="numerical-rating" data-rating="5.0"></div>
						<h3>{{ roomDetail.roomName }}</h3>
						<span>{{ roomDetail.location.district }}, {{ roomDetail.location.locationName  }}, {{ roomDetail.location.country  }}</span>
					</div>
				</div>
			</div>
			<div class="boxed-widget opening-hours summary margin-top-0">
				<h3><i class="fa fa-calendar-check-o"></i> Booking Summary</h3>
				<ul>
					<li>Check In <span>{{ checkIn }}</span></li>
					<li>Check Out <span>{{ checkOut }}</span></li>
					<li>Day <span>{{ day }} Day</span></li>
					<li class="total-costs">Total Cost <span>{{ totalCost }}</span></li>
				</ul>

			</div>
			<!-- Booking Summary / End -->

		</div>

	</div>
</div>
<!-- Container / End -->
</template>

<script lang="js">
import { createNamespacedHelpers } from 'vuex'
import { addBooking } from '../api/bookingAPI'
import router from '@/router'
const {mapState } = createNamespacedHelpers('moduleUser')
const { mapState: mapStateModuleRoom} = createNamespacedHelpers('moduleRoom')
export default {
	data(){
		return {
			booking:{},
			day: ''
		}
	},

	computed:{
		...mapState({
      userDetail: state => state.userDetail,
    }),
		...mapStateModuleRoom({
			roomDetail: state => state.roomDetail,
    }),

		totalCost(){
			if (this.booking.checkIn && this.booking.checkOut && this.booking.checkIn < this.booking.checkOut ) 
			{
				 // Chuyển đổi giá trị ngày thành đối tượng Date
				 	const start = new Date(this.booking.checkIn);
					const end = new Date(this.booking.checkOut);

					// Tính hiệu giữa hai ngày
					const timeDifference = end.getTime() - start.getTime();

					// Chuyển đổi kết quả thành số ngày và Làm tròn số ngày
					const daysDifference = Math.round(timeDifference / (1000 * 3600 * 24));
					this.day = daysDifference
					return "$" + `${daysDifference * this.roomDetail.price}`;
			}
			else return "$0.00" 
		},

		checkIn(){
			if (this.booking.checkIn){
				const date = new Date(this.booking.checkIn)
				let day = date.getDate();
				day = day < 10 ? `0${day}` : day

				let month = date.getMonth();
				month = month < 10 ? `0${month}` : month

				let year = date.getFullYear();

				return `${day}/${month}/${year}`
			}

			return ''
		},

		checkOut(){
			if (this.booking.checkOut){
				const date = new Date(this.booking.checkOut)
				let day = date.getDate();
				day = day < 10 ? `0${day}` : day

				let month = date.getMonth();
				month = month < 10 ? `0${month}` : month

				let year = date.getFullYear();

				return `${day}/${month}/${year}`
			}
			
			return ''
		}
	},

	methods:{
		async	handleSubmitBooking(){
			try {
				if (!this.booking.checkIn || !this.booking.checkOut){
					alert("Vui lòng chọn ngày bắt đầu và ngày kết thúc")
				} 
				else if (this.booking.checkIn > this.booking.checkOut){
					alert("Ngày kết thúc phải lớn hơn ngày bắt đầu đặt phòng")
					return
				}
				else{
					this.booking.roomId = this.roomDetail.id
					this.booking.emailUser = this.userDetail.email
					await	addBooking(this.booking)
					alert("Đặt phòng thành công")
					router.push("/thanh-you")
				}
			} catch (error) {
				alert("Đặt phòng không thành công")
			}
		}
	}

}
</script>

<style>

</style>