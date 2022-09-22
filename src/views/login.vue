<template>
  <div class="container">
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
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div class="mb-3">
            <span class="fa-duotone fa" id="basic-addon2"
              ><font-awesome-icon icon="fa-solid fa-user-secret"
            /></span>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
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
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
      <br />
      <br />
      <h3>REGISTER AS A</h3>
      <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group me-2" role="group" aria-label="First group">
          <button type="button" class="btn btn-outline-secondary">STUDENT</button>
        </div>
        <div class="btn-group me-3" role="group" aria-label="Second group">
            <button type="button" class="btn btn-outline-secondary">SUPERVISOR</button>
        </div>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
