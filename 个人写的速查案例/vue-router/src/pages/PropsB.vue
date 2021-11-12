<template>
    <div>
        <p>propsB传入的params.id:{{id}}</p>
        <p>propsB传入的params.title:{{title}}</p>
    </div>
</template>
<script>
export default {
    name:'PropsB',
    props:['id','title']
}
</script>