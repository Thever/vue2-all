<template>
    <div>
        <p>news详情-用来演示params传参</p>
        <p>id:{{$route.params.id}}</p>
        <p>id:{{$route.params.title}}</p>
    </div>
</template>
<script>
export default {
    name:'MessageDetail'
}
</script>