<template>
  	<!-- Content
	================================================== -->
	<div class="dashboard-content" >

<!-- Titlebar -->
<div id="titlebar">
  <div class="row">
    <div class="col-md-12">
      <h2>My Profile</h2>
      <!-- Breadcrumbs -->
      <nav id="breadcrumbs">
        <ul>
          <li><a href="#">Home</a></li>
          <li>My Profile</li>
        </ul>
      </nav>
    </div>
  </div>
</div>

<div class="row">

  <!-- Profile -->
  <div class="col-lg-6 col-md-12">
    <div class="dashboard-list-box margin-top-0">
      <h4 class="gray">Profile Details</h4>
      <div class="dashboard-list-box-static">
        
        <!-- Avatar -->
        <div class="edit-profile-photo">
          <img src="images/user-avatar.jpg" alt="">
          <div class="change-photo-btn">
            <div class="photoUpload">
                <span><i class="fa fa-upload"></i> Upload Photo</span>
                <input type="file" class="upload"/>
            </div>
          </div>
        </div>

        <!-- Details -->
        <div class="my-profile">

          <label>Your Name</label>
          <input v-model="userDetail.fullName" type="text">

          <label>Phone</label>
          <input v-model="userDetail.phoneNumber" type="text">

          <label>Email</label>
          <input v-model="userDetail.email" type="text">

          <label>Notes</label>
          <textarea name="notes" id="notes" cols="30" rows="10" v-model="userDetail.note">Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper</textarea>

          <label><i class="fa fa-twitter"></i> Twitter</label>
          <input placeholder="https://www.twitter.com/" type="text">

          <label><i class="fa fa-facebook-square"></i> Facebook</label>
          <input placeholder="https://www.facebook.com/" type="text">

          <label><i class="fa fa-google-plus"></i> Google+</label>
          <input placeholder="https://www.google.com/" type="text">
        </div>

        <button class="button margin-top-15">Save Changes</button>

      </div>
    </div>
  </div>

  <!-- Change Password -->
  <div class="col-lg-6 col-md-12">
    <div class="dashboard-list-box margin-top-0">
      <h4 class="gray">Change Password</h4>
      <div class="dashboard-list-box-static">

        <!-- Change Password -->
        <div class="my-profile">
          <label class="margin-top-0">Current Password</label>
          <input type="password" v-model="changePassword.passwordCurrent">

          <label>New Password</label>
          <input type="password" v-model="changePassword.passwordNew">

          <label>Confirm New Password</label>
          <input type="password" v-model="changePassword.passwordNewConfirm">

          <button class="button margin-top-15" @click="handleSubmitChangePassword">Change Password</button>
        </div>

      </div>
    </div>
  </div>


  <!-- Copyrights -->
  <div class="col-md-12">
    <div class="copyrights">© 2021 Listeo. All Rights Reserved.</div>
  </div>

</div>

</div>
<!-- Content / End -->
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const {mapState,mapActions } = createNamespacedHelpers('moduleUser')
export default {
  data(){
    return {
      changePassword:{
        passwordCurrent: "",
        passwordNew: "",
        passwordNewConfirm: ""
      }
    }
  },
computed:{
  ...mapState({
    userDetail: state => state.userDetail,
  })
},
methods:{
  // handleSubmitChangePassword(){
  //   if (this.changePassword.passwordCurrent !== this.userDetail.password)
  // }
}
}
</script>

<style scoped>
  #titlebar{
    padding-left: 15px; padding-right: 15px;
  }

  .dashboard-content{
    margin: 0 346px;
  }
</style>