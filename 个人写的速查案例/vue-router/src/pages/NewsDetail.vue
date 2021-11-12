<template>
    <div>
        <p>news详情-用来演示query传参</p>
        <p>id:{{$route.query.id}}</p>
        <p>id:{{$route.query.title}}</p>
    </div>
</template>
<script>
export default {
    name:'NewsDetail',
}
</script>