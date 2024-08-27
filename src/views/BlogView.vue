<script></script>
<template>
  <div class="textDisplay">
    <p>
      You can find my blog posts here.
      <a href="https://medium.com/@thomasharris0147">Medium</a>
    </p>
  </div>
</template>
<style scoped>
p {
  white-space: pre-wrap;
}
.textDisplay {
  position: absolute;
  bottom: 0;
  width: 30vw;
  height: 90vh;
  background: rgba(202, 92, 221, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  border: 2px solid #e8bcf0;
  animation: fadeIn 5s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@media screen and (max-width: 750px) {
  .textDisplay {
    width: 100vw;
  }
}
</style>
