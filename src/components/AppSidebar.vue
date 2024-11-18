<template>
  <header class="sidebar">
    <div class="logo">
      <img src="/assets/TestLogo@2x.png" alt="" >
    </div>
    <nav>
      <ul>
        <li>
          <img class="icon" src="/assets/home_FILL0_wght300_GRAD0_opsz24.png">
          Overview</li>
        
        <li class="active">
          <img class="icon" src="/assets/group_FILL0_wght300_GRAD0_opsz24.png">
          Patients</li>

        <li>
          <img class="icon" src="/assets/calendar_today_FILL0_wght300_GRAD0_opsz24.png">
          Schedule</li>

        <li>
          <img class="icon" src="/assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.png">
          Message</li>

          <li>
            <img class="icon" src="/assets/credit_card_FILL0_wght300_GRAD0_opsz24.png">
            Transactions</li>
      </ul>
    </nav>
    <div class="profile">
        <img class="prof" src="/assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png" alt="Doctor" />
        <div>
          <p class="text" >Dr. Jose Simmons</p>
          <span class="text1" >General Practitioner</span>
        </div>
      </div>
      <div>
      <img class="iconic1" src="/assets/settings_FILL0_wght300_GRAD0_opsz24.png">
        <img class="iconic" src="/assets/more_vert_FILL0_wght300_GRAD0_opsz24.png">
      </div>
  </header>
</template>

<style scoped>
.sidebar {
  font: manrope;
  background: #ffffff;
  display: flex;
  align-items: center;
  border-radius: 40px;
  padding: 10px 20px;
  width: 97%; /* Full width for the top bar */
  height: 40px; /* Fixed height for the top bar */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Optional shadow for better visuals */
  justify-content: space-between;
}

.logo {
  top: 30px;
left: 50px;
width: 211px;
height: 38px;
/* UI Properties */
background: transparent 0% 0% no-repeat padding-box;
opacity: 1;
margin-left: 20px ;
}

.logo img{
  width: 150px;
}

.icon{
width: 16px;
height: 15px;
justify-content: center;
justify-items: center;
align-items: center;
margin: 4px;
margin-bottom: -3px;
}

.profile {
    display: flex;
    align-items: center;
    margin-right: -90px;

  }
  .profile img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

nav ul {
  display: flex; /* Arrange items horizontally */
  list-style: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  padding: 0 15px; /* Horizontal spacing between menu items */
  cursor: pointer;
  color: #000000;
  font-size: 13px; /* Adjust font size */
  align-items: center;
  justify-content: center;
}

nav ul li.active {
  color: #000000;
  border: 1px solid #40d2e9;
  background-color: #40d2e9;
  height: 26px;
  width: 69px;
  border-radius: 20px; /* Highlight active item */
  justify-content: center;
}



.text, .text1{
  font-size: 15px;
  margin-bottom: 0;
  justify-content: center;
  align-items: center;
  margin:0; 
}

.text{
font-weight: bold;
}

.text1{
  margin-top: -100px;
  color: #707070;
}

.iconic{
width: 3px;
height: 15px;
margin: 10px;

}

.iconic1{
  height: 15px;
margin-bottom: 10px;
}

</style>
