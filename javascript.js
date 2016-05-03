
  $(document).ready(function(){
    $("button").tooltip();
});
  $('.SeeMore2').click(function(){
var $this = $(this);
$this.toggleClass('SeeMore2');
if($this.hasClass('SeeMore2')){
  $this.text('See More');
} else {
  $this.text('See Less');
}
});
