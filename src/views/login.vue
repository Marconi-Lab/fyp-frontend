<template>
  <div class="background"></div>
  <div class="container">
  <div class ="icon"></div>
    <h3>
      Final Year Projects Submission and <br />
      Review System
    </h3>
    <br />
    <h2>LOGIN</h2>
    <br />
    <br />
    <br />
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <div class="mb-3">
            <span class="fa-duotone fa-email" id="basic-addon1"
              ><font-awesome-icon icon="fa-duotone fa-email"
            /></span>
            <!-- Email -->
            <input
              v-model="email"
              :rules="emailRules"
              type="email"
              required
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <!-- Password -->
          <div class="mb-3">
            <span class="fa-duotone fa" id="basic-addon2"
              ><font-awesome-icon icon="fa-solid fa-user-secret"
            /></span>
            <input
              v-model="password"
              :rules="passwordRules"
              :type="passwordShow ? 'text' : 'password'"
              placeholder="Password"
              prepend-inner-icon="mdi-key"
              :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="passwordShow = !passwordShow"
              required
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <!-- Checkbox -->
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"
              >Remember Me</label
            >
          </div>
          <!-- Submit Button -->
          <button type="submit" class="btn btn-primary" @click="doLogin">Login</button>
        </form>
      </div>
      <br />
      <br />
      <h3>REGISTER AS A</h3>
      <div
        class="btn-toolbar mb-3"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div class="btn-group me-2" role="group" aria-label="First group">
          <button type="button" class="btn btn-outline-secondary">
            STUDENT
          </button>
        </div>
        <div class="btn-group me-3" role="group" aria-label="Second group">
          <button type="button" class="btn btn-outline-secondary">
            SUPERVISOR
          </button>
        </div>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    passwordShow: false,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 6) || "Password must be 6  characters or more!",
    ],
  }),
  methods:{
    doLogin() {
          if (this.email === "" || this.password === "") {
             this.emptyFields = true;
          } else {
             alert("You are now logged in");
          }
       },
  }
};
</script>

<style scoped>
*{
        align-items: center;
}
h2{
    color: rgb(5, 172, 5);
}
.background {
  background-image: url(background.jpg) !important;
  height: 100%;
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  background-size: cover;
  background-color: green;
}
.icon{
    background-image: url(mak.png);
    height: 50%;
    width: 80%;
}
.container{
    background-color: white;

}
</style>
