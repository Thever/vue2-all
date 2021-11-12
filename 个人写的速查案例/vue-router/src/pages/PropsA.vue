<template>
    <div>
        <p>propsA传入的id:{{id}}</p>
        <p>propsA传入的title:{{title}}</p>
    </div>
</template>
<script>
export default {
    name:'PropsA',
    props:['id','title']
}
</script>