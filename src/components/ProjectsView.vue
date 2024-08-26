<script></script>
<template>
  <div class="textDisplay">
    <p>I am currently working on some projects. You can visit some of them here!</p>
    <ol>
      <li>
        <a href="https://pypi.org/project/exco/">Exco</a>: an open source excel extractor meant for
        large amounts of data with alot of variations in column formatting
      </li>
      <li>
        <a href="https://github.com/ThomasHarris0147/planets">Planets (this website)</a>: fun
        project made with vue and three js.
      </li>
    </ol>
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
