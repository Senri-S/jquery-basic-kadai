$(function () {
  $(window).on({
    'scroll': ()=>{
      console.log('scrollイベントが発生しました');
    },
    'load':()=>{
      console.log('loadイベントが発生しました');
    },
  });
});