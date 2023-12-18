<template>
          <div class="mb-3 formInput">
          <label for="name" class="form-label">{{ title }}</label>
          <input type="text" class="form-control" :id="Id" :placeholder="title" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
        </div>
</template>

<script>
export default{
    name:'Form_Input',
    props:{
        Id:String,
        title:String,
        modelValue:String,
    },
}
</script>
<style scoped>
 .formInput{
    width:45%;
 }
 @media screen and (max-width: 570px) {
 .formInput{
    width:90%;
 }
 }
</style>
