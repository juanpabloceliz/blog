<!--<script ✂prettier:content✂="CiAgaW1wb3J0IGFuYWx5dGljc1RyYWNraW5nIGZyb20gIi4uL3V0aWxzL2FuYWx5dGljcyI7Cg==" ✂prettier:content✂="e30=">{}</script>-->
<style>
  .Header {
    background-color: #fafbfc;
    color: #191a22;
    padding: 1em 0 0 0;
  }
  .Header-container {
    display: grid;
    grid-template-columns: minmax(auto, 1024px);
    justify-content: center;
    align-items: center;
  }
  .Header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .Header h1 {
    color: #191a22;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.8px;
    cursor: pointer;
  }
  .Header h1 span {
    display: block;
    font-size: 13px;
    font-weight: 300;
    letter-spacing: normal;
    margin: 0.3em 0 0 0;
  }
  .Header ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .Header li {
    display: inline-block;
    margin: 0 0.5em 0 0;
  }
  .Header a {
    text-decoration: none;
    font-size: 14px;
    font-weight: 300;
  }
  .Header-social img {
    width: 20px;
  }
</style>

<header class="Header">
  <div class="Header-container">
    <div class="Header-content">
      <div class="Header-logo">
        <h1>Juan Pablo Celiz <span>Frontend Developer & Professor</span></h1>
      </div>
      <div class="Header-social">
        <ul>
          <li>
            <a href="/" target="_blank" rel="noreferrer">
              <!-- on:click={analyticsTracking('GitHub')} -->
              <img src="github-icon.png" alt="GitHub" /></a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noreferrer">
              <!-- on:click={analyticsTracking('Twitter')} -->
              <img src="twitter-icon.png" alt="Twitter" /></a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noreferrer">
              <!-- on:click={analyticsTracking('LinkedIn')} -->
              <img src="linkedin-icon.png" alt="LinkedIn" /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>
