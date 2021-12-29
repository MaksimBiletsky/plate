<template>
  <div class="style-checkbox">
    <label class="switch">
      <input :class="styleName.replace(/ /g,'_').toLowerCase()" type="checkbox"/>
      <span class="slider">
          <span class="checkbox-text">{{ styleName }}</span>
      </span>
    </label>
  </div>
</template>

<script>
export default {
    props: ['styleName'],
    data() {
    return {
      is_checked: "",
    };
  },
}
</script>
<style lang="scss">
.style-checkbox {
  display: flex;
  line-height: 0.6em;
}

.checkbox-text {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 23px;
  padding: 0 23px;
}
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 13px;
  height: 43px;
  border: white;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #b6ff7c;
}

input:focus + .slider {
  box-shadow: 0 0 1px #b6ff7c;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
</style>
