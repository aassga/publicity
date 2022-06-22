<template>
  <div id="mvArea">
    <ul class="mvList">
      <li>
        <div class="mvImg gatsby-image-wrapper">
          <div aria-hidden="true"></div>
          <img aria-hidden="true" src="@/assets/background/hichat-header-bg.png" alt="">
          <picture>
            <source 
              srcset="@/assets/background/hichat-header-bg.png" 
              sizes="(max-width: 1920px) 100vw, 1920px">
            <img 
            sizes="(max-width: 1920px) 100vw, 1920px" 
            src="@/assets/background/hichat-header-bg.png" alt=""
              loading="eager">
          </picture>
        </div>
      </li>
      <li>
        <div class="mvImg gatsby-image-wrapper">
          <div aria-hidden="true"></div>
          <img aria-hidden="true" src="@/assets/background/hichat-header-bg2.png" alt="">
          <picture>
            <source 
              srcset="@/assets/background/hichat-header-bg2.png" 
              sizes="(max-width: 1920px) 100vw, 1920px">
            <img 
              sizes="(max-width: 1920px) 100vw, 1920px" 
              src="@/assets/background/hichat-header-bg2.png" alt=""
              loading="eager">
          </picture>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.mvList {
  li {left: 0;}
  .mvImg {
    position: relative;
    overflow: hidden;
    &>div {
      width: 100%;
      padding-bottom: 56.199999999999996%;
    }
    &>img {
      position: absolute;
      width: 100%; 
      height: 100%; 
      top: 0px; 
      left: 50%;
      transform: translateX(-50%);
      object-fit: cover; 
      object-position: center center; 
      opacity: 0; 
      transition-delay: 500ms;
    }
    &>picture {
      img {
        position: absolute; 
        top: 0px; 
        left: 50%; 
        width: 100%; 
        height: 100%; 
        transform: translateX(-50%);
        object-fit: cover; 
        object-position: center center; 
        opacity: 1; 
        transition: opacity 500ms ease 0s;
      }
    }
  }
}
</style>