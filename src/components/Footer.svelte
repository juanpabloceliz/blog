<style>
  .Footer {
    background: rgba(28, 41, 56, 0.8);
    color: white;
    padding: 1.5em 0;
    margin: 2em 0 0 0;
    font-size: 13px;
    font-weight: 300;
  }
  .Footer-container {
    display: grid;
    grid-template-columns: minmax(auto, 1024px);
    justify-content: center;
    align-items: center;
  }
  .Footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .Footer-svelte {
    display: flex;
    align-items: center;
  }
</style>

<footer class="Footer">
  <div class="Footer-container">
    <div class="Footer-content">
      <div class="Footer-copy">Made by Juan</div>
      <div class="Footer-svelte">Powered by Svelte</div>
    </div>
  </div>
</footer>
