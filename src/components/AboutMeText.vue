<script></script>
<template>
  <div class="textDisplay">
    <pre>
Hello, my name is Thomas Saran Timmothy Harris. I am from here. I have been coding professionally now for about 2 years.
If you wish to contact me, you can reach me through my <a href="https://www.instagram.com/thxmvs_5031/">instagram</a>, my <a href="mailto:thomasharris0147@gmail.com">email</a> or my <a href="https://www.linkedin.com/in/thomas-saran-timmothy-harris/">LinkedIn</a>. Other socials I dont really use.
  </pre>
  </div>
</template>
<style scoped>
pre {
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
