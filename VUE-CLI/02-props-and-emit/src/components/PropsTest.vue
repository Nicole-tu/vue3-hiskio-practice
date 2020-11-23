<script>
export default {
  // 聲明有props傳進來
  // props: ['msg'], 
  // 定義型別
  // props: {
  //   msg: String
  // },
  // 定義型別及預設值避免忘記傳值
  props: {
    str: {
      type: String,
      default: 'Hello user'
    },
    bool: {
      type: Boolean,
      default: true
    },
    num: {
      type: Number,
      default: 0
    },
    // array & object 要用function回傳
    arr: {
      type: Array,
      default: () => []
    },
    obj: {
      type: Object,
      default: () => ({})
    },
    handleClickFn: {
      type: Function,
      default: () => { }
    }
  },
  setup(props) {
    console.log(props)
    return {
      props
    }
  }
}
</script>

<template>
  <h1>{{props.str}}</h1>
</template>

<style>
h1 {
  color: blue;
  font-size: 20px;
}
</style>